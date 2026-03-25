"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Check, ArrowRight, Upload, X } from "lucide-react";
import { useUploadThing } from "@/lib/uploadthing-client";
import { CONTACT, PACKAGES, ADDONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ADDON_NAMES = ADDONS.map((a) => a.name);
const MAX_PHOTO_MB = 7; // target ceiling after compression
const MAX_PHOTO_BYTES = MAX_PHOTO_MB * 1024 * 1024;

async function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      // Scale dimensions proportionally to hit target size
      const scale = Math.min(1, Math.sqrt(MAX_PHOTO_BYTES / file.size));
      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(img.width * scale);
      canvas.height = Math.floor(img.height * scale);
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressed = new File(
              [blob],
              file.name.replace(/\.[^.]+$/, ".jpg"),
              { type: "image/jpeg" }
            );
            // If still over limit (high-entropy images), drop quality further
            if (compressed.size > MAX_PHOTO_BYTES) {
              canvas.toBlob(
                (b2) => resolve(b2 ? new File([b2], compressed.name, { type: "image/jpeg" }) : file),
                "image/jpeg",
                0.6
              );
            } else {
              resolve(compressed);
            }
          } else {
            resolve(file);
          }
        },
        "image/jpeg",
        0.82
      );
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

const formatPhone = (value: string) => {
  const d = value.replace(/\D/g, "");
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
};

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<string, string>>>({});
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing("vehiclePhotos", {
    onUploadBegin: () => setIsUploading(true),
    onClientUploadComplete: (res) => {
      setUploadedUrls(res.map((f) => f.ufsUrl));
      setIsUploading(false);
    },
    onUploadError: () => {
      setIsUploading(false);
      setSubmitError("Photo upload failed. Please try again or remove photos and submit without them.");
    },
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    package: "",
    addons: [] as string[],
    year: "",
    make: "",
    model: "",
    maintenancePlan: "",
  });

  useEffect(() => {
    const pkg = searchParams.get("package");
    const addon = searchParams.get("addon");
    const maintenance = searchParams.get("maintenance");
    if (pkg) setForm((p) => ({ ...p, package: pkg, maintenancePlan: maintenance ?? "" }));
    if (addon) {
      const matchedAddon = ADDONS.find((a) => a.id === addon);
      if (matchedAddon) {
        setForm((p) => ({ ...p, addons: [...p.addons, matchedAddon.name] }));
      }
    }

    const handler = (e: Event) => {
      const ce = e as CustomEvent;
      const { package: pkgName, maintenance: maint } = ce.detail;
      if (pkgName) setForm((p) => ({ ...p, package: pkgName, maintenancePlan: maint ?? "" }));
    };
    window.addEventListener("updateContactForm", handler);
    return () => window.removeEventListener("updateContactForm", handler);
  }, [searchParams]);

  const selectedPkg = PACKAGES.find((p) => p.name === form.package);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((p) => ({
        ...p,
        addons: checked
          ? [...p.addons, value]
          : p.addons.filter((a) => a !== value),
      }));
    } else if (name === "package") {
      const pkg = PACKAGES.find((p) => p.name === value);
      setForm((p) => ({
        ...p,
        package: value,
        addons: pkg ? [...pkg.includedAddons] : [],
        maintenancePlan: "",
      }));
    } else if (name === "phone") {
      setForm((p) => ({ ...p, phone: formatPhone(value) }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const validate = () => {
    const errors: Partial<Record<string, string>> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }
    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (digits.length !== 10) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      let photoUrls = uploadedUrls;
      if (photoFiles.length > 0 && uploadedUrls.length === 0) {
        const res = await startUpload(photoFiles);
        if (!res) throw new Error("Upload failed");
        photoUrls = res.map((f) => f.ufsUrl);
      }

      const payload: Record<string, string> = {
        name: form.name,
        email: form.email,
        _replyto: form.email,
        phone: form.phone,
        package: form.package,
        message: form.message,
      };
      if (form.year) payload.year = form.year;
      if (form.make) payload.make = form.make;
      if (form.model) payload.model = form.model;
      if (form.addons.length > 0) payload.addons = form.addons.join(", ");
      if (form.maintenancePlan) payload.maintenancePlan = form.maintenancePlan;
      if (photoUrls.length > 0) (payload as Record<string, unknown>).photos = photoUrls;

      const res = await fetch(`https://submit-form.com/${CONTACT.formspark}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      router.push("/thanks");
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field?: string) =>
    cn(
      "w-full px-4 py-3 bg-[var(--steel)] border focus:outline-none text-[var(--cream)] placeholder-[var(--muted)] font-[var(--font-barlow)] text-sm transition-colors duration-200",
      field && fieldErrors[field]
        ? "border-red-400/70 focus:border-red-400"
        : "border-white/10 focus:border-[var(--olive)]"
    );
  const labelClass =
    "block mb-2 text-xs font-[var(--font-barlow-condensed)] font-semibold tracking-[0.15em] uppercase text-[var(--ash)]";
  const errorClass = "mt-1.5 text-xs text-red-400 font-[var(--font-barlow)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass("name")}
          />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass("email")}
          />
          {fieldErrors.email && <p className={errorClass}>{fieldErrors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(541) 000-0000"
          className={inputClass("phone")}
        />
        {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="year" className={labelClass}>Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="2019"
            className={inputClass()}
          />
        </div>
        <div>
          <label htmlFor="make" className={labelClass}>Make</label>
          <input
            type="text"
            id="make"
            name="make"
            value={form.make}
            onChange={handleChange}
            placeholder="Toyota"
            className={inputClass()}
          />
        </div>
        <div>
          <label htmlFor="model" className={labelClass}>Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={form.model}
            onChange={handleChange}
            placeholder="Camry"
            className={inputClass()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="package" className={labelClass}>Package</label>
        <select
          id="package"
          name="package"
          value={form.package}
          onChange={handleChange}
          required
          className={cn(inputClass(), "cursor-pointer")}
        >
          <option value="">Select a package</option>
          {PACKAGES.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name} ({p.priceRange})
            </option>
          ))}
          <option value="Not sure">Not sure yet</option>
        </select>
      </div>

      {(form.package === "Protection+" || form.package === "CeramicPro") && (
        <div>
          <label htmlFor="maintenancePlan" className={labelClass}>
            Maintenance Plan ($100-$200/month, optional)
          </label>
          <select
            id="maintenancePlan"
            name="maintenancePlan"
            value={form.maintenancePlan}
            onChange={handleChange}
            className={cn(inputClass(), "cursor-pointer")}
          >
            <option value="">No maintenance plan</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="both">Both Interior and Exterior</option>
          </select>
        </div>
      )}

      {selectedPkg && (
        <div className="bg-[var(--steel)] border border-white/5 p-4">
          <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-3">
            Included in {selectedPkg.name}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[...selectedPkg.interior, ...selectedPkg.exterior].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  size={12}
                  strokeWidth={1.5}
                  className="text-[var(--olive)] mt-0.5 shrink-0"
                />
                <span className="font-[var(--font-barlow)] text-xs text-[var(--ash)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label className={labelClass}>Add-Ons (contact for pricing)</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ADDON_NAMES.map((addon) => {
            const included = selectedPkg?.includedAddons.includes(addon);
            const checked = form.addons.includes(addon);
            return (
              <label
                key={addon}
                className={cn(
                  "flex items-center gap-3 cursor-pointer",
                  included && "opacity-40 cursor-not-allowed"
                )}
              >
                <input
                  type="checkbox"
                  name="addons"
                  value={addon}
                  checked={checked}
                  onChange={handleChange}
                  disabled={included}
                  className="sr-only"
                />
                <div
                  className={cn(
                    "w-5 h-5 border flex items-center justify-center shrink-0 transition-colors duration-200",
                    checked
                      ? "bg-[var(--olive)] border-[var(--olive)]"
                      : "border-white/20"
                  )}
                >
                  {checked && (
                    <Check
                      size={10}
                      strokeWidth={2}
                      className="text-[var(--cream)]"
                    />
                  )}
                </div>
                <span className="font-[var(--font-barlow)] text-sm text-[var(--ash)]">
                  {addon}
                </span>
                {included && (
                  <span className="font-[var(--font-barlow)] text-xs text-[var(--olive)]">
                    (Included)
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="photos" className={labelClass}>
          Vehicle Photos{" "}
          <span className="text-[var(--muted)] normal-case font-normal tracking-normal text-[11px]">
            — optional but recommended
          </span>
        </label>
        <p className="font-[var(--font-barlow)] text-xs text-[var(--muted)] mb-2">
          Add clear photos of your vehicle&apos;s current condition to receive a more accurate quote.
        </p>
        <label
          htmlFor="photos"
          className={cn(
            inputClass(),
            "flex items-center gap-3 cursor-pointer",
            photoFiles.length > 0 ? "border-[var(--olive)]/60" : ""
          )}
        >
          <Upload size={14} strokeWidth={1.5} className="text-[var(--muted)] shrink-0" />
          <span className="text-[var(--muted)]">
            {isCompressing
              ? "Optimizing photos..."
              : photoFiles.length > 0
              ? `${photoFiles.length} photo${photoFiles.length > 1 ? "s" : ""} selected`
              : "Choose photos..."}
          </span>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={async (e) => {
              const selected = e.target.files ? Array.from(e.target.files) : [];
              if (selected.length === 0) return;
              setIsCompressing(true);
              const processed = await Promise.all(
                selected.map((f) => f.size > MAX_PHOTO_BYTES ? compressImage(f) : Promise.resolve(f))
              );
              setPhotoFiles((prev) => [...prev, ...processed]);
              setIsCompressing(false);
              // reset input so the same file can be re-selected if removed
              e.target.value = "";
            }}
            className="sr-only"
          />
        </label>
        {photoFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {photoFiles.map((file, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-[var(--steel)] border border-white/10 px-2 py-1"
              >
                <span className="font-[var(--font-barlow)] text-xs text-[var(--ash)] max-w-[140px] truncate">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => setPhotoFiles((prev) => prev.filter((_, j) => j !== i))}
                  className="text-[var(--muted)] hover:text-[var(--cream)] transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X size={10} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your vehicle and what you are looking for..."
          className={inputClass()}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isUploading || isCompressing}
        className="clip-btn w-full flex items-center justify-center gap-3 bg-[var(--olive)] hover:bg-[var(--olive-lt)] disabled:opacity-50 disabled:cursor-not-allowed text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase py-4 text-base transition-colors duration-200"
      >
        {isCompressing ? "Optimizing Photos..." : isUploading ? "Uploading Photos..." : isSubmitting ? "Sending..." : "Schedule Consultation"}
        {!isSubmitting && !isUploading && !isCompressing && <ArrowRight size={16} strokeWidth={1.5} />}
      </button>

      {submitError && (
        <p role="alert" className="text-red-400 text-sm font-[var(--font-barlow)] text-center">
          {submitError}
        </p>
      )}

      <p className="text-center font-[var(--font-barlow)] text-sm text-[var(--ash)]">
        Or call directly:{" "}
        <a
          href={CONTACT.phoneTel}
          className="text-[var(--olive)] hover:text-[var(--olive-lt)] font-semibold transition-colors duration-200"
        >
          {CONTACT.phone}
        </a>
      </p>
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useFormspark } from "@formspark/use-formspark";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const packages = [
  {
    name: "Economy",
    price: "$100 - $200",
    services: [
      "Basic cleaning",
      "Panel",
      "Windows cleaned",
      "Pedals cleaned",
      "Pre wash",
      "Two bucket hand wash",
      "Scrub wheels & tires",
      "Wax & tire shine",
      "Hand dry",
    ],
    includedAddons: [],
  },
  {
    name: "Protection+",
    price: "$400 - $500",
    services: [
      "Deep clean",
      "Steam disinfectant",
      "Leather treatment",
      "Spot extraction",
      "Fenders scrubbed",
      "Iron remover",
      "Clay bar",
      "Premium sealant",
      "Plastic protection",
    ],
    includedAddons: ["Spot Extraction"],
  },
  {
    name: "CeramicPro",
    price: "$800 - $1400",
    services: [
      "Ceramic coating on painted surfaces",
      "Full extraction",
      "Protection & conditioning",
      "Trim restoration",
      "Engine bay cleanup",
    ],
    includedAddons: [
      "Glass Polish",
      "Engine Bay Clean-up",
      "Wheel Polish and Coating",
      "Trim Restoration",
    ],
  },
  {
    name: "I'm not sure yet",
    price: "Varies",
    services: ["We'll help you choose the best package"],
    includedAddons: [],
  },
];

const addOns = [
  "O-Zone Treatment",
  "Glass Polish",
  "Paint Correction",
  "Spot Extraction",
  "Engine Bay Clean-up",
  "Interior Ceramic Leather Coating",
  "Wheel Polish and Coating",
  "Trim Restoration",
];

const FORMSPARK_FORM_ID = "YOJFX3S30";

export default function ContactForm() {
  const router = useRouter();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [formData, setFormData] = useState({
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

  const searchParams = useSearchParams();

  useEffect(() => {
    const packageParam = searchParams.get("package");
    const addonParam = searchParams.get("addon");
    const maintenanceParam = searchParams.get("maintenance");

    if (packageParam) {
      setFormData((prev) => ({ 
        ...prev, 
        package: packageParam,
        maintenancePlan: maintenanceParam || ""
      }));
    }

    if (addonParam) {
      setFormData((prev) => ({
        ...prev,
        addons: [...prev.addons, addonParam],
      }));
    }

    const handleUpdateContactForm = (event: CustomEvent) => {
      const { package: packageName, maintenance } = event.detail;
      if (packageName) {
        setFormData((prev) => ({
          ...prev,
          package: packageName,
          maintenancePlan: maintenance || "",
        }));
      }
    };

    window.addEventListener(
      "updateContactForm",
      handleUpdateContactForm as EventListener
    );

    return () => {
      window.removeEventListener(
        "updateContactForm",
        handleUpdateContactForm as EventListener
      );
    };
  }, [searchParams]);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formattedValue }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => {
      if (type === "checkbox") {
        const checked = (e.target as HTMLInputElement).checked;
        return {
          ...prevState,
          addons: checked
            ? [...prevState.addons, value]
            : prevState.addons.filter((addon) => addon !== value),
        };
      } else if (name === "package") {
        const selectedPackage = packages.find((p) => p.name === value);
        return {
          ...prevState,
          package: value,
          addons: selectedPackage ? [...selectedPackage.includedAddons] : [],
          maintenancePlan: "",
        };
      }
      return { ...prevState, [name]: value };
    });
  };

  const selectedPackage = packages.find((p) => p.name === formData.package);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
    router.push("/thanks");
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-white"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          pattern="\(\d{3}\) \d{3}-\d{4}"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
          placeholder="(123) 456-7890"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-white"
          >
            Year
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
            placeholder="Enter year (e.g. 2019)"
          />
        </div>
        <div>
          <label
            htmlFor="make"
            className="block mb-2 text-sm font-medium text-white"
          >
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
            placeholder="Enter make (e.g. Chevrolet)"
          />
        </div>
        <div>
          <label
            htmlFor="model"
            className="block mb-2 text-sm font-medium text-white"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
            placeholder="Enter model (e.g. Corvette)"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="package"
          className="block mb-2 text-sm font-medium text-white"
        >
          Select Package
        </label>
        <select
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white"
          required
        >
          <option value="">Select a package</option>
          {packages.map((pkg) => (
            <option key={pkg.name} value={pkg.name}>
              {pkg.name} ({pkg.price})
            </option>
          ))}
        </select>
      </div>

      {(formData.package === "Protection+" || formData.package === "CeramicPro") && (
        <div>
          <label
            htmlFor="maintenancePlan"
            className="block mb-2 text-sm font-medium text-white"
          >
            Maintenance Plan ($100-$200/month)
          </label>
          <select
            id="maintenancePlan"
            name="maintenancePlan"
            value={formData.maintenancePlan}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white"
          >
            <option value="">Select a maintenance plan</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="both">Both Interior & Exterior</option>
          </select>
        </div>
      )}

      {selectedPackage && (
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">Included Services:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {selectedPackage.services.map((service) => (
              <li key={service} className="flex items-center text-gray-300">
                <Check className="w-4 h-4 mr-2 text-[#606c38]" />
                {service}
              </li>
            ))}
            {formData.maintenancePlan && (
              <li className="flex items-center text-[#606c38] font-semibold">
                <Check className="w-4 h-4 mr-2" />
                {formData.maintenancePlan === "both" ? "Interior & Exterior Maintenance Plan" : formData.maintenancePlan.charAt(0).toUpperCase() + formData.maintenancePlan.slice(1) + " Maintenance Plan"}
              </li>
            )}
          </ul>
        </div>
      )}

      <div>
        <label className="block mb-2 text-sm font-medium text-white">
          Add-ons (Contact for pricing)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {addOns.map((addon) => {
            const isIncluded = selectedPackage?.includedAddons.includes(addon);
            return (
              <label
                key={addon}
                className={`flex items-center space-x-3 ${
                  isIncluded ? "opacity-50" : ""
                }`}
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    name="addons"
                    value={addon}
                    checked={formData.addons.includes(addon)}
                    onChange={handleChange}
                    disabled={isIncluded}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${
                      formData.addons.includes(addon)
                        ? "bg-[#606c38] border-[#606c38]"
                        : "border-white/30"
                    }`}
                  >
                    {formData.addons.includes(addon) && (
                      <svg
                        className="w-4 h-4 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-white text-sm">{addon}</span>
                {isIncluded && (
                  <span className="text-[#606c38] text-xs">(Included)</span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-[#606c38] text-white placeholder-gray-400"
          placeholder="Tell us about your vehicle and service needs..."
        ></textarea>
      </div>

      <input type="hidden" name="maintenancePlan" value={formData.maintenancePlan} />

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#606c38] text-white py-4 px-8 rounded-full hover:bg-[#515c30] transition-all duration-300 hover:scale-105 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Schedule Consultation"}
      </button>

      <p className="text-center text-white mt-4">
        Or call us at:{" "}
        <a
          href="tel:+15413265822"
          className="text-[#606c38] hover:underline font-semibold text-lg tracking-wide"
        >
          +1 (541) 326-5822
        </a>
      </p>
    </form>
  );
}
import AddOnPage from '../../components/AddOnPage'

export default function InteriorCeramicLeatherCoatingPage() {
  return (
    <AddOnPage
      title="Interior Ceramic Leather Coating"
      description="Our Interior Ceramic Leather Coating service provides long-lasting protection for your vehicle's leather surfaces, keeping them looking new and easy to clean."
      benefits={[
        "Protects leather from UV damage, stains, and wear",
        "Makes leather surfaces easier to clean and maintain",
        "Prevents color fading and cracking",
        "Provides a soft, luxurious feel",
        "Extends the life of your vehicle's leather interior"
      ]}
      process={[
        "Thoroughly clean and degrease all leather surfaces",
        "Repair any minor damage or cracks in the leather",
        "Apply leather conditioner to restore moisture",
        "Carefully apply the ceramic coating to all leather surfaces",
        "Allow the coating to cure",
        "Inspect and buff for a perfect finish"
      ]}
      imageSrc = "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/leather-ceramic-coating_e39ms4.webp"
    />
  )
}


import AddOnPage from '../../components/AddOnPage'

export default function TrimRestorationPage() {
  return (
    <AddOnPage
      title="Trim Restoration"
      description="Our Trim Restoration service brings new life to faded and oxidized exterior plastic and rubber trim, restoring your vehicle's sleek appearance."
      benefits={[
        "Restores faded and oxidized trim to like-new condition",
        "Protects trim from future UV damage and oxidation",
        "Enhances the overall appearance of your vehicle",
        "Saves money compared to replacing trim pieces",
        "Long-lasting results with proper maintenance"
      ]}
      process={[
        "Thoroughly clean all trim surfaces",
        "Sand heavily oxidized areas if necessary",
        "Apply specialized trim restorer product",
        "Work the product into the trim using appropriate tools",
        "Allow the product to cure",
        "Apply a protective sealant for long-lasting results"
      ]}
      imageSrc = "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580063/trim-restoration_8adu13o.webp"
    />
  )
}


import AddOnPage from '../../components/AddOnPage'

export default function SpotExtractionPage() {
  return (
    <AddOnPage
      title="Spot Extraction"
      description="Our Spot Extraction service targets stubborn stains and spots in your vehicle's interior, restoring the clean look of your carpets and upholstery."
      benefits={[
        "Removes tough stains from carpets and upholstery",
        "Eliminates odors associated with spills and stains",
        "Extends the life of your vehicle's interior materials",
        "Improves the overall appearance of your vehicle's interior",
        "Uses safe, eco-friendly cleaning solutions"
      ]}
      process={[
        "Identify and assess all spots and stains",
        "Pre-treat stains with appropriate cleaning solutions",
        "Use hot water extraction equipment to deep clean the affected areas",
        "Apply stain guard protection to prevent future staining",
        "Thoroughly dry the cleaned areas",
        "Final inspection to ensure all spots are removed"
      ]}
      imageSrc="https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/spot-extraction_bx1a8q.webp"
    />
  )
}


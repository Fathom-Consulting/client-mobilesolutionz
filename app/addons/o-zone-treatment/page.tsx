import AddOnPage from '../../components/AddOnPage'

export default function OZoneTreatmentPage() {
  return (
    <AddOnPage
      title="O-Zone Treatment"
      description="Our O-Zone Treatment is a powerful, eco-friendly method to eliminate stubborn odors and sanitize your vehicle's interior, leaving it fresh and clean."
      benefits={[
        "Eliminates tough odors like smoke, pet smells, and mildew",
        "Kills bacteria, viruses, and other harmful microorganisms",
        "Reaches areas that traditional cleaning methods can't",
        "Safe for use on all interior surfaces",
        "Leaves no chemical residue"
      ]}
      process={[
        "Inspect the vehicle and identify odor sources",
        "Prepare the vehicle by removing loose items and debris",
        "Set up the O-Zone generator in the vehicle",
        "Run the treatment for the appropriate duration",
        "Air out the vehicle thoroughly after treatment",
        "Perform a final inspection to ensure odor elimination"
      ]}
      imageSrc = "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/ozone-treatment_ry1fz4.webp"
    />
  )
}


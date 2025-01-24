import AddOnPage from '../../components/AddOnPage'

export default function PaintCorrectionPage() {
  return (
    <AddOnPage
      title="Paint Correction"
      description="Our Paint Correction service restores your vehicle's paint to its original glory, removing swirl marks, light scratches, and oxidation for a flawless finish."
      benefits={[
        "Restores the original shine and color of your vehicle",
        "Removes swirl marks, light scratches, and oxidation",
        "Enhances the effectiveness of waxes and sealants",
        "Increases your vehicle's resale value",
        "Provides a smooth surface that's easier to maintain"
      ]}
      process={[
        "Thorough wash and decontamination of the paint surface",
        "Clay bar treatment to remove embedded contaminants",
        "Assess the paint condition and determine the appropriate correction level",
        "Machine polish using various pads and compounds as needed",
        "Refine the finish for maximum gloss",
        "Apply a protective sealant or coating"
      ]}
      imageSrc = "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/paint-correction_ooyhnf.webp"
    />
  )
}


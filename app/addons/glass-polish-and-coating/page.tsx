import AddOnPage from '../../components/AddOnPage'

export default function GlassPolishAndCoatingPage() {
  return (
    <AddOnPage
      title="Glass Polish and Coating"
      description="Our Glass Polish and Coating service enhances visibility and protects your vehicle's windows, making them easier to clean and more resistant to environmental contaminants."
      benefits={[
        "Improves visibility in all weather conditions",
        "Repels water, making it easier to clear rain while driving",
        "Reduces glare from sunlight and other vehicles' headlights",
        "Makes cleaning easier by preventing dirt and grime buildup",
        "Protects against minor scratches and etching"
      ]}
      process={[
        "Thoroughly clean all glass surfaces",
        "Clay bar treatment to remove embedded contaminants",
        "Polish the glass to remove any light scratches or hazing",
        "Apply the specialized glass coating",
        "Cure the coating for maximum durability",
        "Final inspection and touch-ups"
      ]}
      imageSrc = "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580062/glass-cleaning_f7ieuo.webp"
    />
  )
}


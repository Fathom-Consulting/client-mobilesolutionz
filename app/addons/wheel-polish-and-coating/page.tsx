import AddOnPage from '../../components/AddOnPage'

export default function WheelPolishAndCoatingPage() {
  return (
    <AddOnPage
      title="Wheel Polish and Coating"
      description="Our Wheel Polish and Coating service restores the shine to your wheels and protects them from brake dust, road grime, and other contaminants."
      benefits={[
        "Enhances the appearance of your wheels",
        "Protects against brake dust and road grime",
        "Makes future cleaning easier and quicker",
        "Helps prevent corrosion and pitting",
        "Can improve the overall look of your vehicle"
      ]}
      process={[
        "Remove wheels from the vehicle (if necessary)",
        "Thoroughly clean wheels, including barrel and calipers",
        "Clay bar treatment to remove embedded contaminants",
        "Polish wheels to remove light scratches and oxidation",
        "Apply ceramic coating to wheels and calipers",
        "Allow coating to cure before reinstalling wheels"
      ]}
      imageSrc = "https://res.cloudinary.com/dkgpsncrn/image/upload/v1737580063/wheel-polish_vbuczp.webp"
    />
  )
}


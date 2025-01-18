import AddOnPage from '@/app/components/AddOnPage'

export default function EngineBayCleanUpPage() {
  return (
    <AddOnPage
      title="Engine Bay Clean-up"
      description="Our Engine Bay Clean-up service degreases and details your vehicle's engine compartment, improving its appearance and making it easier to spot potential issues."
      benefits={[
        "Improves the overall appearance of your vehicle",
        "Makes it easier to spot leaks and other potential issues",
        "Helps prevent corrosion of engine components",
        "Reduces the risk of electrical issues caused by grime buildup",
        "Can help improve resale value"
      ]}
      process={[
        "Cover sensitive electrical components",
        "Apply degreaser to loosen dirt and oil",
        "Gently pressure wash the engine bay",
        "Hand clean hard-to-reach areas",
        "Apply protectant to rubber and plastic components",
        "Dry and inspect the engine bay"
      ]}
      price="$100 - $200"
      imageSrc = "/images/placeholder.svg"

    />
  )
}


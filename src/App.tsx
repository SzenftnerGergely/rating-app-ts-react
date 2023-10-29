import { useState } from "react"
import Rating from "./components/Rating"
import ThankYou from "./components/ThankYou"

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false)
  const [rating, setRating] = useState<null | string>(null)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showThankYouPage ?
        (<ThankYou rating={rating} />) :
        (<Rating setShowThankYouPage={setShowThankYouPage} setRating={setRating} rating={rating} />)
      }
    </div>
  )
}

export default App

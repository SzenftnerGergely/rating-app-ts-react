
type Props = {
  rating: string | null,
}

const ThankYou = ({rating}: Props) => {
  return (
    <div className=" max-w-sm bg-[#212832] px-3 py-6 rounded-3xl flex flex-col items-center justify-center">
      <div className="my-8">
        <img src="/illustration-thank-you.svg" alt="" />
      </div>
      <p className="text-[#c86820] bg-[#262f38] py-1 px-3 rounded-full">You selected {rating} out of 5</p>
      <h1 className="text-gray-100 text-2xl mt-6 mb-4 font-semibold">Thank you!</h1>
      <p className="text-center text-gray-400 pb-4">We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </div>
  )
}

export default ThankYou

import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    setShowThankYouPage: Dispatch<SetStateAction<boolean>>
    setRating: Dispatch<SetStateAction<string | null>>
    rating: string | null
}

const Rating = ({rating, setShowThankYouPage, setRating }: Props) => {
    const [active, setActive] = useState({
        firstContainer: false,
        secondContainer: false,
        thirdContainer: false,
        forthContainer: false,
        fifthContainer: false
    })

    const handleSubmit = () => {
        if(!rating) return

        setShowThankYouPage(true)
    }

    return (
        <div className=" max-w-sm bg-[#212832] px-7 py-8 rounded-3xl">
                <div className="bg-[#272e38] flex items-center 
                justify-center rounded-full w-[3.5rem] h-[3.5rem]">
                    <img src="/icon-star.svg" alt="star icon" />
                </div>

                <h1 className=" text-gray-100 text-3xl mt-6 mb-4 font-semibold">How did we do?</h1>
                <p className="text-gray-400 leading-7">Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className="flex justify-between my-6">
                    <div
                        className={`text-gray-400 rounded-full py-4 px-6 cursor-pointer
                        ${active.firstContainer ? "bg-[#7c8898]" : "bg-[#213139]"}
                        hover:bg-[#fe7610] hover:text-gray-50 transition-all
                        active:scale-95`}
                        onClick={() => {
                            setActive({
                                firstContainer: true,
                                secondContainer: false,
                                thirdContainer: false,
                                forthContainer: false,
                                fifthContainer: false
                            }),
                            setRating("1")
                        }}
                    >1
                    </div>
                    <div
                        className={`text-gray-400 rounded-full py-4 px-6 cursor-pointer
                        ${active.secondContainer ? "bg-[#7c8898]" : "bg-[#213139]"}
                        hover:bg-[#fe7610] hover:text-gray-50 transition-all
                        active:scale-95`}
                        onClick={() => {
                            setActive({
                                firstContainer: false,
                                secondContainer: true,
                                thirdContainer: false,
                                forthContainer: false,
                                fifthContainer: false
                            }),
                            setRating("2")
                        }}
                    >2
                    </div>
                    <div
                        className={`text-gray-400 rounded-full py-4 px-6 cursor-pointer
                        ${active.thirdContainer ? "bg-[#7c8898]" : "bg-[#213139]"}
                        hover:bg-[#fe7610] hover:text-gray-50 transition-all
                        active:scale-95`}
                        onClick={() => {
                            setActive({
                                firstContainer: false,
                                secondContainer: false,
                                thirdContainer: true,
                                forthContainer: false,
                                fifthContainer: false
                            }),
                            setRating("3")
                        }}
                    >3
                    </div>
                    <div
                        className={`text-gray-400 rounded-full py-4 px-6 cursor-pointer
                        ${active.forthContainer ? "bg-[#7c8898]" : "bg-[#213139]"}
                        hover:bg-[#fe7610] hover:text-gray-50 transition-all
                        active:scale-95`}
                        onClick={() => {
                            setActive({
                                firstContainer: false,
                                secondContainer: false,
                                thirdContainer: false,
                                forthContainer: true,
                                fifthContainer: false
                            }),
                            setRating("4")
                        }}
                    >4
                    </div>
                    <div
                        className={`text-gray-400 rounded-full py-4 px-6 cursor-pointer
                        ${active.fifthContainer ? "bg-[#7c8898]" : "bg-[#213139]"}
                        hover:bg-[#fe7610] hover:text-gray-50 transition-all
                        active:scale-95`}
                        onClick={() => {
                            setActive({
                                firstContainer: false,
                                secondContainer: false,
                                thirdContainer: false,
                                forthContainer: false,
                                fifthContainer: true
                            }),
                            setRating("5")
                        }}
                    >5
                    </div>

                </div>
                <button onClick={handleSubmit} className="bg-[#fc7613] text-gray-50 w-full py-3 rounded-full uppercase font-semibold tracking-wider hover:bg-gray-50 hover:text-[#fc7613] active:scale-95 transition-all">Submit</button>
        </div>
    )
}

export default Rating

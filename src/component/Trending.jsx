import React from "react"
import { AiOutlineClockCircle, AiTwotoneCalendar } from "react-icons/ai";
const Trending=()=>{
    return(
        <>
        <div className="mx-10">

            <span className="text-lg font-bold border-b-2 border-black pb-3 ">Trending Topics</span>
            <hr className="mt-3"></hr>
            <div>
                <div>
                    <img src='https://th.bing.com/th/id/OIP.Fgzfy_GJ2G9ftjnOkntBywHaEQ?pid=ImgDet&w=700&h=403&rs=1  '/>
                    <p>Play, Learn, And Interact: Why Cultpass Play Sports Facility Is The Best Place To Be?</p>
                    <p className=" flex items-center gap-1"><AiTwotoneCalendar/>Jul 13, 2022 | <AiOutlineClockCircle/> 34 min</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Trending;
import React from "react"
import { AiTwotoneCalendar , AiOutlineClockCircle } from 'react-icons/ai';

const BlogHeader=()=>{
    return(
        <>
           <div className=" px-28 h-[85vh] w-[100%] flex justify-center items-end pb-28  bg-cover no-repeat   bg-[url('https://th.bing.com/th/id/R.797e4ba481b7b05e44b8b749f0d1c327?rik=SokVKL5zrsefSg&riu=http%3a%2f%2fwww.factstoday.in%2fwp-content%2fuploads%2f2017%2f12%2f2.jpg&ehk=XxqlVV81nEfGpVm%2b8ou4NvuJErOKDW%2fhYm%2f75QWaQM4%3d&risl=&pid=ImgRaw&r=0')]">
                 <div>
                    <button className="bg-orange-400 px-2 py-1 rounded-xl text-white font-bold text-sm">fitness</button>
                    <h1 className="text-white text-4xl font-bold ">Toning, Flexibility, And Strength⁠— Can Yoga Do It All Flexibility, And Strength⁠— Can Yoga?</h1>
                    <p className="text-white flex items-center gap-1 " ><AiTwotoneCalendar/>Jul 13, 2022 | <AiOutlineClockCircle/> 34 min</p>

                 </div>
           </div>
        </>
    )
}

export default BlogHeader
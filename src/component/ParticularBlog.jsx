import React ,{useEffect,useState} from 'react';
import BlogHeader from './BlogHeader';
import Trending from './Trending';

const ParticularBlog=()=>{

    return(
        <>
        <BlogHeader/>
          <div className='border-[1px]  w-[50vw] px-10 py-8 flex  flex-col gap-5 items-center ml-10'>
            <h1 className='font-bold text-center text-black text-lg w-[30vw]  '>Join Our Newsletter and Get the Latest
            <br/>Posts to Your Inbox</h1>
            <div className='flex justify-around  w-[30vw]'>
                    <input placeholder='Email Address' className=' w-[20vw] outline-none border-[1px] bg-slate-100  px-4 py-2 focus:border-green-300 rounded-md' />
                        <button className='bg-pink-500 text-white px-3 py-2 rounded-md font-bold'>subscribe</button>
            </div>
          </div>
<br></br>
          <div className='border-[1px]  w-[50vw] px-10 py-8 flex  flex-col gap-5 items-center mx-auto'>
            <h1 className='font-bold text-center text-black text-lg w-[30vw]  '>Join Our Newsletter and Get the Latest
            <br/>Posts to Your Inbox</h1>
            <div className='flex justify-around  w-[30vw]'>
                    <input placeholder='Email Address' className=' w-[20vw] outline-none border-[1px] bg-slate-100  px-4 py-2 focus:border-green-300 rounded-md' />
                        <button className='bg-pink-500 text-white px-3 py-2 rounded-md font-bold'>subscribe</button>
            </div>
          </div>
          <Trending/>

          
        </>
    );
}

export default ParticularBlog
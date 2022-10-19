import React from 'react'

import disneylogo from '../Images/disneyLogo.svg'
import image1 from '../Images/movie1.jpg'
import image2 from '../Images/movie2.jpg'
import image3 from '../Images/movie3.jpg'
import image4 from '../Images/movie4.jpg'
import image5 from '../Images/movie5.jpg'
import image6 from '../Images/movie6.jpg'
import out_partners_img from '../Images/original.png'

const DisneyHome = () => {
    const movies = [
        {
            id:1,
            img:image1
        },
        {
            id:2,
            img:image2
        },
        {
            id:3,
            img:image3
        },
        {
            id:4,
            img:image4
        },
        {
            id:5,
            img:image5
        },
        {
            id:6,
            img:image6
        },
    ]
  return (
    <div className="w-full h-[75vh] bg-[url('/Users/mac/Desktop/react/youtube-series-preBuild/reference/src/Images/disneyHomeImage.png')] bg-no-repeat bg-cover">
        
        {/* login section  */}
        <div className=' flex w-full h-[75vh] '>
            <button className='bg-black text-xl text-white  mt-3 top-2 right-9 py-[8px] px-[16px] border border-white rounded-sm hover:bg-white hover:text-black opacity-80 fixed'>LOG IN</button>
            <div className='w-[640px] '>
                <div className='flex flex-col ml-[75px] mt-[150px]'>
                    <img src={disneylogo} className='w-[180px] h-[97px]'/>
                    <h1 className='text-5xl font-semibold text-white mt-[20px]'>More than you could ever imagine</h1>
                    <p className='text-slate-300 mt-[20px] text-xl'>Enter your email to create or restart your subscription </p>
                    <div className='flex mt-[20px]'>
                        <input className='w-[450px] h-[50px] p-[12px] bg-gray-700 rounded-l-md' placeholder='Email'/>
                        <button className='bg-blue-600 text-white w-[190px] h-[50px] rounded-r-md hover:bg-blue-500'>CONTINUE</button>
                    </div>
                    <p className='text-slate-300 mt-[20px] text-xl'>Get 12 months for 10 with an annual subscription. Savings when compared to cost of monthly subscription.</p>
                </div>
            </div>
        </div>

        {/* movies section  */}
        <div className='bg-slate-900 w-full h-screen'>
            <div className='flex flex-wrap mx-[80px] gap-4'>
                
                {
                    movies.map((movie)=>(
                        <div key={movie.id} className='mt-[30px] transition ease-in-out hover:scale-125'>
                             <img src={movie.img} className='w-[480px] h-[288px] rounded-md'/>
                        </div>
                    ))
                }
                
            </div>
            {/* our partners section */}
            <div className='flex flex-col  justify-center mt-8'>
                <h1 className='text-center text-white font-semibold text-4xl'>Our Partners</h1>
                <img src={out_partners_img} className='mt-10 w-1/2 self-center' />
            </div>
        </div>
    </div>
  )
}

export default DisneyHome


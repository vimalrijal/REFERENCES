import React from 'react'
import HeroImage from '../Images/heroImage1.png'
import instagramLogo from '../Images/instagramLogo.png'
import apple from '../Images/apple.png'
import google from '../Images/googlePlay.png'

const InstagramLogin = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center'>
      <div className='flex w-[935px] h-[600px]  mt-[100px]'>


        {/* image section  */}
        <div className='basis-1/2'>
          <img src={HeroImage} className='h-[581px] m-auto'/>
        </div>

        {/* login section  */}
        <div className=' basis-1/2'>
          <div className='flex flex-col h-full w-[400px]'>
            {/* 1 */}
            <div className='flex flex-col border '>   
                <img src={instagramLogo} className='w-[175px] h-[51px] m-auto mt-[40px]'/>
                <input  className='text-xs border  mx-[50px] mt-[10px] p-[10px]' placeholder='phone number, username or email address'/>
                <input  className='text-xs border  mx-[50px] mt-[10px] p-[10px]' placeholder='password'/>
                <button className='font-semibold bg-blue-300 mx-[50px] py-[5px] mt-[10px] text-white rounded-md'>Log In</button>
                <p className='text-blue-900 font-bold text-center mt-[40px]'>Login with Facebook</p>
                <p className='text-blue-900 text-xs text-center mt-[20px] mb-[30px]'>Forgotter your password?</p>
            </div>

            {/* 2 */}
            <div className='border mt-[20px]'>
              <p className='text-sm text-center p-[20px]'>Don't have an account? <span className='text-blue-500 font-bold'>Sign up</span></p>
            </div>

            {/* 3 */}
            <div className='mt-[30px]'>
              <p className='text-xs text-center'>Get the app</p>
              <div className='flex mt-[20px] justify-center'>
                <img  className='w-[136px] h-[40px]' src={apple}/>
                <img className='w-[136px] h-[40px]' src={google}/>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default InstagramLogin
import React from 'react'

import {FaFire, FaPoo} from 'react-icons/fa'
import { BsPlus, BsFillLightbulbFill, BsGear, BsVimeo } from "react-icons/bs";

const DiscordNavbar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 
                    flex flex-col bg-gray-900 text-white shadow-lg'>

        <SideBarIcon icon={<FaFire size="25"/>}/>
        <SideBarIcon icon={<BsPlus size="25"/>}/>
        <SideBarIcon icon={<BsFillLightbulbFill size="25"/>}/>
        <SideBarIcon icon={<FaPoo size="25"/>}/>
        <SideBarIcon icon={<FaFire size="25"/>}/>


       <div>
            <div className='bg-red-400 border-500-slate' >
                vimal rijal 
            </div>
       </div>
        
    </div>
  )
}

const SideBarIcon = ({icon,text="tooltip"}) =>{
 return (
    <div className='sidebar-icon group' >
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
 )
}

export default DiscordNavbar



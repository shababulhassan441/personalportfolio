import React from 'react'
import Image from 'next/image'

const skillIcons = [
    {icon:"/assets/reacticon.png" ,label:"ReactJs"},
    {icon:"/assets/nextjs.png"  ,label:"NextJs"},
    {icon:"/assets/wordpress.png" ,label:"wordpress"},
    {icon:"/assets/figma.png" ,label:"figma"},
    {icon:"/assets/nextjs.png" ,label:"nextjs"},
    {icon: "/assets/reacticon.png",label:"Reactjs"},
    {icon:"/assets/nodejs.png" ,label:"nodejs"},
    {icon:"/assets/tailwind.png" ,label:"tailwind"},
]
const Skills = () => {
  return (
    <div id='skills' className=''>
        <div className=" max-w-[1240px] mx-auto my-[60px] text-center">
           <h2 className=' text-center text-black capitalize text-[52px] font-semibold'>Skills <span className='text-primary'>stack</span> </h2>
           <div className="flex flex-wrap justify-center gap-6 mt-[40px] w-[90%] mx-auto">
           {
              skillIcons.map((item,index)=>(
                <div key={index} className="border border-black/40 p-5 w-[200px] flex flex-col items-center gap-2 rounded-md" >
                  <Image width={80} height={80} src={item.icon} alt={item.label} />
                  <p className='text-[20px] font-semibold capitalize'>{item.label}</p>
                </div>
              ))
           }
           </div>
          
        </div>
    </div>
  )
}

export default Skills
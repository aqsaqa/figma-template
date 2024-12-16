import React from 'react'
import { Button } from './ui/button'


const hero = () => {
  return (
  < section className='bg-bannerImg back relative bg-no-repeat bg-cover bg-bottom w-full h-screen' style={{ backgroundImage:"url('/img.png')"}}>
    <div className='absolute right-12 top-36 '>
        <div className=' bg-[#FFF3E3] pt-10 pl-8 font-bold '>
            New Arrival
        <div className=' pt-2 text-3xl text-[#B88E2F] '>Discover Our</div>
                 <div className=' text-4xl mb-3 font-bold text-[#B88E2F]'>New Collection</div>
            <div className='text-sm pr-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             numquam quo, ipsa expedita eius voluptate  </div>
            <Button className='text-white bg-[#B88E2F] mt-5 mb-5'>Buy Now</Button>
        </div>
    </div>
  </section>
  )
}

export default hero

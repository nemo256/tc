import React from 'react'
import Navbar from '../src/component/Navbar';
import Hero from '../src/component/Hero';
import Banner from '../src/component/Banner';
import Link from 'next/link';
 const Rooms = () => {
    return (
        <div>
            <Navbar />
           <Hero hero="roomsHero">
              <Banner title="our Rooms">
                  <Link href="/Home"><button className='btn-primary'>return home</button></Link>
              </Banner> 
           </Hero>
        </div>
    )
}


export default Rooms;
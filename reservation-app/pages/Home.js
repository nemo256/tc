/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Banner from '../src/component/Banner';
import Hero from '../src/component/Hero';
import Navbar from '../src/component/Navbar';
import Link from 'next/link';
import Services from '../src/component/Services';
 function Home() {
    return (
        <>
            <Navbar />
            <Hero>
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at 199$">
                    <>
                    <Link href={'/Rooms'} >
                        <button className="btn-primary">
                             our rooms
                        </button>
                    </Link>
                    </>
                </Banner>
            </Hero>
            <div id="services">
                <Services/>
            </div>
        </>
    )
}
Hero.defaultProps = {
    hero: "defaultHero"
}
export default Home;
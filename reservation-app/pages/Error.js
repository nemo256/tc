/* eslint-disable @next/next/link-passhref */
import React, { Component } from 'react'
import Hero from '../src/component/Hero'
import Banner from '../src/component/Banner'
import Link from 'next/link'
import Navbar from '../src/component/Navbar'
export default class Error extends Component {
    render() {
        return (
            <div>
                <Navbar />
               <Hero>
                   <Banner title="404" subtitle="Page not Found">
                       <Link href="/Home">
                           <button className='btn-primary'>return home</button>
                       </Link>
                   </Banner>
               </Hero>
            </div>
        )
    }
}
Hero.defaultProps = {
    hero: "defaultHero"
}

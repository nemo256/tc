/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import Link from 'next/link';
import logo from '../../styles/images/logo.png';
//import icon  3ligne  from chakra ui component

class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className='navbar'>
               <div className='nav-center'>
                <div className='nav-header'>
                    <Link href='/Home' passHref={true}>
                        <img src={logo} alt="Logo Reservation App"/>
                    </Link>
                   
                    

                    <button type='button' className='nav-btn' onClick={this.handleToggle}>{/*btn icon from chakra ui*/}O/C</button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                    <Link href='/Home'>Home</Link>
                    </li>
                    <li>
                    <Link href='/Rooms'>Rooms</Link>
                    </li>
                    <li>
                    <a href='#services'>Services</a>
                    </li>
                </ul>
               </div>
               
               
               
            </nav>
        )
    }
}

export default Navbar;
import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer, FaCoffee} from "react-icons/fa"
import Title from'./Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet'
            }, 
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, '
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, '
            },
            {
                icon:<FaCoffee/>,
                title:"Strogest Coffee",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, '
            }
        ]
    }
    render() {
        return (
            <section className='services'>
               <Title title="services"/> 
                <div className='services-center'>
                    {this.state.services.map((item,index) =>{
                        return (
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>)
                    })}
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'You get free cocktails!'
            },
            {
                icon:<FaHiking/>,
                title:"endless hiking",
                info:'you get endless hiking!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:'you get free shuttle!'
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:'You get strongest beer!'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                        <article key={index} className="services">
                        <span className="servicesIcon">{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>    
            </section>
        )
    }
}

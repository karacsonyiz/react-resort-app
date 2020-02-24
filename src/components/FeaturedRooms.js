import React, { Component } from 'react'
import {RoomContext} from '../context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

export default class FeaturedRoom extends Component {

    static contextType = RoomContext

    /*
    {rooms.map((row,i) => (
    <p key={i}>
    {row.name}
    </p>
    ))}
    */

    render() {
        //const {data} = this.context;
        let { loading, featuredRooms : rooms} = this.context
        rooms = rooms.map((room,i) => {
            return <Room key={room.id} room={room}/>
        })


        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
            </section>
            
        )
    }
}

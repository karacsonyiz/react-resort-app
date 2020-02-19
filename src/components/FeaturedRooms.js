import React, { Component } from 'react'
import {RoomContext} from '../context'

export default class FeaturedRoom extends Component {

    static contextType = RoomContext

    render() {

        const value = this.context;

        return (
            <div>
                hello from featuredRooms {value}
            </div>
        )
    }
}

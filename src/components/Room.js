import React from 'react'
import {Link} from 'react-router-dom'

export default function Room({room}) {

    console.log(room);

    const{name,slug,imgUrl,price} = room;
    

    return (
        <article className="room">
            <div className="img-container">
                <img src={imgUrl} alt="single room"/>
            </div>
        </article>
    )
}

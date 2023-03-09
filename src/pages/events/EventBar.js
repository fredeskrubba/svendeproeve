import React from 'react'
import { Link } from 'wouter'


const EventBar = ({img, name, scene, dato, id}) => {
  return (
    <section className='event-bar'>
        <img src={img} alt="event-img" />
        <h2 className='title'>{name}</h2>
        <div className='location'>
            <p className='scene'>{scene}</p>
            <p className='date'>{dato}</p>
        </div>
        <div className='button-cont'>
            <Link href={`events/${id}`}>
                <p className='read'>LÆS MERE</p>
            </Link>
            <Link href={`tickets/${id}`}>
              <p className='buy'>KØB BILLET</p>
            </Link>
        </div>
    </section>
  )
}

export default EventBar
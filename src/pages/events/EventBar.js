import React from 'react'

const EventBar = ({img, name, scene, dato}) => {
  return (
    <section className='event-bar'>
        <img src={img} alt="event-img" />
        <h2 className='title'>{name}</h2>
        <div className='location'>
            <p className='scene'>{scene}</p>
            <p className='date'>{dato}</p>
        </div>
        <div className='button-cont'>
            <p className='read'>LÆS MERE</p>
            <p className='buy'>KØB BILLET</p>
        </div>
    </section>
  )
}

export default EventBar
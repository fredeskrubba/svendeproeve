import React from 'react'
import { Link } from 'wouter'

const EventCard = ({img, place, startDate, endDate, title, author, id}) => {
  return (
    <article className='event-card'>
        <img src={img} alt="event" />
        <section className='card-info'>
            <p>{place}</p>
            <p className='date'>{`${startDate} - ${endDate}`}</p>
            <h2>{title}</h2>
            <h3>{`${author}`}</h3>
            <div className='buttons'>
                <Link href={`events/${id}`}>
                  <p className='read'>LÆS MERE</p>
                </Link>
                <Link href={`tickets/${id}`}>
                  <p className='buy'>KØB BILLET</p>
                </Link>
            </div>
        </section>
        
    </article>
  )
}

export default EventCard
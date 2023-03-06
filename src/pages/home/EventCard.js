import React from 'react'

const EventCard = ({img, place, startDate, endDate, title, author, alt}) => {
  return (
    <article className='event-card'>
        <img src={img} alt={alt} />
        <section className='card-info'>
            <p>{place}</p>
            <p className='date'>{`${startDate} - ${endDate}`}</p>
            <h2>{title}</h2>
            <h3>{`${author}`}</h3>
            <div className='buttons'>
                <p className='read'>LÆS MERE</p>
                <p className='buy'>KØB BILLET</p>
            </div>
        </section>
        
    </article>
  )
}

export default EventCard
import React from 'react'

const EventCard = ({img, place, startDate, endDate, title, author, alt}) => {
  return (
    <article>
        <img src={img} alt={alt} />
        <p>{place}</p>
        <p>{`${startDate} - ${endDate}`}</p>
        <h2>{title}</h2>
        <h3>{`Af ${author}`}</h3>
        <div className='buttons'>
            <p>LÆS MERE</p>
            <p>KØB BILLET</p>
        </div>
    </article>
  )
}

export default EventCard
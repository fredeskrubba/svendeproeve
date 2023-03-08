import React from 'react'


const ActorBlock = ({actor}) => {
   
  return (
    <section className="actor-block">
        <img src={actor.image} alt="actor-img" />
        <div className='actor-info'>
            <h2>{actor.name}</h2>
            <p>{actor.description}</p>
        </div>
        <p className='read-more'>LÆS MERE</p>
    </section>
  )
}

export default ActorBlock
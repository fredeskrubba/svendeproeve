import React from 'react'
import { Link } from 'wouter'


const ActorBlock = ({actor}) => {
   
  return (
    <section className="actor-block">
        <img src={actor.image} alt="actor-img" />
        <div className='actor-info'>
            <h2>{actor.name}</h2>
            <p>{actor.description}</p>
        </div>
        <Link href={`actors/${actor.id}`}>
            <p className='read-more'>LÆS MERE</p>
        </Link>
    </section>
  )
}

export default ActorBlock
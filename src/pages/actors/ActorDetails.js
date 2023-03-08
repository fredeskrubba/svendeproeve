import React from 'react'
import { Link } from 'wouter'

const ActorDetails = ({id, img, name, info}) => {
    console.log(id)
  return (
    <section className='actor-details'>
        <div>
            <h2>Skuespillere</h2>
            <section>
                <img src={img} alt="actor-img" />
                <article>
                    <h2>{name}</h2>
                    <p>{info}</p>
                </article>
            </section>
        </div>
        <Link href='/actors'>
            <p>ALLE SKUESPILLERE</p>
        </Link>
    </section>
  )
}

export default ActorDetails
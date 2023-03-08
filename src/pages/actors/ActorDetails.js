import React from 'react'
import { Link } from 'wouter'
import {useActorStore} from "../../stores/actorStore"
import { useEffect } from 'react'

const ActorDetails = ({id}) => {
    const details = useActorStore((state)=> state.actorDetails)
    const getDetails = useActorStore((state)=> state.fetchActorDetails)
    
    useEffect(()=>{
        getDetails(`https://api.mediehuset.net/detutroligeteater/actors/${id}`)
        console.log(details)
    }, [])
  return (
    details !== "" ? 
    <section className='actor-details'>
        <div>
            <h2 className='header'>Skuespillere</h2>
            <section className='actor-container'>
                <img src={details.item.image} alt="actor-img" />
                <article>
                    <h2>{details.item.name}</h2>
                    <p>{details.item.description}</p>
                </article>
            </section>
        </div>
        <Link href='/actors' >
            <p className='back-button'>ALLE SKUESPILLERE</p>
        </Link>
    </section> : null
    
  )
}

export default ActorDetails
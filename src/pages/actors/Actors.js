import React from 'react'
import { useActorStore } from '../../stores/actorStore'
import { useEffect } from 'react'
import ActorBlock from './ActorBlock'

const Actors = () => {
  const getActors = useActorStore((state) => state.fetchActors)
  const actors = useActorStore((state) => state.actors)

  useEffect(()=>{
    getActors("https://api.mediehuset.net/detutroligeteater/actors?orderby=name&dir=desc&limit=3")
  }, [])
  return (
    <section className='actors'>
      <h1 onClick={()=>{console.log(actors)}}>Skuespillere</h1>
      <div className='actors-container'>
        {actors !== "" ? actors.items.map((actor)=>{
          return <ActorBlock actor={actor} key={actor.id}/>
        }) : null}
      </div>
    </section>
  )
}

export default Actors
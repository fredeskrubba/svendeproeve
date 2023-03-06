import React from 'react'
import {useEventsStore} from "../../stores/eventsStore" 
import { useEffect } from 'react'

const Header = () => {
  const events = useEventsStore((state) => state.events)
  const fetchEvents = useEventsStore((state)=>state.fetch)
  
  useEffect(()=>{
    fetchEvents("https://api.mediehuset.net/detutroligeteater/events")
    console.log(events)
  }, [])
  return (
    <>
      {events !== null ? 
        <section className='event-header'>
          <article className='header-info'>
            <p className='place'>{events.items[5].stage_name}</p>
            <p className='date'>{`${events.items[5].startdate} - ${events.items[5].stopdate}` }</p>
            <h1 className='title'>{events.items[5].title}</h1>
            <h3 className='genre'>{events.items[5].genre}</h3>
          </article>
          <img src={events.items[5].image_small} alt="" />
        </section>
          
           : null}
    </>
  )
}

export default Header
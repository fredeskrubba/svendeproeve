import React from 'react'
import Header from "../home/Header"
import EventBar from './EventBar'
import { useEffect } from 'react'
import { useEventsStore } from '../../stores/eventsStore'

const Events = () => {
  const events = useEventsStore((state)=> state.events)
  const fetchEvents = useEventsStore((state)=> state.fetch)

  useEffect(()=>{
    fetchEvents()
  },[])
  return (
    <section>
      <Header/>
      <div className='filter-section'>
        <select>
          <option value="Filter">Filter </option>
        </select>
        <h2>Oversigt</h2>
      </div>
      {events !== null ? events.items.map((event)=>{
        return <EventBar img={event.image_small} name={event.title} scene={event.stage_name} dato={`${event.startdate} - ${event.stopdate}`} key={event.id}/>
      }) : null}
    </section>
  )
}

export default Events
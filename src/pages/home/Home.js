import React from 'react'
import Header from './Header'
import EventCard from './EventCard'
import { useEventsStore } from '../../stores/eventsStore'
import { useEffect } from 'react'

const Home = () => {
  const events = useEventsStore((state) => state.events)
  const fetchEvents = useEventsStore((state)=>state.fetch)
  
  useEffect(()=>{
    fetchEvents("https://api.mediehuset.net/detutroligeteater/events")
    console.log(events)
  }, [])

  return (
    <div>
      <Header/>
      <section className='card-section'>
        {events !== null ? 
          events.items.slice(0,3).map((item)=>{
            return <EventCard img={item.image_small} place={item.stage_name} startDate={item.startdate} endDate={item.stopdate} title={item.title} author={item.genre}/>
          })
        : null}
      </section>
      <section className='allEvents'>
          <p> SE ALLE FORESTILLINGER</p>
      </section>
    </div>
  )
}

export default Home
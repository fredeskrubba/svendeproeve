import React from 'react'
import { useEffect, useState} from 'react'
import { useEventsStore } from '../../stores/eventsStore'
import {ReactComponent as EmptyHeart} from "../../assets/icons/empty-heart.svg"
import {ReactComponent as FullHeart} from "../../assets/icons/full-heart.svg"

const EventDetails = ({id}) => {
  const eventDetails = useEventsStore((state)=> state.eventDetails)
  const fetchEventDetails = useEventsStore((state)=> state.fetchEventDetails)

  const [favourited, setFavourited] = useState(false)
  useEffect(()=>{
    fetchEventDetails(`https://api.mediehuset.net/detutroligeteater/events/${id}`)
    console.log(eventDetails)
  },[])
  return (
    <section className='event-details'>
      {
        eventDetails !== "" ? 
          <div>
            <img src={eventDetails.item.image_large} alt="event-img" />
            {favourited ? <FullHeart onClick={()=>{setFavourited(!favourited)}} className="heart-icon"/> : <EmptyHeart onClick={()=>{setFavourited(!favourited)}} className="heart-icon"/>}
            <article className="detail-header">
              <div className='place-container'>
                <p className='stage'>{eventDetails.item.stage_name}</p>
                <p className='date'>{`${eventDetails.item.startdate} - ${eventDetails.item.stopdate}`}</p>
              </div>
              <p className='price'>
                {`BILLETPRIS: ${eventDetails.item.price} DKK`}
              </p>
            </article>
            <section className="event-info">
              <div className="headline-container">
                <h1>{eventDetails.item.title}</h1>
                <h3>{eventDetails.item.genre}</h3>
              </div>
              <p>KØB BILLET</p>
            </section>
          </div> 
          
          
          : null
      }
    </section>
  )
}

export default EventDetails
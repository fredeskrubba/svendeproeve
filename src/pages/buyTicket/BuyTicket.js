import React from 'react'
import { useEventsStore } from '../../stores/eventsStore'
import { useEffect } from 'react'

const BuyTicket = ({id}) => {
  const eventDetails = useEventsStore((state)=> state.eventDetails)
  const fetchEventDetails = useEventsStore((state)=> state.fetchEventDetails)

  useEffect(()=>{
    fetchEventDetails(`https://api.mediehuset.net/detutroligeteater/events/${id}`)
  },[])

  return (
    <>
      {
        eventDetails !== "" ? 
          <section className='buy-ticket'>
            <div className="ticket-header">
              <img src={eventDetails.item.image} alt="ticket" />
              <div className='info'>
                <h1>Køb billet</h1>
                <h2>{eventDetails.item.title}</h2>
                <p className='place'>{`${eventDetails.item.stage_name} ${eventDetails.item.startdate} KL. ${eventDetails.item.starttime}`}</p>
                <section className="form">
                  <div>
                    <p>FORNAVN</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p>EFTERNAVN</p>
                    <input type="text" />
                  </div>
                  <div className='double-field'>
                    <p>VEJNAVN & NR</p>
                    <input type="text" />
                    <input type="text" />
                  </div>
                  <div>
                    <p>POSTNR. & BY</p>
                    <input type="text" />
                    <input type="text" />
                  </div>
                </section>
                <p>ALLE FELTER SKAL UDFYLDES</p>
                <section>
                  <p>ANTAL</p>
                  <div>
                    <p>-</p>
                    <p>2</p>
                    <p>+</p>
                  </div>
                  <div>
                    <p>PRIS 1.000 DKK</p>
                    <p>PRIS INKL  MOMS</p>
                  </div>
                </section>
              </div>
            </div>
          </section>
          : null
      }

    </>
  )
}

export default BuyTicket
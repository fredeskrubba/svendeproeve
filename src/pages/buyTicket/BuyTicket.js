import React from 'react'
import { useEventsStore } from '../../stores/eventsStore'
import { useEffect, useState } from 'react'
import { useSeatStore } from '../../stores/seatStore'

const BuyTicket = ({id}) => {
  const eventDetails = useEventsStore((state)=> state.eventDetails)
  const fetchEventDetails = useEventsStore((state)=> state.fetchEventDetails)
  const fetchSeats = useSeatStore((state)=> state.fetchSeats)
  const seats = useSeatStore((state)=>state.seats)
  const [amount, setAmount] = useState(0)

  useEffect(()=>{
    fetchEventDetails(`https://api.mediehuset.net/detutroligeteater/events/${id}`)
    fetchSeats(`https://api.mediehuset.net/detutroligeteater/seats/${id}`)
  },[])

  return (
    <>
      {
        eventDetails !== "" ? 
        <div className='container'>
          <section className='buy-ticket'>
              <div className="ticket-header">
                <img src={eventDetails.item.image} alt="ticket" />
                <div className='info'>
                  <h1>Køb billet</h1>
                  <h2>{eventDetails.item.title}</h2>
                  <p className='place'>{`${eventDetails.item.stage_name} ${eventDetails.item.startdate} KL. ${eventDetails.item.starttime}`}</p>
                  <section className="form">
                    <div className='field'>
                      <p>FORNAVN</p>
                      <input type="text" />
                    </div>
                    <div className='field'>
                      <p>EFTERNAVN</p>
                      <input type="text" />
                    </div>
                    <div className='field'>
                      <p>VEJNAVN & NR</p>
                      <div className="double-field">
                        <input type="text" className='double-field-1'/>
                        <input type="text" className='double-field-2'/>
                      </div>
                    </div>
                    <div className='field'>
                      <p>POSTNR & BY</p>
                      <div className="double-field">
                        <input type="text" className='double-field-1'/>
                        <input type="text" className='double-field-2'/>
                      </div>
                    </div>
                  </section>
                  <p className='subtext'>ALLE FELTER SKAL UDFYLDES</p>
                  <section className='amount'>
                    <p>ANTAL</p>
                    <div className='amount-slider'>
                      <p className='reduce' onClick={()=>{setAmount(amount - 1)}}>-</p>
                      <p className='num'>{amount}</p>
                      <p className='add' onClick={()=>{setAmount(amount + 1)}}>+</p>
                    </div>
                    <div>
                      <p className='current-price'>PRIS {eventDetails.item.price * amount} DKK</p>
                      <p className='tax'>PRIS INKL  MOMS</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className="seats">
                <h2>{eventDetails.item.stage_name}</h2>
                <section className="seat-select">
                  {seats !== "" ? 
                    seats.items.map((seat) => {
                      return <div className={`seat`}></div>
                    }) : null
                  }
                </section>
                <p>VÆLG SIDDEPLADSER</p>
              </div>
            </section>
            <p className='submit'>GODKEND BESTILLING</p>
        </div>
        
          : null
      }

    </>
  )
}

export default BuyTicket
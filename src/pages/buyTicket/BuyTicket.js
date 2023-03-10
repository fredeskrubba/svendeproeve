import React from 'react'
import { useEventsStore } from '../../stores/eventsStore'
import { useEffect, useState } from 'react'
import { useSeatStore } from '../../stores/seatStore'
import { useFormStore } from '../../stores/formStore'

const BuyTicket = ({id}) => {
  const eventDetails = useEventsStore((state)=> state.eventDetails)
  const fetchEventDetails = useEventsStore((state)=> state.fetchEventDetails)
  const fetchSeats = useSeatStore((state)=> state.fetchSeats)
  const seats = useSeatStore((state)=>state.seats)
  const [amount, setAmount] = useState(0)
  const [confirm, setConfirm] = useState(0)

  const firstName = useFormStore((state) => state.firstName)
  const setFirstName = useFormStore((state) => state.setFirstName)
  const lastName = useFormStore((state) => state.lastName)
  const setLastName = useFormStore((state) => state.setlastName)
  const addressName = useFormStore((state) => state.addressName)
  const setAddressName = useFormStore((state) => state.setAddressName)
  const addressNumber = useFormStore((state) => state.addressNumber)
  const setAddressNumber = useFormStore((state) => state.setAddressNumber)
  const zip = useFormStore((state) => state.zip)
  const setZip = useFormStore((state) => state.setZip)
  const city = useFormStore((state) => state.city)
  const setCity = useFormStore((state) => state.setCity)

  const chosenSeats = [
    {
      seat: 2,
      row: 5,
      price: 500
    },
    {
      seat: 3,
      row: 5,
      price: 500
    },
    {
      seat: 4,
      row: 5,
      price: 500
    }
  ]

  useEffect(()=>{
    fetchEventDetails(`https://api.mediehuset.net/detutroligeteater/events/${id}`)
    fetchSeats(`https://api.mediehuset.net/detutroligeteater/seats/${id}`)
  },[])

  return (
    <>
      {
        eventDetails !== "" && confirm === 0 ? 
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
                      <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    <div className='field'>
                      <p>EFTERNAVN</p>
                      <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                    <div className='field'>
                      <p>VEJNAVN & NR</p>
                      <div className="double-field">
                        <input type="text" className='double-field-1' onChange={(e)=>{setAddressName(e.target.value)}}/>
                        <input type="text" className='double-field-2' onChange={(e)=>{setAddressNumber(e.target.value)}}/>
                      </div>
                    </div>
                    <div className='field'>
                      <p>POSTNR & BY</p>
                      <div className="double-field">
                        <input type="text" className='double-field-1' onChange={(e)=>{setZip(e.target.value)}}/>
                        <input type="text" className='double-field-2' onChange={(e)=>{setCity(e.target.value)}}/>
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
            <p className='submit' onClick={()=>{
              if(firstName === "" || lastName === ""){
                alert(firstName + lastName)
              } else {
                setConfirm(1)}
              }
              
            }>GODKEND BESTILLING</p>
        </div>
        
          : null
      }
      {
        eventDetails !== "" && confirm === 1 ? 
        <div className='container'>
          <section className='buy-ticket'>
              <div className="ticket-header">
                <img src={eventDetails.item.image} alt="ticket" />
                <div className='confirm-info'>
                  <h1>Godkend ordre</h1>
                  <h2>PRODUKTER:</h2>
                  <article className='event'>
                    <p className='header'>FORESTILLING:</p>
                    <p>{eventDetails.item.title}</p>
                  </article>
                  <article className='event'>
                    <p className='header'>SCENE:</p>
                    <p>{eventDetails.item.stage_name}</p>
                  </article>
                  <article className='event'>
                    <p className='header'>DATO:</p>
                    <p>{eventDetails.item.startdate}</p>
                  </article>
                  <div className='bill'>
                    <article className='bill-row info-row'>
                      <section>
                        <p>SÆDE</p>
                        <p>RÆKKE</p>
                      </section>
                      <p>PRIS</p>
                    </article>
                    {chosenSeats.map((seat)=>{
                      return <article className='bill-row'>
                        <section>
                          <p>{seat.seat}</p>
                          <p>{seat.row}</p>
                        </section>
                        <p>{seat.price}</p>
                    </article>
                    })}
                    <article className='sum'>
                      <p>PRIS I ALT:</p>
                      <p>1500 DKK</p>
                    </article>
                    <p className='vat'>PRISER INKL. MOMS & BILLETGEBYR</p>
                  </div>
                  <article className='customer'>
                    
                    <h2>KUNDE:</h2>
                    <p>{`${firstName} ${lastName}`}</p>
                    <p>{`${addressName} ${addressNumber}`}</p>
                    <p>{`${zip} ${city}`}</p>
                    <p>EMAIL:</p>
                    <h2 className='email-notif'>BILLETERNE SENDES ELEKTRONISK TIL DIN EMAIL</h2>
                  </article>
                </div>
              </div>
            </section>
            <section className="submit-buttons">
              <p onClick={()=>{setConfirm(0)}} className="submit">TILBAGE</p>
              <p onClick={()=>{setConfirm(2)}} className="submit">GODKEND BESTILLING</p>
            </section>
          </div>
      : null }
      {
        confirm === 2 ? 
        <section className='thanks'>
          <h1>Tak for din bestilling</h1>
        </section>
        : null
      }
    </>
  )
}

export default BuyTicket
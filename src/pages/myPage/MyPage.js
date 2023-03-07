import React from 'react'
import { useLoginStore } from '../../stores/loginStore'
import {ReactComponent as TicketIcon} from "../../assets/icons/ticket.svg"
import {ReactComponent as FavouriteIcon} from "../../assets/icons/favourite.svg"
import {ReactComponent as StarIcon} from "../../assets/icons/star_1.svg"
import EventBlock from './EventBlock'
import { useReservationStore } from '../../stores/reservationStore'
import { useEffect } from 'react'

const MyPage = () => {
  const token = useLoginStore((state) => state.token)
  const logout = useLoginStore((state) => state.logout)
  console.log(token)
  const reservations = useReservationStore((state)=> state.reservations)
  const fetchReservations = useReservationStore((state)=> state.fetchReservations)

  useEffect(()=>{
    fetchReservations("https://api.mediehuset.net/detutroligeteater/reservations", token.access_token)
    console.log(reservations)
  }, [token])
  return (
    <section className='my-page'>
      {
        token !== "" ? 
        <div>
          <section className='hero'>
            <h1>Min side</h1>
            <article className='logout-cont'>
              <p>DU ER LOGGET PÅ {token.user.firstname.toUpperCase()}</p>
              <p className='logout-button' onClick={()=>{logout()}}>LOG OUT</p>  
            </article>
          </section> 

          <section className='my-page-section'>
            <div className="header">
              <TicketIcon/>
              <h2>MINE RESERVATIONER</h2>
            </div>
            <div className="info">
              <p>DATO & TID</p>
              <p>FORESTILLING</p>
              <p>SCENE</p>
              <p>ANTAL</p>
              <p>PRIS</p>
              <p>REDIGER</p>
            </div>
            <EventBlock/>
          </section>

          <section className='my-page-section'>
            <div className="header">
              <FavouriteIcon/>
              <h2>MINE FAVORITTER</h2>
            </div>
            <div className="info">
              <p>FORESTILLING</p>
              <p>REDIGER</p>
            </div>
          </section>

          <section className='my-page-section'>
            <div className="header">
              <StarIcon/>
              <h2>MINE ANMELDELSER</h2>
            </div>
            <div className="info">
              <p>FORESTILLING</p>
              <p>EMNE</p>
              <p>ANTAL STJERNER</p>
              <p>REDIGER</p>
            </div>
          </section>
        </div>
        
        : <p>Session expired</p>
      }
    </section>
  )
}

export default MyPage
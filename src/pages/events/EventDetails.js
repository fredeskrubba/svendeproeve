import React from 'react'
import { useEffect, useState} from 'react'
import { useEventsStore } from '../../stores/eventsStore'
import {ReactComponent as EmptyHeart} from "../../assets/icons/empty-heart.svg"
import {ReactComponent as FullHeart} from "../../assets/icons/full-heart.svg"
import {ReactComponent as FullStar} from "../../assets/icons/star-full.svg"
import {ReactComponent as EmptyStar} from "../../assets/icons/star-empty.svg"
import {ReactComponent as ReviewIcon} from "../../assets/icons/write-icon.svg"
import { useLoginStore } from '../../stores/loginStore'
import { useReviewStore } from '../../stores/reviewStore'
import { useFavouriteStore } from '../../stores/favouriteStore'

const EventDetails = ({id}) => {
  const eventDetails = useEventsStore((state)=> state.eventDetails)
  const eventReviews = useEventsStore((state)=> state.reviews)
  const fetchEventDetails = useEventsStore((state)=> state.fetchEventDetails)
  const fetchEventReviews = useEventsStore((state)=> state.fetchEventReviews)
  const postReview = useReviewStore((state)=> state.postReview)

  const [favourited, setFavourited] = useState(false)
  useEffect(()=>{
    fetchEventDetails(`https://api.mediehuset.net/detutroligeteater/events/${id}`)
    fetchEventReviews(`https://api.mediehuset.net/detutroligeteater/reviews`)
  },[])

  const login = useLoginStore((state)=> state.fetchLogin)
  const loggedIn = useLoginStore((state)=>state.loggedIn)
  const token = useLoginStore((state)=> state.token)
  const addFavourite = useFavouriteStore((state)=> state.addFavourite)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [subject, setSubject] = useState("")
  const [comment, setComment] = useState("")
  return (
    <section className='event-details'>
      {
        eventDetails !== "" ? 
          <div>
            <img src={eventDetails.item.image_large} alt="event-img" />
            {favourited ? <FullHeart onClick={()=>{
              setFavourited(!favourited)
              }} className="heart-icon"/> : <EmptyHeart onClick={()=>{
                setFavourited(!favourited)
                addFavourite("https://api.mediehuset.net/detutroligeteater/favorites", token.access_token, eventDetails.item.id)
              }} className="heart-icon"/>}
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
            <section className='description'>
              <p>{eventDetails.item.description}</p>
              <p>{`Varighed ca. ${eventDetails.item.duration_minutes} minutter`}</p>
            </section>
            <section className='featuring'>
              <h2>MEDVIRKENDE</h2>
              <div className="actor-grid">
                {eventDetails.item.actors.slice(0,5).map((actor)=>{
                  return <section key={actor.id}>
                    <img src={actor.image} alt="actor" />
                    <h2>{actor.name}</h2>
                  </section>
                })}
              </div>
            </section>
            <section className="reviews">
              <h2>ANMELDELSER</h2>
              { eventReviews !== "" ? eventReviews.items.slice(0,2).map((review)=>{
                return <section className='review' key={review.id}> 
                  <div className='stars'>
                    {Array(parseInt(review.num_stars)).fill(<FullStar />)}
                    {Array(5 - parseInt(review.num_stars)).fill(<EmptyStar />)}
                  </div>
                  <p className='created'>{review.created}</p>
                  <h2 className='user'>{`${review.user.firstname} ${review.user.lastname}`}</h2>
                  <p className="comment"> {review.comment}</p>
                </section>
              }) : null}
            </section>
            <section className="write-review">
              <div className="header">
                <ReviewIcon/>
                <p>Skriv en anmeldelse</p>
              </div>
              {loggedIn ? 
              
                <section className='add-review'> 
                 <p>Antal stjerner:</p>
                 <div>
                  <section className='form'>
                      <input type="text" placeholder='Emne' onChange={(e)=>setSubject(e.target.value)}/>
                      <textarea cols="30" rows="10" placeholder='Kommentar' onChange={(e)=>setComment(e.target.value)}/>
                  </section>
                  <p className='submit' onClick={()=>{postReview("https://api.mediehuset.net/detutroligeteater/reviews", token.access_token, eventDetails.item.id, subject, comment, 3)}}>SEND</p>
                 </div>
                </section>
               :
              <div>
                <p className='login-header'>Du skal være logget ind for at skrive en anmeldelse</p>
                <section className={`login-tab`}>
                                <div>
                                  <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
                                  <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <p className='login-button' onClick={()=>{
                                login("https://api.mediehuset.net/token", username, password)
                                }}>Login</p>
                        </section>
              </div> }
              
            </section>
          </div> 
          
          
          : null
      }
    </section>
  )
}

export default EventDetails
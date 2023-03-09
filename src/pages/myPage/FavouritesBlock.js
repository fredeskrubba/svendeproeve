import React from 'react'
import {ReactComponent as CancelIcon} from "../../assets/icons/cancel.svg"
import { useFavouriteStore } from '../../stores/favouriteStore'


const FavouritesBlock = ({name, token, eventId}) => {
  const removeFavourite = useFavouriteStore((state) => state.removeFavourite)
  return (
    <section className='block'>
      <p>{name}</p>
      <CancelIcon onClick={()=>{
        removeFavourite(`https://api.mediehuset.net/detutroligeteater/favorites/${eventId}`, token)
      }}/>
    </section>
  )
}

export default FavouritesBlock
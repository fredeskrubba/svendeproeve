import React from 'react'
import {ReactComponent as CancelIcon} from "../../assets/icons/cancel.svg"

const FavouritesBlock = ({name}) => {
  return (
    <section className='block'>
      <p>{name}</p>
      <CancelIcon/>
    </section>
  )
}

export default FavouritesBlock
import React from 'react'
import {ReactComponent as CancelIcon} from "../../assets/icons/cancel.svg"
const ReservationBlock = ({date, name, scene,  amount, price }) => {
  return (
    <section className='block'>
      <p>{date}</p>
      <p>{name}</p>
      <p>{scene}</p>
      <p>{amount}</p>
      <p>{price} DKK</p>
      <CancelIcon/>
    </section>
  )
}

export default ReservationBlock
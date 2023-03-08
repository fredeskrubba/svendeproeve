import React from 'react'
import {ReactComponent as CancelIcon} from "../../assets/icons/cancel.svg"
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg"
import {ReactComponent as StarIcon} from "../../assets/icons/star_2.svg"

const ReviewBlock = ({name, subject, starAmount }) => {
  return (
    <section className='block'>
      <p>{name}</p>
      <p>{subject}</p>
      <div>
        <StarIcon/>
      </div>
      <div>
        <EditIcon/>
        <CancelIcon/>
      </div>
    </section>
  )
}

export default ReviewBlock
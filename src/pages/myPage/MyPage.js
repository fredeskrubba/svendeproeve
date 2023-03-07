import React from 'react'
import { useLoginStore } from '../../stores/loginStore'

const MyPage = () => {
  const token = useLoginStore((state) => state.token)
  const name = token.user.firstname
  console.log(name)
  return (
    <section>
      {
        name !== undefined ? 
          <div>
            <h1>Min side</h1>
            <article>
              <p>DU ER LOGGET PÅ {name.toUpperCase()}</p>
            </article>
          </div> : <p>Session expired</p>
          
      }
    </section>
  )
}

export default MyPage
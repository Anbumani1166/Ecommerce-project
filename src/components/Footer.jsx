import React from 'react'
import { userContext } from '../App'

const Footer = () => {
let date=new Date()
  return (
    <div className='footer'>
        <h1>Footer</h1>
        <userContext.Consumer>
            {
                ({user})=>{
                    return <h1>{user.name}-{date.getFullYear()}</h1>
                }
            }

        </userContext.Consumer>
    </div>
  )
}

export default Footer
import React from 'react'
import Button from './Button'
import '../css/ProfileCard.css'

function ProfileCard(props) {
  return (
    <div className='ProfileCard'>
        <img src={props.avatar} alt="" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Button personType={props.personType}/>
    </div>
  )
}

export default ProfileCard
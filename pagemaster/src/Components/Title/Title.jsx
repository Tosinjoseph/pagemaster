import React from 'react'
import './Title.css'

const Title = ({setTitle}) => {
  return (
    <div className='title'>
        <h2>{setTitle}</h2>
    </div>
  )
}

export default Title
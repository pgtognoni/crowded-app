import React from 'react'
import { data } from './data'
import SearchBar from '../searchBar/SearchBar'
import './welcome.css'
function WelcomeComponent() {

  const { title,first, second } = data

  return (
    <div className='d-flex flex-column gap-3 justify-content-center welcome-container'>
      <h1 className='text-center'>Who's In Town?</h1>
      <div className=''>
        <h3 className='text-start'>{title} <span className='brand'>WIT</span></h3>
        <p className='text-start'>{first}</p>
        <p className='text-start'>{second}</p>
        <p className='text-start'>Start Now!</p>
      </div>
      <SearchBar />
    </div>
  )
}

export default WelcomeComponent
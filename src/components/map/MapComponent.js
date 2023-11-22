import React, { useState } from 'react'
import EventAddress from './EventAddress';
import GoogleMapComponent from './GoogleMap';
import './maps.css'

function MapComponent({event}) {
  
  const [ showMap, setShowMap ] = useState(false)
  
  return (
    <div className='container' id='google-map'>
      <div className='address-container text-start m-0'>
        <EventAddress event={event} />
      </div>
      <div onClick={() => setShowMap(!showMap)} className='btn-border show-map mb-3'>
        {showMap ? <span>Hide Map</span> : <span>Show Map</span>}
      </div>
      {showMap && <GoogleMapComponent event={event}  />}
    </div>
  )
}

export default MapComponent
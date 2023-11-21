import React from 'react'
import { getLineUp, getOffers, getAddress, getSaleDate } from './helpers'
import GoogleMapComponent from '../map/GoogleMapComponent'

function EventDescription({event}) {

  return (
    <div className='text-start container'>
        <div className='row'>
            <div className='col-12'>
                <GoogleMapComponent event={event} />
            </div>
            <div className='col-12 container'>
                {event.lineup && getLineUp(event)}
                {event.offers && getOffers(event)}
                {getSaleDate(event)}
                {getAddress(event)}
            </div>
        </div>
        <div className='row'>
            {event.description && <p>{event.description}</p>}
        </div>
    </div>
  )
}

export default EventDescription
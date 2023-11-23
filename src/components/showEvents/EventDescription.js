import React from 'react'
import { getDatetimeString, getStarTime } from './helpers'

function EventDescription({event}) {

  return (
    <div className='text-start container'>
        <div className='row'>
            <div className='col-12 container'>
                {event.lineup && event.lineup.map((artist, index) => {
                    return(
                    <div key={index} className='row'>
                        <p className='col-5 col-sm-3 m-0 text-strong'>Playing: </p>
                        <div className='col-7 col-sm-6 d-flex'>  
                            <p key={index} className='m-0'>{artist}</p>
                        </div>
                    </div>
                    )})}
                {event.offers && event.offers.map((offer, index) => {   
                    return(
                    <div key={index} className='row'>
                        <p className='col-5 col-sm-3 m-0 text-strong'>{offer.type}: </p>
                        <div className='col-7 col-sm-6 d-flex'>  
                            <span> <a href={offer.url} target='_blank' rel='noreferrer'>{offer.status}</a></span>
                        </div>
                    </div>
                    )
                })}
                <div className='row'>
                    <p className='col-5 col-sm-3 m-0 text-strong'>Sale starts: </p>
                    <div className='col-7 col-sm-6 d-flex'>  
                        <p className='m-0'>{getDatetimeString(event.on_sale_datetime)} {getStarTime(event.on_sale_datetime)}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            {event.description && <p className='description'>{event.description}</p>}
        </div>
    </div>
  )
}

export default EventDescription
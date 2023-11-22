import React from 'react'
import { formatAddress } from '../showEvents/helpers'

function EventAddress({event}) {
  return (
    <div className='row address'>
        <p className='col-5 col-sm-3 m-0'>Address: </p>
        <div className='col-7 d-flex'>  
            <p className='m-0'>{formatAddress(event)}</p>
        </div>
    </div>
)
}

export default EventAddress
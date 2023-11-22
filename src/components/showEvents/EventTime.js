import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getDatetimeString, getStarTime } from './helpers';

function EventTime({event}) {
  return (
    <div className='text-start d-flex align-items-center gap-2 event-data-container'>
      <AccessTimeIcon fontSize="large"/>
      <div className='venue-location'>
        <p className='m-0'>{getDatetimeString(event.datetime)}</p>
        <p className='m-0'>{getStarTime(event.datetime)}</p>
      </div>
    </div>
  )
}

export default EventTime
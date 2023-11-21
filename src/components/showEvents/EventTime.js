import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getDatetimeString, getStarTime } from './helpers';

function EventTime({event}) {
  return (
    <>
        <AccessTimeIcon fontSize="large"/>
            <div>
            <p className='m-0'>{getDatetimeString(event.datetime)}</p>
            <p className='m-0'>{getStarTime(event.datetime)}</p>
        </div>
    </>
  )
}

export default EventTime
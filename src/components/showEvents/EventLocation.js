import React from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


function EventLocation({event}) {
  return (
    <>
    <RoomOutlinedIcon fontSize="large"/>
    <div>
        <h3 className='m-0'>{event.venue.name}</h3>
        <span>{event.venue.city}, </span>
        <span> {event.venue.country}</span>
    </div>
    </>
  )
}

export default EventLocation
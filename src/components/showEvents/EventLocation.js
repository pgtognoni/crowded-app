import React from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

function EventLocation({event}) {
  return (
    <div className='text-start d-flex align-items-center gap-2 event-data-container'>
      <RoomOutlinedIcon fontSize="large"/>
      <div className='venue-location'>
        <span className='venue-name'>{event.venue.name}</span><br/>
        <span>{event.venue.city}, </span>
        <span> {event.venue.country}</span>
      </div>
    </div>
  )
}

export default EventLocation
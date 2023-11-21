import React from 'react'
import EventLocation from './EventLocation';
import EventTime from './EventTime';

function EventData({event}) {
  return (
    <>
      <div className='text-start d-flex align-items-center gap-2'>
        <EventLocation event={event}/>
      </div>
      <div className='text-start d-flex align-items-center gap-2'>
        <EventTime event={event}/>
      </div>
    </>
  )
}

export default EventData
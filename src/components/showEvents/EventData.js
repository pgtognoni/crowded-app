import React from 'react'
import EventLocation from './EventLocation';
import EventTime from './EventTime';

function EventData({event}) {

  return (
    <>
      <EventLocation event={event}/>
      <EventTime event={event}/>
    </>
  )
}

export default EventData
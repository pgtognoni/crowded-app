import React, { useState, useEffect } from 'react';
import { getDatetimeString, getStarTime } from '../showEvents/helpers';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function SingleEvent({eventInfo}) {

    const [ event, setEvent ] = useState([])


    useEffect(() => {
        if (eventInfo) {
            console.log(eventInfo)
            setEvent([eventInfo])
        }
    }, [eventInfo]);


  return (
    <div>
        {event && event.map((info, index) => {
            return(
                <div key={index} className='d-flex'>
                    
                </div>
            )
        })}
    </div>
  )
}

export default SingleEvent
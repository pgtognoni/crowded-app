import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import EventData from './EventData';
import EventDescription from './EventDescription';
import AddFavorites from '../addFavourites/AddFavorites';

function ShowEvents() {

    const [ events, setEvents ] = useState([])

    const eventsData = useSelector(state => state.artist.events)

    useEffect(() => {
        if (eventsData) {
            setEvents(eventsData)
        }
    }, [eventsData]);

    return (
        <Accordion defaultActiveKey="0">
            {events &&
                events.map((event, index) => (
                    <div key={index}>
                    <Accordion.Item eventKey={index} className='container-fluid'>
                        <div className='row'>
                            <div className='col-8'>
                                <EventData event={event}  />
                            </div>
                            <div className='col-3 d-flex align-items-center'>
                                <AddFavorites event={event} />
                                <Accordion.Header />
                            </div>
                        </div>
                        <Accordion.Body>
                            <EventDescription event={event} />
                        </Accordion.Body>
                    </Accordion.Item>   
                    </div>
                ))}
        </Accordion>
    );
}
export default ShowEvents;
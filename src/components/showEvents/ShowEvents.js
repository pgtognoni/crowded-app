import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import EventData from './EventData';
import EventDescription from './EventDescription';
import AddFavorites from '../addFavourites/AddFavorites';
import MapComponent from '../map/MapComponent';
import { handleIntersection } from './helpers';
import './showEvents.css';

function ShowEvents({handleOnClick, activeIndex}) {

    const [ events, setEvents ] = useState([])
    const eventsData = useSelector(state => state.artist.events)

    useEffect(() => {
        if (eventsData.length > 0) {
            setEvents(eventsData)
        } else {
            setEvents([])
        }
    }, [eventsData]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // Adjust this threshold as needed
          };
      
          const observer = new IntersectionObserver(handleIntersection, options);
      
          document.querySelectorAll('.item-container').forEach(item => {  
            if (item) {
                observer.observe(item);
              }
            })
  
          return () => {
            document.querySelectorAll('.item-container').forEach(item => {  
                if (item) {
                    observer.unobserve(item);
                  }
                })
          };
      
    }, [events])
    

    return (
        <Accordion defaultActiveKey="0" className='accordion-container p-0' >
            {events &&
                events.map((event, index) => (
                    <div key={index}>
                    <Accordion.Item eventKey={index} className='container item-container'>
                        <div className='row'>
                            <div className='col-12 col-sm-8 ms-3'>
                                <EventData event={event}  />
                            </div>
                            <div className='col-12 col-sm-3 d-flex align-items-center justify-content-around justify-content-xs-end' >
                                <AddFavorites event={event} />
                                <Accordion.Header className='accordion-btn' 
                                    onClick={() => handleOnClick(index, event)}
                                    />
                            </div>
                        </div>
                        <Accordion.Body className='d-lg-none'>
                            <EventDescription event={event} />
                            <MapComponent event={event} />
                        </Accordion.Body>
                    </Accordion.Item>   
                    </div>
                ))}
        </Accordion>
    );
}
export default ShowEvents;
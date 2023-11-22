import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addFavorites, setEvents } from '../../reducer/artistReducer';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { filterArray, filterEvent } from './helpers';
import './addFavorites.css'

function AddFavorites({event}) {

    const location = useLocation().pathname;
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.artist.favorites)
    const eventsData = useSelector(state => state.artist.events)

    const handleFavorite = (fav) => {
        const favArr = filterArray(favorites, fav)
        const eventArr = filterEvent(eventsData, fav)
        dispatch(setEvents(eventArr))
        dispatch(addFavorites(favArr))
    }

  return (
    <div className='favorites-container' onClick={() => handleFavorite(event)}>
        {event.favorite ? <StarOutlinedIcon fontSize="large" className='favorite' /> : <StarOutlineOutlinedIcon fontSize="large" />}
        {location === '/' && !event.favorite 
          ? <span className='favorite-text'>Add to favorites</span>
          : location === '/' && event.favorite 
          ? <span className='favorite-text'>Remove from favorites</span>
          : null}
    </div>
  )
}

export default AddFavorites
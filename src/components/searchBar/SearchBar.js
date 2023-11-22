import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchApi, encodeSpecialCharacters, updateEvents } from './helpers';
import { setState, resetState, setMessage } from '../../reducer/artistReducer';
import SearchIcon from '@mui/icons-material/Search';
import './search.css'

function SearchBar() {

    const [ artistName, setArtist ] = useState('')
    const favorites = useSelector(state => state.artist.favorites)

    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(resetState())

        // replace special characters in the artist name with their codes
        const name = encodeSpecialCharacters(artistName)

        // search for the artist
        const artist = await searchApi(name)
        if (artist === undefined) {
            console.log('no artist', artist)
            dispatch(setMessage('No artist found'))
        } else {
            // check if the artist event is already in favorites
            const events = updateEvents(artist.events, favorites)
            artist.events = events
            dispatch(setState(artist))
            dispatch(setMessage(''))
        }
    }
    
  return (
    <div className='search-container d-flex align-items-center justify-content-between'>
      <form onSubmit={(e) => onSubmit(e)} className='search-form container p-0 flex-nowrap d-flex align-items-center justify-content-between'>
        <label htmlFor='artist'><SearchIcon/></label>
        <input type='text' className='container-fluid' 
          maxlength='50' name='artist' id='artist'
          minlength='2' required='required'
          placeholder='Search...' value={artistName} onChange={(e)=> setArtist(e.target.value)} />
        <button type='submit' className='btn-search' >&#x276F;</button>
      </form>
    </div>
  )
}

export default SearchBar
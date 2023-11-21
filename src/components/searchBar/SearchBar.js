import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchApi, encodeSpecialCharacters } from './helpers';
import { setState, resetState } from '../../reducer/artistReducer';

function SearchBar() {

    const [ artistName, setArtist ] = useState('')
    const [ errorMessage, setError ] = useState('')

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
            setError('No artist found')
        } else {
            dispatch(setState(artist))
            setError(null)
        }
    }
    
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} >
        <input type='text'value={artistName} onChange={(e)=> setArtist(e.target.value)} />
        <button type='submit'>Submit</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  )
}

export default SearchBar
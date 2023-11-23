import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ArtistData from './ArtistData';

function ShowArtist() {

    const [ artist, setArtist ] = useState([])

    const artistData = useSelector(state => state.artist.artist)
    const message = useSelector(state => state.artist.message)

    useEffect(() => {
        if (artistData) {
            setArtist([artistData])
        }
    }, [artistData]);

  return (
    <div>
    {message && artistData.length === 0 && <h1 className='error-message'>{message}</h1>}
    {artist && artist.map((artist, index) => {
        return(
            <ArtistData artist={artist} key={index} />
        )
    })
    }
    </div>
  )
}

export default ShowArtist;

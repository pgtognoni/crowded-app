import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function ShowArtist() {

    const [ artist, setArtist ] = useState([])

    const artistData = useSelector(state => state.artist.artist)

    useEffect(() => {
        if (artistData) {
            setArtist([artistData])
        }
    }, [artistData]);

  return (
    <div>
    {artist && artist.map((artist, index) => {
        return(
            <div key={index} className='d-flex flex-column fex-md-row'>
                <div className='img-container'>
                    <img src={artist.thumb_url} alt={artist.name} />
                </div>
                <h1 className=''>{artist.name}</h1>
            </div>
        )
    })
    }
    </div>
  )
}

export default ShowArtist;

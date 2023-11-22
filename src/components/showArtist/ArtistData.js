import React from 'react'
import './showArtist.css'

function ArtistData({artist}) {
  return (
    <div className='d-flex flex-row artist-container justify-content-center'>
        <div className='img-container'>
            <img src={artist.thumb_url} alt={artist.name} />
        </div>
        <h1 className=''>{artist.name}</h1>
    </div>
)
}

export default ArtistData
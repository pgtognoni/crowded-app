import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SocialIcon } from 'react-social-icons'
import './socials.css'
function ArtistSocials() {

    const [ socials, setSocials ] = useState([])
    
    const artistData = useSelector(state => state.artist.artist)

    useEffect(() => {
        if (artistData && artistData.links) {
            setSocials(artistData.links)
        }
    }, [artistData]);


  return (
    <div className='d-flex gap-2 socials-container' >
       {socials 
        ? socials.map((social, index) => {
            return(
                <div key={index} className='d-flex flex-column social'>
                    <SocialIcon url={social.url} />
                    <span className='social-type'>{social.type}</span>
                </div>
            )
        }) 
        : null} 
    </div>
  )
}

export default ArtistSocials
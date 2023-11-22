import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SocialIcon } from 'react-social-icons'
import './socials.css'

function ArtistSocials() {

    const [ socials, setSocials ] = useState([])
    
    const artistData = useSelector(state => state.artist.artist)
    const container = useRef()

    useEffect(() => {
        if (artistData && artistData.links) {
            setSocials(artistData.links)
            if (container.current) {
                container.current.scrollLeft = 0
                container.current.classList.remove('scrollbar-hidden')
            }
        } else {
            setSocials([])
            if (container.current) {
                container.current.classList.add('scrollbar-hidden')
            }
        }

    }, [artistData]);


  return (
    <div className='d-flex gap-2 socials-container scrollbar-hidden' ref={container} >
        {socials.map((social, index) => {
            return(
                <div key={index} className='d-flex flex-column social'>
                    <SocialIcon url={social.url} />
                    <span className='social-type'>{social.type}</span>
                </div>
            )
        })}
    </div>
  )
}

export default ArtistSocials
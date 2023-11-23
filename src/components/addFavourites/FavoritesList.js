import React, { useState, useEffect } from 'react'
import { getArtistName } from './helpers'
import { useSelector } from 'react-redux'
import EventLocation from '../showEvents/EventLocation'
import EventTime from '../showEvents/EventTime'
import ArtistData from '../showArtist/ArtistData'
import EventDescription from '../showEvents/EventDescription'
import MapComponent from '../map/MapComponent'
import AddFavorites from './AddFavorites'
import { handleIntersection } from '../showEvents/helpers'

function FavoritesList() {

    const favorites = useSelector(state => state.artist.favorites)
    const [ favs, setFavs ] = useState([])
    const [ showMore, setShowMore ] = useState(false)

    useEffect(() => {
        if(favorites.length > 0){
            setFavs(favorites)
        } else {
            setFavs([])
        }
    }, [favorites])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Adjust this threshold as needed
          };
      
          const observer = new IntersectionObserver(handleIntersection, options);
      
          document.querySelectorAll('.fav-event-container ').forEach(item => {  
            if (item) {
                observer.observe(item);
              }
            })
  
          return () => {
            document.querySelectorAll('.fav-event-container ').forEach(item => {  
                if (item) {
                    observer.unobserve(item);
                  }
                })
          };
      
    }, [favs])

  return (
    <div className='container fav-list-container'>
        {favs && favs.map((fav, index) => {
            return(
                <div key={index} className='fav-event-container row'>
                    {fav.artist && <ArtistData artist={fav.artist} />}
                    <div className='mb-3 col-12 col-sm-3 align-self-center'>
                        <h1 className='d-flex align-items-center gap-3 artist-name'><AddFavorites event={fav} /> {getArtistName(fav)}</h1>
                    </div>
                    <div className='gap-1 d-flex flex-column flex-sm-row align-items-start align-items-sm-center'>
                        <EventLocation event={fav} className=''/>
                        <EventTime event={fav} className=''/>
                    </div>
                    <div onClick={() => setShowMore(!showMore)} className='btn-border show-map mb-3 mt-3'>
                        {showMore ? <span>Hide Information</span> : <span>Show More</span>}
                    </div>
                    {showMore && <>
                    <div className='mb-3 col-12'>
                        <EventDescription event={fav} />
                    </div>
                    <div className='mb-3 col-12'>
                        <MapComponent event={fav} />
                    </div>
                    </>}
                </div>
            )
        })}
    </div>
  )
}

export default FavoritesList
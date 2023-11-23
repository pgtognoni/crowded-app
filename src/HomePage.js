import React, {useState, useRef } from 'react'
import ShowArtist from './components/showArtist/ShowArtist'
import ArtistSocials from './components/artistSocials/ArtistSocials'
import ShowEvents from './components/showEvents/ShowEvents'
import EventDescription from './components/showEvents/EventDescription'
import MapComponent from './components/map/MapComponent'
import FavoritesList from './components/addFavourites/FavoritesList'
import { useSelector } from 'react-redux'
import WelcomeComponent from './components/welcome/WelcomeComponent'
import ClearSearch from './components/searchBar/ClearSearch'

function HomePage() {

  const [ activeIndex, setIndex ] = useState(null)
  const [ activeEvent, setEvent ] = useState({})
  const [ show, setShow ] = useState(false)
  const eventRef = useRef(null)
  const favRef = useRef(null)
  const favorites = useSelector(state => state.artist.favorites)
  const events = useSelector(state => state.artist.events)
  const message = useSelector(state => state.artist.message)
  const artist = useSelector(state => state.artist.artist)


  const handleOnClick = (index, event) => {
    const scrollTop = document.documentElement.scrollTop
    eventRef.current.style.top = `${scrollTop + 100}px`
    favRef.current.style.right = '-100%'

    if (index !== activeIndex) {
      if (eventRef.current) {
        setIndex(index)
        setEvent(event)
        setShow(true)
      }
    } else {
      setShow(false)
      setIndex(null)
      setEvent({})
      favRef.current.style.right= '0'
    }
  }

  return (
    <div className='home-page container-fluid'>
    {events.length === 0 && <WelcomeComponent />}
    {events.length !== 0 && <ClearSearch />}
      <div className={`row`}>
        <div className={`col-12 col-lg-6`}>
          <ShowArtist />
          <ArtistSocials />
          {artist.length !== 0 && events.length === 0 && 
            <h1 className='text-center mt-3'>{message}</h1>}
          <ShowEvents handleOnClick={handleOnClick} />
        </div>
        <div className='d-none d-lg-block col-lg-6 event-homePage' ref={eventRef}>
          {show && <div className='home-description'>
            <EventDescription event={activeEvent} />
            <MapComponent event={activeEvent} />
          </div>}
        </div>
        <div className='d-none d-lg-block col-lg-6 favorites-homePage' ref={favRef}>
          {favorites.length > 0 && <>
            <h1 className='text-center'>Favorites</h1>
            <FavoritesList />
          </>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
import React,{ useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchBar from '../searchBar/SearchBar'
import './navBar.css'

function NavBar() {

    const location = useLocation().pathname;
    const events = useSelector(state => state.artist.events)
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {

    let previousScrollTop = 0;

    const handleScroll = () => {
      let currentScrollTop  = window.scrollY
      if (currentScrollTop < previousScrollTop) { 
        setIsFixed(true);
        if(currentScrollTop === 0) setIsFixed(false);
      } else {
        setIsFixed(false);
      }
      previousScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: isFixed ? 'fixed' : 'static',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'var(--text-white)',
  };

  return (
    <div className='container-fluid navbar-container' style={navbarStyle}>
        <div className='row mobile-nav justify-content-center justify-content-sm-between gap-3'>
            <Link to='/' className='brand col-12 col-sm-2 text-center text-sm-start'>WIT</Link>
            {location === '/' && events.length !== 0 && <div className='col-sm-6 search-container mx-auto'>
                <SearchBar />
            </div>}
            <Link to='/favorites' className='col-12 col-sm-3 favorites-link btn-border'>Favorites</Link>
        </div>
    </div>
  )
}

export default NavBar
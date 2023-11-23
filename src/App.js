import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FavoritesList from './components/addFavourites/FavoritesList';
import NavBar from './components/navBar/NavBar';
// import axios from 'axios';
import { createUser, getFavoriteList, generateID } from './firebase/helpers'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, setUserId } from './reducer/artistReducer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.artist.userId)


  const getUserId = async () => {
    const id = generateID()
    try {
        const res = await createUser(id)
        if (res.status === 200) {
          window.localStorage.setItem('WITuserID', id)
          dispatch(setUserId(id))
        }
    } catch (error) {
      console.log(error)
    }
  };

  const getFavorites = async (id) => {
    try {
      const res = await getFavoriteList(id)
      if (res && res.length > 0) dispatch(addFavorites(res))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const id = window.localStorage.getItem('WITuserID')
    if (id) {
      dispatch(setUserId(id))
      getFavorites(id)
    } 
    if (window.localStorage.getItem('WITuserID')) {
    } else {
      getUserId();
    }
  }, [])

  return (
    <div className="App p-0 container-fluid h-100">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="favorites"
          element={
            <FavoritesList />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

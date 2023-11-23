import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FavoritesList from './components/addFavourites/FavoritesList';
import NavBar from './components/navBar/NavBar';
// import axios from 'axios';
import { createUser, getFavoriteList, generateID } from './firebase/helpers'
import { useDispatch } from 'react-redux';
import { addFavorites } from './reducer/artistReducer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const dispatch = useDispatch()

  const getUserId = async () => {
    const id = generateID()
    try {
        const res = await createUser(id)
        if (res.status === 200) {
          window.localStorage.setItem('WITuserID', id)
        }
    } catch (error) {
      console.log(error)
    }
  };

  const getFavorites = async () => {
    try {
      const res = await getFavoriteList(window.localStorage.getItem('WITuserID'))
      if (res && res.length > 0) dispatch(addFavorites(res))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('WITuserID')) {
      getFavorites()
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

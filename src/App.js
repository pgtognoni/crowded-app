import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FavoritesList from './components/addFavourites/FavoritesList';
import NavBar from './components/navBar/NavBar';
import axios from 'axios';
import { createUser, getFavoriteList } from './firebase/helpers'
import { useDispatch } from 'react-redux';
import { addFavorites } from './reducer/artistReducer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
      if (res.status === 200){
        createUser(res.data.ip)
        window.localStorage.setItem('userIP', res.data.ip)
      }
    } catch (error) {
      console.log(error)
    }
  };

  const getFavorites = async () => {
    try {
      const res = await getFavoriteList(window.localStorage.getItem('userIP'))
      console.log(res)
      if (res && res.length > 0) dispatch(addFavorites(res))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('userIP')) {
      getFavorites()
    } else {
      getData();
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

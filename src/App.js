import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CookiesProvider, useCookies } from "react-cookie";
import SearchBar from './components/searchBar/SearchBar';
import ShowArtist from './components/showArtist/ShowArtist';
import ArtistSocials from './components/artistSocials/ArtistSocials';
import ShowEvents from './components/showEvents/ShowEvents';
import axios from 'axios';
import './App.css';

function App() {

  const [ip, setIP] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);


  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    // if (cookies.user) {
    //   console.log("cookies", cookies.user);
    // }
    if (res.status === 200){
      setIP(res.data.ip);
      setCookie("user", res.data.ip, { path: "/" });
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <h1>Who's in town?</h1>
      <SearchBar />
      <ShowArtist />
      <ArtistSocials />
      <ShowEvents />
    </div>
  );
}

export default App;

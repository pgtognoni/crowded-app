import React, { useMemo, useState, useEffect }  from 'react'
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import './maps.css'

const { REACT_APP_FIREBASE_APIKEY } = process.env;

function GoogleMapComponent({event}) {


  
  const center = useMemo(() => ({ lat: Number(event.venue.latitude), lng: Number(event.venue.longitude) }), []);

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: REACT_APP_FIREBASE_APIKEY,
    });

    useEffect(() => {
      
    }) 

  if (loadError) return <div>Error loading maps</div>;
  
  return (
    <div className='container-fluid' id='google-map'>
        {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <MarkerF position={center} />
        </GoogleMap>
      )}
    </div>
  )
}

export default GoogleMapComponent
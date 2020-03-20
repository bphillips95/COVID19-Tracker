import React from 'react' 
import CityData from './CityData'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const DataContainer = (props) => { 

    return(
      // <div>
            <Map
          google={props.google}
          zoom={5}
         //  style={mapStyles}
          initialCenter={{ lat: 39.381266, lng: -97.922211}}>
             {/* Can make an onClick, to place marker where clicked */}
                {/* <Marker position={{ lat: 45.00, lng: -122.00}} /> */}
          </Map>
    
   //      {/* Last Updated {props?.data?.lastChecked}
   //  {props?.data?.covid19Stats?.map(state => <CityData state={state} /> )}
   //  </div>   */}
    )}

export default GoogleApiWrapper({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
    })(DataContainer);

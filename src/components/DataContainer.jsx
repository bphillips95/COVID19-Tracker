import React, {useState} from 'react' 
import CityData from './CityData'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
const DataContainer = (props) => { 
  const [markerShown, setMarkerShown] = useState(false)
  const [markerPosition, setmarkerPosition] = useState(null)
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})        //Shows the active marker upon click
  const [selectedPlace, setSelectedPlace] = useState({})     //Shows the infoWindow to the selected place upon a marker

  const onMapClick = (ref, map, e) => {
    setMarkerShown(true)
    setmarkerPosition(e.latLng)
    console.log(e)
  }

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  };

const onClose = props => {
  if (showingInfoWindow) {
    setActiveMarker(null)
    setShowingInfoWindow(false)
  }
};

    return(
      // <div>
            <Map onClick={onMapClick}
          google={props.google}
          zoom={5}
         //  style={mapStyles}
          initialCenter={{ lat: 39.381266, lng: -97.922211}}>
             {/* Can make an onClick, to place marker where clicked */}
                <InfoWindow  marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose} >
               <div>
            <h4>{selectedPlace.name}</h4>
          </div>
          </InfoWindow>
          {markerShown && <Marker position={markerPosition} onClick={onMarkerClick} name={"BP Center"} />}
          </Map>
   //      {/* Last Updated {props?.data?.lastChecked}
   //  {props?.data?.covid19Stats?.map(state => <CityData state={state} /> )}
   //  </div>   */}
    )}

export default GoogleApiWrapper({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
    })(DataContainer);

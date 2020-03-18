import React from 'react' 
import CityData from './CityData'
const DataContainer = (props) => { 

    return(
      <div>
     <img src={`https://maps.googleapis.com/maps/api/staticmap?center=USA&size=600x300
      &key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`} alt=''></img>
    
      Last Updated {props?.data?.lastChecked}
      {props?.data?.covid19Stats?.map(state => <CityData state={state} /> )}
   </div>
    )}

export default DataContainer
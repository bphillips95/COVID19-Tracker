import React from 'react' 
import CityData from './CityData'
const DataContainer = (props) => { 

    return(
    <div>
    <h2>
    Covid 19 Tracker with Tweets
    </h2> 
      Last Updated {props?.data?.lastChecked}
      {props?.data?.covid19Stats?.map(state => <CityData state={state} /> )}
      
      {/* <div>{state.province}<br/>
   Number of Sick: {state.confirmed}<br/>
   Number of Deaths: {state.deaths} <br/>
   Number recovered: {state.recovered}
   </div>
      )} /> */}
   </div>
    )}

export default DataContainer
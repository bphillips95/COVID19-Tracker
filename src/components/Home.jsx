import React, { useState, useEffect} from 'react';
import DataContainer from './DataContainer'
import axios from 'axios'
const Home = () => { 
    const [data, setData] = useState({ cases: []})
    useEffect(() => { 
      const fetchData = async () => {
        const result = await axios(
          "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
            headers: {
              "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
            }
          }
        )
        setData(result.data.data)
        // props.type.saveDataToState(result.data)
        console.log(result.data.data)
  
      }
      fetchData()
    },[])
    return(
        <DataContainer data={data}/>
    )
}
export default Home
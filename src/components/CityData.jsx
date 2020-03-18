import React from 'react'
import { Card} from 'semantic-ui-react'
const CityData = (props) => {
    return (
        <Card>
        <Card.Content header={props.state.province} />
       <Card.Content>Sick: {props.state.confirmed}  </Card.Content>
       <Card.Content > Deaths: {props.state.deaths} </Card.Content> 
        <Card.Content>  Recovered: {props.state.recovered}  </Card.Content>
      </Card>
//         <div>
//              {props.state.province}<br/>
//    Number of Sick: {props.state.confirmed}<br/>
//    Number of Deaths: {props.state.deaths} <br/>
//    Number recovered: {props.state.recovered} 
//    </div>
    )
}

export default CityData

import React from 'react';
import './App.css';
import Forecast1Day from "./Forecast1Day/Forecast1Day"


class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
           
        }
    }
componentDidMount(){
    fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
    .then(res => res.json())
    .then(data => {this.setState({data})
    console.log(data)
})

}
    render() {
        return (
            <div className="App">
                  {this.state.data.map(item => {
                           return <Forecast1Day 
                           day={item.day} 
                           temperature={item.temperature} 
                           description={item.description} 
                           icon={item.icon}/>
                       })}
            </div>
        );
    }

}

export default App;

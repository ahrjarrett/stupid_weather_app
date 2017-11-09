import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

const ROOT_URL = `https://fcc-weather-api.glitch.me/api/current?`

class App extends Component {
  constructor(props) {
    super(props)
    this.geo = window.navigator.geolocation
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.geo.getCurrentPosition(position => {
      const { coords } = position
      const API_CALL = `${ROOT_URL}lon=${coords.latitude}&lat=${coords.longitude}`
      const weather = axios.get(API_CALL)
        .then(({ data }) => console.log(data))
      //console.log(weather.data)



      //console.log('your current position is ')
      //console.log(`Latitude : ${coords.latitude}`);
      //console.log(`Longitude: ${coords.longitude}`);
      //console.log(`More or less ${coords.accuracy} meters.`);
    })
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stupid Weather App</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    )
  }
}

export default App

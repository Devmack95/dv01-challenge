import React, { Component } from 'react'
import './App.css'
import { getData } from './request/api'

class App extends Component {
  
  async componentDidMount() {
    try {
      const data = await getData();
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="App">
        <p>HELLO WORLD</p>
        <p>CHARTS AND GRAPHS</p>
      </div>
    )
  }
}

export default App

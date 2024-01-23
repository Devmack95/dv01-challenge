import React, { Component } from 'react'
import './App.css'
import { getData } from './request/api'
import { LoanTable } from './LoanTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  async componentDidMount() {
    try {
      const data = await getData();
      this.setState({data})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {data} = this.state
    return (
      <div className="App">
        <p>HELLO WORLD</p>
        <LoanTable data={data} />
        <p>CHARTS AND GRAPHS</p>
      </div>
    )
  }
}

export default App

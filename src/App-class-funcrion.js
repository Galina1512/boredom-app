import {useState} from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    activity: null
  }

  async componentDidMount(){
    const url = "http://www.boredapi.com/api/activity/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({activity: data.activity})
  }
  render(){
  return (
    <div className="App">
      <p>{this.state.activity}</p>

    </div>
  );
}
}
export default App;

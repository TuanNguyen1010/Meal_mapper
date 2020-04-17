import React, {Component }  from 'react';
import './App.css';
import Home from './components/home'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      selectedDate: '2020-04-16',
    }
    this.datePicked = this.datePicked.bind(this) 
  }
  datePicked = async (date) => {
    await this.setState( {selectedDate: date})
    console.log(this.state.selectedDate)
  }
  render() {
  return (
    <div className="App">
      <h1> Meal Mapper</h1>
      <h2> Select a date to plan your next meal</h2>
      <Home datePicked={this.datePicked}/> 
    </div>
  );
}}

export default App;

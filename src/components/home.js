import React, {Component} from 'react'
import Calender from './calender'

class Home extends Component{

  render() {
    return(
      <div> 
        <Calender datePicked={this.props.datePicked}/> 
      </div>


    ) 
  }
}

export default Home
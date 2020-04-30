import 'moment/locale/en-gb.js';
import React, {Component} from 'react'
import {DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css'
import { Redirect } from 'react-router-dom'

class Calender extends Component {
  constructor(props){
    super(props)
    this.state ={
      datePickerInputDate: null,
      redirect: false
    }
  }
  calenderOnChange = ( dateString) => {
    const dateFormatted = dateString.getDate() + "-0" + (dateString.getMonth() + 1) + "-" + dateString.getFullYear()
    this.setState({ datePickerInputDate: dateFormatted })
    this.props.datePicked(dateFormatted)
    this.props.resetRecipeState()
    this.setRedirect()
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = (datePicked) => {
    if (this.state.redirect) {
      return <Redirect to={'/date/' + datePicked}  />
    }
  }
  
  render() {
    return(
      <div>
        {this.renderRedirect(this.state.datePickerInputDate)}
        <div data-test='calenderComponent'>
          <DatePickerInput
            onChange={(dateString) => { 
              this.calenderOnChange(dateString)
            }}
            value={''}
            className='-datepicker-component'
          />
        </div>
      </div>
    )
  }
}

export default Calender
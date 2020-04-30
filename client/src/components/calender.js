import 'moment/locale/en-gb.js';
import React, {Component} from 'react'
import {DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css'
import { Redirect } from 'react-router-dom'

class Calender extends Component {
  constructor(props){
    super(props)
    this.state ={
      dateToday: '2020-04-16',
      datePickerInputDate: null,
      redirect: false
    }
  }
  onChange = async ( dateString) => {
    const dateFormatted = dateString.getDate() + "-0" + (dateString.getMonth() + 1) + "-" + dateString.getFullYear()
    await this.setState({ datePickerInputDate: dateFormatted })
    this.props.datePicked(dateFormatted)
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
              this.onChange(dateString)
            }}
            value={this.state.dateToday}
            className='my-custom-datepicker-component'
            // {...anyReactInputProps}
          />
        </div>
      </div>
    )
  }
}

export default Calender
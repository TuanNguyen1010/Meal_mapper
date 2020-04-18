import 'moment/locale/en-gb.js';
import React, {Component} from 'react'
import {DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css'
import monthConverter from '../monthConverter.json'

class Calender extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedDate: '2020-04-16',
      // datePickerInputDate: null,
      datePickerInputDate2: null,
      showInput: true,
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange = async ( dateString, e) => {
    const fullDateString = '' + dateString
    const date = fullDateString[8] + fullDateString[9]
    const month = monthConverter.Months[fullDateString[4]+fullDateString[5]+fullDateString[6]]
    const Year = fullDateString[11] + fullDateString[12] + fullDateString[13] + fullDateString[14]
    const fullDate = date + '-' + month + '-' + Year
    await this.setState({ datePickerInputDate: fullDate })
    console.log(this.state.datePickerInputDate)
    // this.props.datePicked(fullDate)
  }
  
  render() {
    return(
      <div>
        <div data-test='calenderComponent'>
          <DatePickerInput
            onChange={(dateString) => { 
              this.onChange(dateString)
            }}
            value={this.state.selectedDate}
            className='my-custom-datepicker-component'
            // {...anyReactInputProps}
          />
        </div>
      </div>
    )
  }
}

export default Calender
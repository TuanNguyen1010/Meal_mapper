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
      datePickerInputDate: null,
      datePickerInputDate2: null,
      showInput: true,
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange = async ( dateString, e) => {
    const fullDate = '' + dateString
    const date = fullDate[8] + fullDate[9]
    const month = monthConverter.Months[fullDate[4]+fullDate[5]+fullDate[6]]
    const Year = fullDate[11] + fullDate[12] + fullDate[13] + fullDate[14]
    await this.setState({ datePickerInputDate: date + '-' + month + '-' + Year })
    console.log(this.state.datePickerInputDate)
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
import 'moment/locale/en-gb.js';
import React, {Component} from 'react'
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css'

class Calender extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange = (jsDate, dateString) => {
  }
  
  render() {
    const date = '2020-04-16' 
    return(
      <div> 
    <DatePickerInput
      onChange={this.onChange}
      value={date}
      className='my-custom-datepicker-component'
      // {...anyReactInputProps}
    />
    <div data-test='calenderComponent'>
    <DatePicker onChange={this.onChange} value={date}/>
    </div>
      </div>
    )
  }
}

export default Calender
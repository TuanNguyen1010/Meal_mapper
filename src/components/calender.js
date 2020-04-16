import 'moment/locale/it.js';
import React, {Component} from 'react'
import { DatePicker, DatePickerInput } from 'rc-datepicker';


class Calender extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange = (jsDate, dateString) => {
  }
  
  render() {
    const date = '2015-06-26' 
    return(
      <div> 
    <DatePickerInput
      onChange={this.onChange}
      value={date}
      className='my-custom-datepicker-component'
      // {...anyReactInputProps}
    />
    <DatePicker onChange={this.onChange} value={date} />

      </div>
    )
  }
}

export default Calender
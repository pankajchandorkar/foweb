import React from 'react'
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import '../../styles/DatePickerInput.scss';

const DatePickerInput = (props) =>  {

    const {id,lableText, selectedDate,handleDateChange} = props;

    moment.updateLocale("en", {
        week: {
            dow: 1
        }
    });

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
                id={id}
                disableToolbar
                variant="inline"
                label={lableText}
                inputVariant="outlined"
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
                format="ddd D MMM yyyy"
                autoOk
                initialFocusedDate
                minDate={moment(new Date(), "DD-MM-YYYY").add(-7, 'days')}
                maxDate={moment(new Date(), "DD-MM-YYYY").add(90, 'days')}
                size= {'small'}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePickerInput

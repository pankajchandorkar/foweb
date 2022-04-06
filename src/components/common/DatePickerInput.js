import React from 'react'
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "../../styles/SingleDatePickerInput.scss";
import CalenderIcon from "../common/CalenderIcon";

const DatePickerInput = (props) => {

    const checkOutsideRange = (param, e) => {

        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let ninety = new Date();
        ninety = ninety.setDate(ninety.getDate() + 90);
        if (param === "fromDate") {
            return !(today <= e._d && ninety > e._d);
        } else {
            if (props.selectedDate && props.selectedDate._d) {
                const frDate = props.selectedDate._d;
                return !(frDate < e._d && ninety > e._d);
            } else {
                return !(today < e._d && ninety > e._d);
            }
        }
    };

    return (
        <>
            <CalenderIcon/>
            <SingleDatePicker
                id={props.id}
                readOnly={true}
                date={props.selectedDate}
                onDateChange={(date) =>
                    props.handelChangeDate(date, props.id)
                }
                focused={props.focused}
                onFocusChange={(f) => props.setDateFocused(f.focused, props.id)}
                hideKeyboardShortcutsPanel={true}
                block={true}
                numberOfMonths={2}
                noBorder={true}
                displayFormat="DD MMM YYYY"
                placeholder="Choose Date"
                isOutsideRange={(event) => checkOutsideRange(props.id, event)}
                anchorDirection="left"
                firstDayOfWeek={1}
            />
            <label className={`DateInput_label ${props.focused==true?"DateInputLabel_focused":props.selectedDate?"DateInputLabel_filled":""}`} htmlFor={props.id}>{props.label}</label>
        </>
    )
}

export default DatePickerInput
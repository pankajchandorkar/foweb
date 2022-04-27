import React, { useState, useRef } from 'react'
import DatePicker from "react-multi-date-picker"
import "../../styles/MultiDatePickerInput.scss"

function MultiDatePickerInput(props) {


    let startDate = new Date();
    startDate = startDate.setDate(startDate.getDate());

    let endDate = new Date();
    endDate = endDate.setDate(endDate.getDate() + 90);

    const datePickerRef = useRef()
    const [closeHandel, setCloseHandel] = useState(false);
    const [focused, setFocused] = useState(false);


    const handelOnOpen = () => {
        setCloseHandel(true);
        setFocused(true);
    }

    const handelOnClose = () => {
        setCloseHandel(false);
        setFocused(false);
    }

    return (
        <>
            <DatePicker
                id={props.id}
                numberOfMonths={2}
                weekStartDayIndex={1}
                format="DD MMM YYYY"
                multiple={props.multiple === true ? true : false}
                ref={datePickerRef}
                minDate={startDate}
                maxDate={endDate}
                onOpen={() => handelOnOpen()}
                onClose={() => handelOnClose()}
                onChange={(date) => props.onDateChange(date)}
                value={props.selectedDate}
                mapDays={({ date }) => {
                    let props = {}
                    let isWeekend = [0, 6].includes(date.weekDay.index)

                    if (isWeekend) props.className = "highlight highlight-red"
                    return props
                }}
            />
            {
                props.labelReq === false ? "" : <label className={`DatePickerLabel ${focused === true ? "DatePickerLabel_Focused" : props.selectedDate ? "DatePickerLabel_Filled" : ""}`} htmlFor={props.id}>{props.label}</label>
            }
            {
                closeHandel === true && props.closeWrapper !== false &&
                <div
                    onClick={() => datePickerRef.current.closeCalendar()}
                    className="outsideCloseHandel">
                </div>
            }

        </>
    )
}

export default MultiDatePickerInput
import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import DatePickerInput from "./common/DatePickerInput";
import moment from 'moment';
import LockIcon from "./common/LockIcon";
import CalIcon from "./common/CalIcon";

function BusSchedule(props) {

    //for dates value
    const [busSchFrDate, setBusSchFrDate] = useState(moment(new Date()));
    const [busSchToDate, setBusSchToDate] = useState(moment(new Date()));

    //for dates focused value
    const [busSchFrDtFocused, setBusSchFrDtFocused] = useState(false);
    const [busSchToDtFocused, setBusSchToDtFocused] = useState(false);

    //for dates disabled
    const [busSchFrDtDisabled, setBusSchFrDtDisabled] = useState(false);
    const [busSchToDtDisabled, setBusSchToDtDisabled] = useState(false);

    return (
        <div className="busScheduleWrap">
            <Box sx={{ width: "100%", paddingLeft: "15px" }}>
                <Grid container spacing={2} md={12}>
                    {/* 1st row */}
                    <Grid className="dateOption" item md={12}>
                        <input className="dateopt" type="radio" name="dateopt" id="date_range" value="dateRange" />
                        <label htmlFor="date_range">Date Range</label>

                        <input className="dateopt" type="radio" name="dateopt" id="alt_date" value="altDate" />
                        <label htmlFor="alt_date">Alternative Date</label>

                        <input className="dateopt" type="radio" name="dateopt" id="selective_date" value="selectDate" />
                        <label htmlFor="selective_date">Selective Date</label>
                    </Grid>
                    {/* 2ndrow */}
                    <Grid className="dateFrom" item md={6}>
                        <div className="input-group" >
                            <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                <DatePickerInput
                                    id="date_from"
                                    selectedDate={busSchFrDate}
                                    focused={busSchFrDtFocused}
                                    disabled={busSchFrDtDisabled}
                                    onDateChange={(date) => setBusSchFrDate(date)}
                                    onFocusChange={(f) => setBusSchFrDtFocused(f)}
                                    label=""
                                    calIcon={false}
                                    labelReq={false}
                                    displayFormat="DD-MM-YYYY"
                                />
                            </Box>
                            <span className="group-span"><CalIcon /></span>
                        </div>
                    </Grid>
                    <Grid className="dateTo" item md={6}>
                        <div className="input-group" >
                            <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                <DatePickerInput
                                    id="date_to"
                                    selectedDate={busSchToDate}
                                    focused={busSchToDtFocused}
                                    disabled={busSchToDtDisabled}
                                    onDateChange={(date) => setBusSchToDate(date)}
                                    onFocusChange={(f) => setBusSchToDtFocused(f)}
                                    label=""
                                    calIcon={false}
                                    labelReq={false}
                                    displayFormat="DD-MM-YYYY"
                                />
                            </Box>
                            <span className="group-span"><CalIcon /></span></div>
                    </Grid>
                    {/* 3rd row */}
                    <Grid className="trip" item md={12}>
                        <div className="input-group" >
                            <span className="group-span">Trip</span>
                            <input className="group-input" id="txtTripBS" name="txtTripBS" placeholder="Trip Name" disabled="disabled" autoComplete='off' value="Delhi - Lucknow - SRT-2X1(36) AC-Sleeper" />
                        </div>
                    </Grid>
                    {/* 4th row */}
                    <Grid className="tripDateTime" item md={12}>
                        <div className="input-group" >
                            <span className="group-span">Trip Date / Time</span>
                            <input className="group-input" id="txtdatetimeBS" name="txtdatetimeBS" placeholder="Trip Date / Time" disabled="disabled" autoComplete='off' value="15-Dec-2020 09:30 PM" />
                        </div>
                    </Grid>
                    {/* 5th row */}
                    <Grid className="busNum" item md={6}>
                        <div className="input-group" >
                            <span className="group-span">Master Bus Number</span>
                            <input className="group-input" id="cmbMstBusNumberBS" name="cmbMstBusNumberBS" placeholder="" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="busNum" item md={6}>
                        <div className="input-group" >
                            <span className="group-span">Bus Number</span>
                            <input className="group-input" id="cmbBusNumberBS" name="cmbBusNumberBS" placeholder="" autoComplete='off' value="" />
                        </div>
                    </Grid>

                    {/* 6th row */}
                    <Grid className="driver" item md={6}>
                        <div className="input-group" >
                            <span className="group-span">Driver</span>
                            <input className="group-input" id="cmbDriverBS" name="cmbDriverBS" placeholder="" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="driver" item md={3}>
                        <div className="input-group" >
                            <input className="group-input" id="cmbDriverNumberBS" name="cmbDriverNumberBS" placeholder="Type Number To Search" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="driver" item md={3}>
                        <div className="input-group" >
                            <input className="group-input" id="cmbDriverCodeBS" name="cmbDriverCodeBS" placeholder="" autoComplete='off' value="" />
                            <span className="iconWrap"><LockIcon /></span>
                        </div>
                    </Grid>

                    {/* 7th row */}
                    <Grid className="conductor" item md={6}>
                        <div className="input-group" >
                            <span className="group-span">Conductor</span>
                            <input className="group-input" id="cmbConductorBS" name="cmbConductorBS" placeholder="" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="conductor" item md={3}>
                        <div className="input-group" >
                            <input className="group-input" id="cmbConductorNumberBS" name="cmbConductorNumberBS" placeholder="Type Number To Search" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="conductor" item md={3}>
                        <div className="input-group" >
                            <input className="group-input" id="cmbConductorCodeBS" name="cmbConductorCodeBS" placeholder="" autoComplete='off' value="" />
                            <span className="iconWrap"><LockIcon /></span>
                        </div>
                    </Grid>


                    {/* 8th row */}
                    <Grid className="driver" item md={6}>
                        <div className="input-group" >
                            <span className="group-span">Driver 2</span>
                            <input className="group-input" id="cmbDriver2BS" name="cmbDriver2BS" placeholder="" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="driver" item md={3}>
                        <div className="input-group" >
                            <input className="group-input" id="cmbDriverNumber2BS" name="cmbDriverNumber2BS" placeholder="Type Number To Search" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid className="driver" item md={3}>
                        <div className="input-group" >
                            <input className="group-input" id="cmbDriver2CodeBS" name="cmbDriver2CodeBS" placeholder="" autoComplete='off' value="" />
                            <span className="iconWrap"><LockIcon /></span>
                        </div>
                    </Grid>

                    {/* 9th row */}
                    <Grid className="pickupMan" item md={6}>
                        <div className="input-group" >
                            <span className="group-span">Pickup Man</span>
                            <input className="group-input" id="cmbPickupManBS" name="cmbPickupManBS" placeholder="" autoComplete='off' value="" />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className="cityWisePickupMan">Select City Wise Pickup Man</div>
                    </Grid>

                    {/* 10th row */}
                    <Grid className="busInfoSms" item md={12}>
                        <div className="chklbl-wrap">
                            <input type="checkbox" id="infosms" className="infosms" />
                            <label htmlFor="infosms">
                                Bus Info SMS
                            </label>
                        </div>
                        <hr className="hrline" style={{ margin: "0px 10px;" }}></hr>
                        <div className="smsOptionWrap">
                            <div className="smsOption">
                                <input type="radio" name="smsTmType" value="false" id="withottc" checked="checked" />
                                <label htmlFor="withottc" className="lblSmsType">Booking PNR [PNR] Bus Info - Bus No:[BN], PickupMan No:[PMN].</label>
                            </div>
                            <div className="smsOption">
                                <input type="radio" name="smsTmType" value="true" id="withtc" />
                                <label htmlFor="withtc" className="lblSmsType">Booking PNR [PNR] Bus Info - Bus No:[BN], Bus Suffix:[SFX], PickupMan No:[PMN], Driver No: [DM].</label>
                            </div>
                        </div>
                    </Grid>
                    {/* 11th row */}
                    <Grid className="busSchAction" item md={12}>
                        <button type="button" id="btnSaveBusSchedule" className="btnOrange mr">
                            Save
                        </button>
                        <button type="button" id="btnCloseBusSchedule" className="btnOrangeOutline" onClick={() => props.updateModal(false)}>
                            Close
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default BusSchedule
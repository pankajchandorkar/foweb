import React, { useState } from 'react'
import AminitiesSlider from "./AminitiesSlider";
import { TextField } from '@mui/material';
import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from '@material-ui/core';
import DatePickerInput from "./common/DatePickerInput";
import moment from 'moment';

const TripSchedule = () => {


    const [tripSchDate, setTripSchDate] = useState(moment(new Date()));
    const [tripSchStartDate, setTripSchStartDate] = useState(moment(new Date()));
    const [tripSchEndDate, setTripSchEndDate] = useState(moment(new Date()));


    const [tripSchDtFocused, setTripSchDtFocused] = useState(false);
    const [tripSchStartDtFocused, setTripSchStartDtFocused] = useState(false);
    const [tripSchEndDtFocused, setTripSchEndDtFocused] = useState(false);


    //for handle date change event 
    const handelChangeDate = (date, id) => {
        if (id === "tripSchDate") {
            setTripSchDate(date);
        }
        if (id === "tripSchStartDate") {
            setTripSchStartDate(date);
        }
        if (id === "tripSchEndDate") {
            setTripSchEndDate(date);
        }
    }

    //for handle date focuse event
    const setDateFocused = (f, id) => {
        if (id === "tripSchDate") {
            setTripSchDtFocused(f);
        }

        if (id === "tripSchStartDate") {
            setTripSchStartDtFocused(f);
        }

        if (id === "tripSchEndDate") {
            setTripSchEndDtFocused(f);
        }
    }

    const useStyles = makeStyles({
        root: {
            "& .MuiTextField-root": {
                width: "72px",
                marginRight: "7px",
            },
            "& .MuiOutlinedInput-input": {
                fontSize: "0.8rem",
                padding: "5px 7px",
            },
            "& .MuiInputLabel-root": {
                fontSize: "0.9rem",
                top: "-5px",
                left: "0px",
                zIndex: "0",
            },
            " & .MuiInputLabel-root.Mui-focused": {
                top: "3px",
                left: "0px",
            },
            "& .MuiFormLabel-filled": {
                top: "3px",
                left: "0px",
            },
        }
    });

    const classes = useStyles();

    return (
        <div className="tripScheduleWrap">
            <Box sx={{ width: "100%" }} className={classes.root}>
                <Grid container spacing={2} >
                    <Grid container item md={8} >
                        {/*1st row*/}
                        <Grid className="chartDate" item md={6}>
                            <div className="input-group">
                                <span className="group-span">Chart Date</span>
                                <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                    <DatePickerInput
                                        id="tripSchDate"
                                        selectedDate={tripSchDate}
                                        handelChangeDate={handelChangeDate}
                                        setDateFocused={setDateFocused}
                                        focused={tripSchDtFocused}
                                        label=""
                                        calIcon={false}
                                        labelReq={false}
                                        displayFormat="DD/MM/YYYY"
                                    />
                                </Box>
                                <button className="group-button">Load</button>
                            </div>
                        </Grid>
                        <Grid className="startDate" item md={3} >
                            <div className="input-group" >
                                <span className="group-span">Start Date</span>
                                <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                    <DatePickerInput
                                        id="tripSchStartDate"
                                        selectedDate={tripSchStartDate}
                                        handelChangeDate={handelChangeDate}
                                        setDateFocused={setDateFocused}
                                        focused={tripSchStartDtFocused}
                                        label=""
                                        calIcon={false}
                                        labelReq={false}
                                        displayFormat="DD/MM/YYYY"
                                    />
                                </Box>
                            </div>
                        </Grid>
                        <Grid className="endDate" item md={3} >
                            <div className="input-group" style={{ marginLeft: "3px" }}>
                                <span className="group-span">End Date</span>
                                <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                    <DatePickerInput
                                        id="tripSchEndDate"
                                        selectedDate={tripSchEndDate}
                                        handelChangeDate={handelChangeDate}
                                        setDateFocused={setDateFocused}
                                        focused={tripSchEndDtFocused}
                                        label=""
                                        calIcon={false}
                                        labelReq={false}
                                        displayFormat="DD/MM/YYYY"
                                    />
                                </Box>
                            </div>
                        </Grid>
                        {/*2nd row*/}
                        <Grid className="chartTime" item md={6} >
                            <div className="input-group">
                                <span className="group-span">Chart Time</span>
                                <select className="group-select" id="tripSchTimeHr">
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select className="group-select" id="tripSchTimeMin">
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                    <option value="46">46</option>
                                    <option value="47">47</option>
                                    <option value="48">48</option>
                                    <option value="49">49</option>
                                    <option value="50">50</option>
                                    <option value="51">51</option>
                                    <option value="52">52</option>
                                    <option value="53">53</option>
                                    <option value="54">54</option>
                                    <option value="55">55</option>
                                    <option value="56">56</option>
                                    <option value="57">57</option>
                                    <option value="58">58</option>
                                    <option value="59">59</option>
                                </select>
                                <select className="group-select" id="tripSchTimeHrForm">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </Grid>
                        <Grid className="code" item md={3} >
                            <div className="input-group" >
                                <span className="group-span">Code</span>
                                <input className="group-input" type="text" name="" id="input" placeholder="Code" autoComplete='off' />
                            </div>
                        </Grid>
                        <Grid className="suffix" item md={3} >
                            <div className="input-group" style={{ marginLeft: "3px" }}>
                                <span className="group-span">Suffix</span>
                                <input className="group-input" type="text" name="" id="input" placeholder="Suffix" autoComplete='off' />
                            </div>
                        </Grid>
                        {/*3rd row*/}
                        <Grid className="tripRuns" item md={4}>
                            Runs:
                            <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-d" value="daily" />
                            <label htmlFor="tripSchRuns-d">Daily</label>
                            <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-a" value="alternative" />
                            <label htmlFor="tripSchRuns-a">Alternative</label>
                            <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-w" value="weekdays" />
                            <label htmlFor="tripSchRuns-w">Weekdays</label>
                        </Grid>
                        <Grid item md={8} >
                            <div className="bkg-trip-week">

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Mon" value="Mon" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Mon" className="lblClass-first">Mon</label>

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Tue" value="Tue" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Tue">Tue</label>

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Wed" value="Wed" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Wed">Wed</label>

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Thu" value="Thu" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Thu">Thu</label>

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Fri" value="Fri" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Fri">Fri</label>

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Sat" value="Sat" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Sat">Sat</label>

                                <input type="checkbox" class="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Sun" value="Sun" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Sun" className="lblClass-last">Sun</label>
                            </div>
                        </Grid>

                        {/*4th row*/}
                        <Grid item md={12} >
                            <hr className="hr-line" />
                        </Grid>
                        {/*5th row*/}
                        <Grid className="tripSchePropRow" item md={9} >
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchIsActive" class="tripSchProps" placeholder="name" />
                                <label htmlFor="tripSchIsActive">
                                    Is Active
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchNonRefundable" class="tripSchProps" />
                                <label htmlFor="tripSchNonRefundable">
                                    Non-Refundable
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchHasSTax" class="tripSchProps" placeholder="name" />
                                <label htmlFor="tripSchHasSTax">
                                    Has GST
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchAllowDynFareChange" class="tripSchProps" placeholder="name" />
                                <label htmlFor="tripSchAllowDynFareChange">
                                    Allow Dynamic Fare Change
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchAllowSeatEdit" class="tripSchProps" />
                                <label htmlFor="tripSchAllowSeatEdit">
                                    Allow Online SeatEdit
                                </label>
                            </div>
                            <hr class="hrline" />
                        </Grid>
                        <Grid item md={3} >
                            <div className="select-wrap">
                                <select id="idcoviddropdown" className="covidDropDown">
                                    <option value="none">Disable Covid 19 Block</option>
                                    <option value="static">Static</option>
                                    <option value="dynamic">Dynamic</option>
                                </select>
                            </div>
                        </Grid>
                        {/*6th row*/}
                        <Grid item md={12} >
                            <div className="tripAminitiesWrap">
                                <AminitiesSlider />
                            </div>
                        </Grid>
                        {/*7th row*/}
                        <Grid item md={8} className="fareInputs">
                            <TextField id="sit" size="small" label="SitNAC" autoComplete="off" />
                            <TextField id="sitAC" size="small" label="SitAC" autoComplete="off" />
                            <TextField id="slmb" size="small" label="SlmbNAC" autoComplete="off" />
                            <TextField id="slmbAC" size="small" label="SlmbAC" autoComplete="off" />
                            <TextField id="slp" size="small" label="slpNAC" autoComplete="off" />
                            <TextField id="slpAC" size="small" label="slpAC" autoComplete="off" />
                            <button type="button" id="TSAutoCalc" className="btnOrangeOutline">
                                Auto Calculate
                            </button>
                            <hr class="hrline" style={{ margin: "0 10px" }} />
                        </Grid>
                        <Grid item md={4} className="fareIncrInputs">
                            <div className="auto-increment-type">
                                <input type="radio" name="autoIncr" id="autoIncr-per" value="per" className=""
                                />
                                <label className="auto-incr-type-lbl" htmlFor="autoIncr-per"><img src={"./images/pct.png"} alt="Per" />Per</label>

                                <input type="radio" name="autoIncr" id="autoIncr-amt" value="amt"
                                    className="" />
                                <label className="auto-incr-type-lbl" htmlFor="autoIncr-amt"><img src={"./images/amt.png"} alt="Amt" /> Amt</label>
                            </div>
                            <TextField id="autoincrease" size="small" label="Value" autoComplete="off" />
                            <button type="button" id="tripSchAutoIncrbtn" className="btnOrangeOutline">
                                Increase All Fares
                            </button>
                        </Grid>
                        {/*8th row*/}
                        <Grid item md={12} >
                            <hr className="hr-line" />
                        </Grid>
                        {/*9th row*/}
                        <Grid item md={8}>
                            <div className="col-fare">
                                <div className="chklbl-wrap">
                                    <input type="checkbox" id="tripSchHideZeroFares" class="tripSchProps" />
                                    <label htmlFor="tripSchHideZeroFares">
                                        Hide Zero Fares
                                    </label>
                                </div>
                                <div className="chklbl-wrap">
                                    <input type="checkbox" id="tripSchFareIncGST" class="tripSchProps" />
                                    <label htmlFor="tripSchFareIncGST">
                                        Fare Include GST
                                    </label>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={1} style={{ borderRight: "solid 1px lightgray" }}></Grid>
                        <Grid item md={3} >
                            <div className="col-pickup-dropoff">
                                Datewise
                                <button type="button" id="tripSchAutoIncrbtn" className="btnOrangeOutline mlr">
                                    Pickup
                                </button>
                                <button type="button" id="tripSchAutoIncrbtn" className="btnOrangeOutline">
                                    Dropoff
                                </button>
                            </div>
                        </Grid>
                        {/*10th row*/}
                        <Grid item md={12}>
                            <div className="busPaymentDetailContent">
                                <table
                                    className="tblBusPaymentDetails"
                                    id="busPaymentDetails">
                                    <thead>
                                        <tr style={{ background: "#e5f6fd" }}>
                                            <th style={{ width: "1%" }}>
                                                &nbsp;
                                            </th>
                                            <th style={{ width: "15%" }}>
                                                From City
                                            </th>
                                            <th style={{ width: "15%" }} >
                                                To City
                                            </th>
                                            <th style={{ width: "9%" }}>
                                                Sit NAC
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                Sit AC
                                            </th>
                                            <th style={{ width: "10%" }} >
                                                Slmb NAC
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                Slmb AC
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                Slp NAC
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                Slp AC
                                            </th>
                                            <th style={{ width: "10%" }}>
                                                SuffixSubRoute
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Kolhapur</td>
                                            <td>Pune</td>
                                            <td>
                                                <input type="text" className="busFareInput" />
                                            </td>
                                            <td>
                                                <input type="text" className="busFareInput" /></td>
                                            <td>
                                                <input type="text" className="busFareInput" /></td>
                                            <td>
                                                <input type="text" className="busFareInput" /></td>
                                            <td>
                                                <input type="text" className="busFareInput" />
                                            </td>
                                            <td>
                                                <input type="text" className="busFareInput" /></td>
                                            <td>
                                                <input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Kolhapur</td>
                                            <td>Mumbai</td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Vathar</td>
                                            <td>Pune</td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Vathar</td>
                                            <td>Mumbai</td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Peth Naka</td>
                                            <td>Pune</td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Peth Naka</td>
                                            <td>Mumbai</td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Karad</td>
                                            <td>Mumbai</td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Satara</td>
                                            <td>Pune</td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Satara</td>
                                            <td>Mumbai</td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                            <td><input type="text" className="busFareInput" /></td>
                                            <td><input type="text" className="busFareInput" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container item md={4}>
                        <Box sx={{ width: "100%" }}>
                            {/*1st row*/}
                            <Grid className='chartType' item md={12} style={{ background: "pink" }}>
                                <div className="input-group">
                                    <span className="group-span">Chart</span>
                                    <select className="group-select" id="tripSchChart">
                                        <option value="1">SRT-2X1(36) AC-Sleeper</option>
                                        <option value="27587" data="683|8"> Prakash 2X1(40) AC
                                            Seater-Sleeper </option>
                                        <option value="45685" data="5505|46"> 1X0(10) AC Seater Naveen
                                        </option>
                                        <option value="31756" data="6269|72"> 1X0(12) NAC -Sleeper </option>
                                        <option value="25619" data="2523|8"> 1X0(12) NAC Seater-Sleeper
                                        </option>
                                        <option value="25639" data="2523|6"> 1X0(12) NAC Seater-Sleeper AD
                                            BP </option>
                                        <option value="57910" data="15422|191"> 1X0(5) NAC Seater-Sleeper
                                        </option>
                                    </select>
                                </div>
                            </Grid>
                            {/*2nd row*/}
                            <Grid item md={12}>
                                {<div id="tripSchChartDisplay">
                                    <table id="tripScheduleChart" className="chart table table-bordered">
                                        <thead>
                                            <tr style={{ backgroundColor: "#888", color: "#fff" }}>
                                                <th>Up</th>
                                                <th>Dn</th>
                                                <th>Up</th>
                                                <th>Dn</th>
                                                <th>Dn</th>
                                                <th>Dn</th>
                                                <th>Dn</th>
                                                <th>Dn</th>
                                                <th>Up</th>
                                                <th>Up</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>A</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>B</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>A</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>B</td>
                                                <td></td>
                                                <td></td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>13</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>14</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>1</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>2</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>C</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>D</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>C</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>D</td>
                                                <td></td>
                                                <td></td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>15</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>16</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>3</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>4</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>E</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>F</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>E</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>F</td>
                                                <td></td>
                                                <td></td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>17</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>18</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>5</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>6</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>G</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>H</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>G</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>H</td>
                                                <td></td>
                                                <td></td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>19</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>20</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>7</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>8</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>I</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>J</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>I</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>J</td>
                                                <td></td>
                                                <td></td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>21</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>22</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>9</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>10</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>K</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>L</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>K</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>L</td>
                                                <td></td>
                                                <td></td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>23</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>24</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>11</td>
                                                <td rowSpan={2} style={{ border: "1px solid rgb(255,0,0)", background: "rgb(193, 221, 193)" }}>12</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>}
                            </Grid>
                            {/*3rd row*/}
                            <Grid className='tripSchAction' container item md={12}>
                                <Grid item md={6} style={{ textAlign: "left", display: "flex", alignItems: "center", justifyContent: "start" }}>
                                    <label style={{ marginRight: "10px" }}>Selected Seat: </label>
                                    <button type="button" id="quotamale" ></button>
                                    <hr class="hrline" style={{ margin: "0 10px", height: "25px" }} />
                                    <button type="button" id="quotafemale" ></button>
                                </Grid>
                                <Grid item md={6} style={{ borderLeft: "solid 1px lightgray", textAlign: "right" }}>
                                    <button type="button" id="tripSchSave" className="btnOrange mlr10">
                                        Save
                                    </button>
                                    <button type="button" id="tripSchClose" className="btnOrangeOutline">
                                        Close
                                    </button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default TripSchedule
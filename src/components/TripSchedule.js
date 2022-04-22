import React, { useState } from 'react'
import AminitiesSlider from "./AminitiesSlider";
import { TextField } from '@mui/material';
import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from '@material-ui/core';
import DatePickerInput from "./common/DatePickerInput";
import DropDown from "./common/DropDown";
import moment from 'moment';

const TripSchedule = (props) => {

    const [tripSchDate, setTripSchDate] = useState(moment(new Date()));
    const [tripSchStartDate, setTripSchStartDate] = useState(moment(new Date()));
    const [tripSchEndDate, setTripSchEndDate] = useState(moment(new Date()));

    const [tripSchDtFocused, setTripSchDtFocused] = useState(false);
    const [tripSchStartDtFocused, setTripSchStartDtFocused] = useState(false);
    const [tripSchEndDtFocused, setTripSchEndDtFocused] = useState(false);

   
    const [tripSchTimeHr, setTripSchTimeHr] = useState("01");
    const [tripSchTimeMin, setTripSchTimeMin] = useState("01");
    const [tripSchTimeHrForm, setTripSchTimeHrForm] = useState("AM");
    const [idcoviddropdown, setIdcoviddropdown] = useState("Disable Covid 19 Block");
    const [tripSchChart, setTripSchChart] = useState("");

    const chartOptions = [
        { id: 1, role: "Prakash 2X1(40) AC Seater- Sleeper" },
        { id: 2, role: "1X0(10) AC Seater Naveen" },
        { id: 3, role: "1X0(12) NAC -Sleeper" },
        { id: 4, role: "1X0(12) NAC Seater-Sleeper" },
        { id: 2, role: "1X0(12) NAC Seater-Sleeper" },
        { id: 3, role: "1X0(12) NAC Seater-Sleeper AD BP" },
        { id: 4, role: "1X0(5) NAC Seater-Sleeper" },
    ];

    const covidOptions = [
        { value: "none", optionVal: "Disable Covid 19 Block" },
        { value: "static", optionVal: "Static" },
        { value: "dynamic", optionVal: "Dynamic" },
    ];

    const tsTimeHrOptions = [];
    for (var i = 1; i <= 12; i++) {
        i = i < 10 ? "0" + i : i;
        tsTimeHrOptions.push({ value: i });
    }

    const tsTimeMinOptions = [];
    for (var i = 0; i < 60; i++) {
        i = i < 10 ? "0" + i : i;
        tsTimeMinOptions.push({ value: i });
    }

    const tsTimeHrFromOptions = [{ value: "AM" }, { value: "PM" }];

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
                color: "#0086ff",
            },
            "& .MuiFormLabel-filled": {
                top: "3px",
                left: "0px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0086ff",
            }
        }
    });

    const classes = useStyles();

    return (
        <div className="tripScheduleWrap">
            <Box sx={{ width: "100%" }} className={classes.root}>
                <Grid container spacing={2} >
                    <Grid container item xs={12} md={8} >
                        {/*1st row*/}
                        <Grid className="chartDate" item xs={12} md={6}>
                            <div className="input-group">
                                <span className="group-span">Chart Date</span>
                                <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                    <DatePickerInput
                                        id="tripSchDate"
                                        selectedDate={tripSchDate}
                                        onDateChange={(date) => setTripSchDate(date)}
                                        onFocusChange={(f) => setTripSchDtFocused(f)}
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
                        <Grid className="startDate" item xs={12} md={3} >
                            <div className="input-group" >
                                <span className="group-span">Start Date</span>
                                <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                    <DatePickerInput
                                        id="tripSchStartDate"
                                        selectedDate={tripSchStartDate}
                                        onDateChange={(date) => setTripSchStartDate(date)}
                                        onFocusChange={(f) => setTripSchStartDtFocused(f)}
                                        focused={tripSchStartDtFocused}
                                        label=""
                                        calIcon={false}
                                        labelReq={false}
                                        displayFormat="DD/MM/YYYY"
                                    />
                                </Box>
                            </div>
                        </Grid>
                        <Grid className="endDate" item xs={12} md={3} >
                            <div className="input-group">
                                <span className="group-span">End Date</span>
                                <Box component="div" sx={{ width: "100%", position: "relative" }}>
                                    <DatePickerInput
                                        id="tripSchEndDate"
                                        selectedDate={tripSchEndDate}
                                        onDateChange={(date) => setTripSchEndDate(date)}
                                        onFocusChange={(f) => setTripSchEndDtFocused(f)}
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
                        <Grid className="chartTime" item xs={12} md={6} >
                            <div className="input-group">
                                <span className="group-span">Chart Time</span>
                                <DropDown
                                    width={"100%"}
                                    label={""}
                                    field={""}
                                    data={[...new Set(tsTimeHrOptions.map((el) => el.value))]}
                                    searchPlaceholder={"Search Option"}
                                    id="tripSchTimeHr"
                                    defaultValue={tripSchTimeHr}
                                    handelItemSelect={(value) => setTripSchTimeHr(value)}
                                />
                                <DropDown
                                    width={"100%"}
                                    label={""}
                                    field={""}
                                    data={[...new Set(tsTimeMinOptions.map((el) => el.value))]}
                                    searchPlaceholder={"Search Option"}
                                    id="tripSchTimeMin"
                                    defaultValue={tripSchTimeMin}
                                    handelItemSelect={(value) => setTripSchTimeMin(value)}
                                />
                                <DropDown
                                    width={"100%"}
                                    label={""}
                                    field={""}
                                    data={[...new Set(tsTimeHrFromOptions.map((el) => el.value))]}
                                    searchPlaceholder={"Search Option"}
                                    id="tripSchTimeHrForm"
                                    defaultValue={tripSchTimeHrForm}
                                    handelItemSelect={(value) => setTripSchTimeHrForm(value)}
                                />
                            </div>
                        </Grid>
                        <Grid className="code" item xs={12} md={3} >
                            <div className="input-group" >
                                <span className="group-span">Code</span>
                                <input className="group-input" type="text" name="" id="input" placeholder="Code" autoComplete='off' />
                            </div>
                        </Grid>
                        <Grid className="suffix" item xs={12} md={3} >
                            <div className="input-group" >
                                <span className="group-span">Suffix</span>
                                <input className="group-input" type="text" name="" id="input" placeholder="Suffix" autoComplete='off' />
                            </div>
                        </Grid>
                        {/*3rd row*/}
                        <Grid className="tripRuns" item xs={12} sm={4} md={4}>
                            Runs:
                            <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-d" value="daily" />
                            <label htmlFor="tripSchRuns-d">Daily</label>
                            <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-a" value="alternative" />
                            <label htmlFor="tripSchRuns-a">Alternative</label>
                            <input className="tripSchRuns" type="radio" name="tripSchRuns" id="tripSchRuns-w" value="weekdays" />
                            <label htmlFor="tripSchRuns-w">Weekdays</label>
                        </Grid>
                        <Grid className="tripWeek" item xs={12} sm={8} md={8}>
                            <div className="bkg-trip-week">

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Mon" value="Mon" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Mon" className="lblClass-first">Mon</label>

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Tue" value="Tue" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Tue">Tue</label>

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Wed" value="Wed" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Wed">Wed</label>

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Thu" value="Thu" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Thu">Thu</label>

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Fri" value="Fri" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Fri">Fri</label>

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Sat" value="Sat" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Sat">Sat</label>

                                <input type="checkbox" className="tripSchWeekDay" name="tripSchWeekDay" id="tripSchWeekDay-Sun" value="Sun" placeholder="name" />
                                <label htmlFor="tripSchWeekDay-Sun" className="lblClass-last">Sun</label>
                            </div>
                        </Grid>

                        {/*4th row*/}
                        <Grid item xs={12} md={12} >
                            <hr className="hr-line" />
                        </Grid>
                        {/*5th row*/}
                        <Grid className="tripSchePropRow" item xs={12} md={9} >
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchIsActive" className="tripSchProps" placeholder="name" />
                                <label htmlFor="tripSchIsActive">
                                    Is Active
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchNonRefundable" className="tripSchProps" />
                                <label htmlFor="tripSchNonRefundable">
                                    Non-Refundable
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchHasSTax" className="tripSchProps" placeholder="name" />
                                <label htmlFor="tripSchHasSTax">
                                    Has GST
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchAllowDynFareChange" className="tripSchProps" placeholder="name" />
                                <label htmlFor="tripSchAllowDynFareChange">
                                    Allow Dynamic Fare Change
                                </label>
                            </div>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="tripSchAllowSeatEdit" className="tripSchProps" />
                                <label htmlFor="tripSchAllowSeatEdit">
                                    Allow Online SeatEdit
                                </label>
                            </div>
                            <hr className="hrline" />
                        </Grid>
                        <Grid className="tripScheCovidDropDown" item xs={12} md={3} >
                            <div className="select-wrap">
                                <DropDown
                                    width={"100%"}
                                    label={""}
                                    field={""}
                                    data={[...new Set(covidOptions.map((el) => el.optionVal))]}
                                    searchPlaceholder={"Search Option"}
                                    id="idcoviddropdown"
                                    defaultValue={idcoviddropdown}
                                    handelItemSelect={(value) => setIdcoviddropdown(value)}
                                />
                            </div>
                        </Grid>
                        {/*6th row*/}
                        <Grid item xs={12} md={12} >
                            <div className="tripAminitiesWrap">
                                <AminitiesSlider />
                            </div>
                        </Grid>
                        {/*7th row*/}
                        <Grid item xs={12} md={8} className="fareInputs">
                            <TextField id="sit" size="small" label="SitNAC" autoComplete="off" />
                            <TextField id="sitAC" size="small" label="SitAC" autoComplete="off" />
                            <TextField id="slmb" size="small" label="SlmbNAC" autoComplete="off" />
                            <TextField id="slmbAC" size="small" label="SlmbAC" autoComplete="off" />
                            <TextField id="slp" size="small" label="slpNAC" autoComplete="off" />
                            <TextField id="slpAC" size="small" label="slpAC" autoComplete="off" />
                            <button type="button" id="TSAutoCalc" className="btnOrangeOutline">
                                Auto Calculate
                            </button>
                            <hr className="hrline" style={{ margin: "0 10px" }} />
                        </Grid>
                        <Grid item xs={12} md={4} className="fareIncrInputs">
                            <div className="auto-increment-type">
                                <input type="radio" name="autoIncr" id="autoIncr-per" value="per" className=""
                                />
                                <label className="auto-incr-type-lbl" htmlFor="autoIncr-per"><img src={"./foweb/images/pct.png"} alt="Per" />Per</label>

                                <input type="radio" name="autoIncr" id="autoIncr-amt" value="amt"
                                    className="" />
                                <label className="auto-incr-type-lbl" htmlFor="autoIncr-amt"><img src={"./foweb/images/amt.png"} alt="Amt" /> Amt</label>
                            </div>
                            <TextField id="autoincrease" size="small" label="Value" autoComplete="off" />
                            <button type="button" id="tripSchAutoIncrbtn" className="btnOrangeOutline">
                                Increase All Fares
                            </button>
                        </Grid>
                        {/*8th row*/}
                        {/*9th row*/}
                        <Grid item xs={8} md={9} className="grid-tripSchProps">
                            <div className="col-fare">
                                <div className="chklbl-wrap">
                                    <input type="checkbox" id="tripSchHideZeroFares" className="tripSchProps" />
                                    <label htmlFor="tripSchHideZeroFares">
                                        Hide Zero Fares
                                    </label>
                                </div>
                                <div className="chklbl-wrap">
                                    <input type="checkbox" id="tripSchFareIncGST" className="tripSchProps" />
                                    <label htmlFor="tripSchFareIncGST">
                                        Fare Include GST
                                    </label>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={3} className="grid-pickup-dropoff">
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
                        <Grid item xs={12} md={12}>
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
                    <Grid container item xs={12} md={4}>
                        <Box sx={{ width: "100%" }}>
                            {/*1st row*/}
                            <Grid className='chartType' item md={12}>
                                <div className="input-group">
                                    <span className="group-span">Chart</span>
                                    <DropDown
                                        width={"100%"}
                                        label={""}
                                        field={""}
                                        data={[...new Set(chartOptions.map((el) => el.role))]}
                                        searchPlaceholder={"Search Chart"}
                                        id="tripSchChart"
                                        defaultValue={tripSchChart}
                                        handelItemSelect={(value) => setTripSchChart(value)}
                                    />
                                </div>
                            </Grid>
                            {/*2nd row*/}
                            <Grid item xs={12} md={12}>
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
                            <Grid className='tripSchAction' container item xs={12} md={12}>
                                <Grid item md={6} style={{ textAlign: "left", display: "flex", alignItems: "center", justifyContent: "start" }}>
                                    <label style={{ marginRight: "10px" }}>Selected Seat: </label>
                                    <button type="button" id="quotamale" ></button>
                                    <hr className="hrline" style={{ margin: "0 10px", height: "25px" }} />
                                    <button type="button" id="quotafemale" ></button>
                                </Grid>
                                <Grid item md={6} style={{ borderLeft: "solid 1px lightgray", textAlign: "right" }}>
                                    <button type="button" id="tripSchSave" className="btnOrange mlr10">
                                        Save
                                    </button>
                                    <button type="button" id="tripSchClose" className="btnOrangeOutline" onClick={() => props.updateModal(false)}>
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
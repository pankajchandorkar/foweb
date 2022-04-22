import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import DatePickerInput from "./common/DatePickerInput";
import moment from 'moment';
import LockIcon from "./common/LockIcon";
import CalIcon from "./common/CalIcon";
import Modal from "./common/Modal";
import CityWisePickupMan from "./CityWisePickupMan";
import DropDown from "./common/DropDown";

function BusSchedule(props) {

    //options use for master busnumber
    const masterBusNumOptions = [
        { id: 12172, value: "AA-15-AA-9999" },
        { id: 26652, value: "AB-01-CC-5555" },
        { id: 7352, value: "AP-01-AP-1234" },
        { id: 12644, value: "AP-02-H-3652" },
        { id: 7349, value: "AP-09-AX-2526" },
        { id: 10178, value: "AP-09-XX-1234" },
        { id: 1293, value: "ap-10-az-1234" },
        { id: 7384, value: "AP-10-AZ-2009" },
        { id: 7460, value: "AP-21-Q-3076" },
        { id: 12645, value: "AP-21-V-5632" },
    ];

    //options use for busnumber
    const busNumOptions = [
        { id: 12172, value: "AA-15-AA-9999" },
        { id: 26652, value: "AB-01-CC-5555" },
        { id: 7352, value: "AP-01-AP-1234" },
        { id: 12644, value: "AP-02-H-3652" },
        { id: 7349, value: "AP-09-AX-2526" },
        { id: 10178, value: "AP-09-XX-1234" },
        { id: 1293, value: "ap-10-az-1234" },
        { id: 7384, value: "AP-10-AZ-2009" },
        { id: 7460, value: "AP-21-Q-3076" },
        { id: 12645, value: "AP-21-V-5632" },
    ];

    //options use for dirver
    const driverOptions = [
        { id: 4160, value: "Aamir", number: "9347358407", code: "AAM-8407" },
        { id: 48612, value: "Amit singh", number: "23655474678", code: "AMI-4678" },
        { id: 2143, value: "Amol", number: "9029441564", code: "AMO-1564" },
        { id: 30232, value: "Ashu", number: "8387846169", code: "ASH-6169" },
        { id: 11903, value: "Balu", number: "99999999999", code: "BAL-9999" },
        { id: 11890, value: "Dinesh", number: "", code: "" },
        { id: 11893, value: "Durgesh", number: "", code: "" },
        { id: 23328, value: "Gaurav pandey", number: "9564233655", code: "GAU-3655" },
        { id: 15373, value: "Hafiz raja", number: "9845678234", code: "HAF-8234" },
        { id: 31918, value: "Khashif", number: "7358306891", code: "KHA-6891" },
    ];

    //options use for dirver
    const conductorOptions = [
        { id: 3343, value: "Anand", number: "9566111001", code: "ANA-1001" },
        { id: 11715, value: "Anixes", number: "9379794072", code: "ANI-4072" },
        { id: 37551, value: "Dhaval", number: "9890319741", code: "DHA-9741" },
        { id: 613, value: "Harish", number: "6467676667", code: "HAR-6667" },
        { id: 27334, value: "Krishn", number: "6062025656", code: "KRI-5656" },
        { id: 3353, value: "Manoj", number: "6362470870", code: "MAN-0870" },
        { id: 23314, value: "Mohit", number: "8553636401", code: "MOH-6401" },
        { id: 23287, value: "Rana", number: "6879432159", code: "RAN-2159" },
        { id: 32759, value: "Sandeep", number: "8984656464", code: "SAN-6464" },
    ];

    //options use for pickup man
    const pickupManOptions = [
        { id: 19, value: "BIPIN | 9702881767" },
        { id: 12930, value: "Bunty patil | 01234555" },
        { id: 12192, value: "Gaurav pandey | 265333512" },
        { id: 4708, value: "Gowda babu | 8553636401" },
        { id: 9700, value: "Hans atit | 9173340675" },
        { id: 859, value: "Hasan | 9604818895" },
        { id: 12175, value: "Hussain hans travels | 9898989898" },
        { id: 15, value: "NITIN JADYAR | 9273378034" },
        { id: 742, value: "Vinod | 897856465" },
        { id: 753, value: "Yogesh | 8383838383" },
    ];

    const [showModal, setShowModal] = useState(false);

    //for dates value
    const [busSchFrDate, setBusSchFrDate] = useState(moment(new Date()));
    const [busSchToDate, setBusSchToDate] = useState(moment(new Date()));
    const [masterBusNumber, setMasterBusNumber] = useState("");
    const [busNumber, setBusNumber] = useState("");

    const [cmbDriverBS, setCmbDriverBS] = useState("");
    const [cmbDriverNumberBS, setCmbDriverNumberBS] = useState("");
    const [cmbDriverCodeBS, setCmbDriverCodeBS] = useState("");

    const [cmbConductorBS, setCmbConductorBS] = useState("");
    const [cmbConductorNumberBS, setCmbConductorNumberBS] = useState("");
    const [cmbConductorCodeBS, setCmbConductorCodeBS] = useState("");

    const [cmbDriver2BS, setCmbDriver2BS] = useState("");
    const [cmbDriverNumber2BS, setCmbDriverNumber2BS] = useState("");
    const [cmbDriver2CodeBS, setCmbDriver2CodeBS] = useState("");

    const [cmbPickupManBS, setCmbPickupManBS] = useState("");


    //for dates focused value
    const [busSchFrDtFocused, setBusSchFrDtFocused] = useState(false);
    const [busSchToDtFocused, setBusSchToDtFocused] = useState(false);

    //for dates disabled
    const [busSchFrDtDisabled, setBusSchFrDtDisabled] = useState(true);
    const [busSchToDtDisabled, setBusSchToDtDisabled] = useState(true);

    //this function is used for set modal show/hide status
    const updateModal = (param) => {
        setShowModal(param)
    }

    const updateDriver = (n, val) => {
        if (n === 1) {
            let searchData = driverOptions.filter((data) => {
                return data.value === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbDriverBS(searchData[0].value);
                setCmbDriverNumberBS(searchData[0].number);
                setCmbDriverCodeBS(searchData[0].code);
            }
        }
        if (n === 2) {
            let searchData = conductorOptions.filter((data) => {
                return data.value === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbConductorBS(searchData[0].value);
                setCmbConductorNumberBS(searchData[0].number);
                setCmbConductorCodeBS(searchData[0].code);
            }
        }
        if (n === 3) {
            let searchData = driverOptions.filter((data) => {
                return data.value === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbDriver2BS(searchData[0].value);
                setCmbDriverNumber2BS(searchData[0].number);
                setCmbDriver2CodeBS(searchData[0].code);
            }
        }

    }

    const updateDriverNo = (n, val) => {
        if (n === 1) {
            let searchData = driverOptions.filter((data) => {
                return data.number === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbDriverBS(searchData[0].value);
                setCmbDriverNumberBS(searchData[0].number);
                setCmbDriverCodeBS(searchData[0].code);
            }
        }


        if (n === 2) {
            let searchData = conductorOptions.filter((data) => {
                return data.number === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbConductorBS(searchData[0].value);
                setCmbConductorNumberBS(searchData[0].number);
                setCmbConductorCodeBS(searchData[0].code);
            }
        }

        if (n === 3) {
            let searchData = driverOptions.filter((data) => {
                return data.number === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbDriver2BS(searchData[0].value);
                setCmbDriverNumber2BS(searchData[0].number);
                setCmbDriver2CodeBS(searchData[0].code);
            }
        }

    }

    const updateDriverCode = (n, val) => {
        if (n === 1) {
            let searchData = driverOptions.filter((data) => {
                return data.code === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbDriverBS(searchData[0].value);
                setCmbDriverNumberBS(searchData[0].number);
                setCmbDriverCodeBS(searchData[0].code);
            }
        }

        
        if (n === 2) {
            let searchData = conductorOptions.filter((data) => {
                return data.code === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbConductorBS(searchData[0].value);
                setCmbConductorNumberBS(searchData[0].number);
                setCmbConductorCodeBS(searchData[0].code);
            }
        }
        
        if (n === 3) {
            let searchData = driverOptions.filter((data) => {
                return data.code === val
            });
            if (Object.entries(searchData).length === 1) {
                setCmbDriver2BS(searchData[0].value);
                setCmbDriverNumber2BS(searchData[0].number);
                setCmbDriver2CodeBS(searchData[0].code);
            }
        }

    }

    return (
        <div className="busScheduleWrap">
            <Box sx={{ width: "100%", paddingLeft: "15px" }}>
                <Grid container item spacing={2} md={12}>
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
                    <Grid className="dateFrom" item xs={12} md={6}>
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
                    <Grid className="dateTo" item xs={12} md={6}>
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
                    <Grid className="trip" item xs={12} md={12}>
                        <div className="input-group" >
                            <span className="group-span">Trip</span>
                            <input className="group-input" id="txtTripBS" name="txtTripBS" placeholder="Trip Name" disabled="disabled" autoComplete='off' value="Delhi - Lucknow - SRT-2X1(36) AC-Sleeper" />
                        </div>
                    </Grid>
                    {/* 4th row */}
                    <Grid className="tripDateTime" item xs={12} md={12}>
                        <div className="input-group" >
                            <span className="group-span">Trip Date / Time</span>
                            <input className="group-input" id="txtdatetimeBS" name="txtdatetimeBS" placeholder="Trip Date / Time" disabled="disabled" autoComplete='off' value="15-Dec-2020 09:30 PM" />
                        </div>
                    </Grid>
                    {/* 5th row */}
                    <Grid className="busNum" item xs={12} md={6}>
                        <div className="input-group" >
                            <span className="group-span">Master Bus Number</span>
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(masterBusNumOptions.map((el) => el.value))]}
                                searchPlaceholder={"Search Bus Number"}
                                id="cmbMstBusNumberBS"
                                handelItemSelect={(value) => setMasterBusNumber(value)}
                                defaultValue={masterBusNumber}
                            />
                        </div>
                    </Grid>
                    <Grid className="busNum" item xs={12} md={6}>
                        <div className="input-group" >
                            <span className="group-span">Bus Number</span>
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(busNumOptions.map((el) => el.value))]}
                                searchPlaceholder={"Search Bus Number"}
                                id="cmbBusNumberBS"
                                handelItemSelect={(value) => setBusNumber(value)}
                                defaultValue={busNumber}
                            />
                        </div>
                    </Grid>

                    {/* 6th row */}
                    <Grid className="driver" item xs={12} md={6}>
                        <div className="input-group" >
                            <span className="group-span">Driver</span>
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(driverOptions.map((el) => el.value))]}
                                searchPlaceholder={"Search Driver"}
                                id="cmbDriverBS"
                                handelItemSelect={(value) => updateDriver(1, value)}
                                defaultValue={cmbDriverBS}
                            />
                        </div>
                    </Grid>
                    <Grid className="driver" item xs={12} md={3}>
                        <div className="input-group" >
                            {/* Type Number To Search */}
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(driverOptions.map((el) => el.number))]}
                                inputPlaceholder={"Type Number To Search"}
                                searchPlaceholder={"Search Number"}
                                id="cmbDriverNumberBS"
                                handelItemSelect={(value) => updateDriverNo(1, value)}
                                defaultValue={cmbDriverNumberBS}
                            />
                        </div>
                    </Grid>
                    <Grid className="driver" item xs={12} md={3}>
                        <div className="input-group" >
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(driverOptions.map((el) => el.code))]}
                                searchPlaceholder={"Search Code"}
                                id="cmbDriverCodeBS"
                                handelItemSelect={(value) => updateDriverCode(1, value)}
                                defaultValue={cmbDriverCodeBS}
                            />
                            <span className="iconWrap"><LockIcon /></span>
                        </div>
                    </Grid>





                    {/* 7th row */}
                    <Grid className="conductor" item xs={12} md={6}>
                        <div className="input-group" >
                            <span className="group-span">Conductor</span>
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(conductorOptions.map((el) => el.value))]}
                                searchPlaceholder={"Search Code"}
                                id="cmbConductorBS"
                                handelItemSelect={(value) => updateDriver(2, value)}
                                defaultValue={cmbConductorBS}
                            />
                        </div>
                    </Grid>
                    <Grid className="conductor" item xs={12} md={3}>
                        <div className="input-group" >
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(conductorOptions.map((el) => el.number))]}
                                inputPlaceholder={"Type Number To Search"}
                                searchPlaceholder={"Search Number"}
                                id="cmbConductorNumberBS"
                                defaultValue={cmbConductorNumberBS}
                                handelItemSelect={(value) => updateDriverNo(2, value)}
                            />
                        </div>
                    </Grid>
                    <Grid className="conductor" item xs={12} md={3}>
                        <div className="input-group" >
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(conductorOptions.map((el) => el.code))]}
                                searchPlaceholder={"Search Code"}
                                id="cmbConductorCodeBS"
                                defaultValue={cmbConductorCodeBS}
                                handelItemSelect={(value) => updateDriverCode(2, value)}
                            />
                            <span className="iconWrap"><LockIcon /></span>
                        </div>
                    </Grid>

                    {/* 8th row */}
                    <Grid className="driver" item xs={12} md={6}>
                        <div className="input-group" >
                            <span className="group-span">Driver 2</span>
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(driverOptions.map((el) => el.value))]}
                                searchPlaceholder={"Search Driver"}
                                id="cmbDriver2BS"
                                handelItemSelect={(value) => updateDriver(3, value)}
                                defaultValue={cmbDriver2BS}
                            />
                        </div>
                    </Grid>
                    <Grid className="driver" item xs={12} md={3}>
                        <div className="input-group" >
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(driverOptions.map((el) => el.number))]}
                                inputPlaceholder={"Type Number To Search"}
                                searchPlaceholder={"Search Number"}
                                id="cmbDriverNumber2BS"
                                defaultValue={cmbDriverNumber2BS}
                                handelItemSelect={(value) => updateDriverNo(3, value)}
                            />
                        </div>
                    </Grid>
                    <Grid className="driver" item xs={12} md={3}>
                        <div className="input-group" >
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(driverOptions.map((el) => el.code))]}
                                searchPlaceholder={"Search Code"}
                                id="cmbDriver2CodeBS"
                                defaultValue={cmbDriver2CodeBS}
                                handelItemSelect={(value) => updateDriverCode(3, value)}
                            />
                            <span className="iconWrap"><LockIcon /></span>
                        </div>
                    </Grid>

                    {/* 9th row */}
                    <Grid className="pickupMan" item xs={12} md={6}>
                        <div className="input-group" >
                            <span className="group-span">Pickup Man</span>
                            <DropDown
                                width={"100%"}
                                label={""}
                                field={""}
                                data={[...new Set(pickupManOptions.map((el) => el.value))]}
                                searchPlaceholder={"Search Code"}
                                id="cmbPickupManBS"
                                defaultValue={cmbPickupManBS}
                                handelItemSelect={(value) => setCmbPickupManBS(value)}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="cityWisePickupMan">
                            <span className="spn-action" onClick={() => { updateModal(true) }}>Select City Wise Pickup Man</span>
                            {
                                showModal &&
                                <Modal headTxt={"City-Wise Pickup Man Selection"} updateModal={updateModal}>
                                    <CityWisePickupMan updateModal={updateModal} />
                                </Modal>
                            }
                        </div>
                    </Grid>

                    {/* 10th row */}
                    <Grid className="busInfoSms" container item xs={12} md={12}>
                        <Grid item xs={12} md={2}>
                            <div className="chklbl-wrap">
                                <input type="checkbox" id="infosms" className="infosms" />
                                <label htmlFor="infosms">
                                    Bus Info SMS
                                </label>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <div className="smsOptionWrap">
                                <div className="smsOption">
                                    <input type="radio" name="smsTmType" value="false" id="withottc" defaultChecked />
                                    <label htmlFor="withottc" className="lblSmsType">Booking PNR [PNR] Bus Info - Bus No:[BN], PickupMan No:[PMN].</label>
                                </div>
                                <div className="smsOption">
                                    <input type="radio" name="smsTmType" value="true" id="withtc" />
                                    <label htmlFor="withtc" className="lblSmsType">Booking PNR [PNR] Bus Info - Bus No:[BN], Bus Suffix:[SFX], PickupMan No:[PMN], Driver No: [DM].</label>
                                </div>
                            </div>
                        </Grid>
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
import React from 'react'
import { Box, Grid } from '@material-ui/core';
import EditIcon from './common/EditIcon';

function CityWisePickupMan(props) {
    return (
        <div className="citywisePickupManWrap">
            <Box sx={{ width: "100%", marginLeft: "7px" }}>
                <Grid container spacing={1} md={12}>
                    {/* 1st row */}
                    <Grid className="trip" item md={12}>
                        <div className="input-group" >
                            <span className="group-span">Trip</span>
                            <input className="group-input" id="txtTripBS" name="txtTripBS" placeholder="Trip Name" autoComplete='off' value="Delhi - Lucknow - SRT-2X1(36) AC-Sleeper" />
                        </div>
                    </Grid>
                    <Grid className="tripDateTime" item md={12}>
                        <div className="input-group" >
                            <span className="group-span">Date / Time</span>
                            <input className="group-input" id="txtdatetimeBS" name="txtdatetimeBS" placeholder="Trip Date / Time" autoComplete='off' value="15-Dec-2020 09:30 PM" />
                        </div>
                    </Grid>
                    <Grid item md={12}>
                        <div className="cityWisePickupManContainer">
                            <div className="header">
                                <div className="city">City Name</div>
                                <div className="pickup-man">Pickup Man</div>
                            </div>
                            <div className="body">
                                <div className="cityList">
                                    <ul>
                                        <li className="active">
                                            <EditIcon /> Pune
                                        </li>
                                        <li>
                                            Lonavala
                                        </li>
                                        <li>
                                            Thiruvanthapuram
                                        </li>
                                        
                                        <li>
                                            Mumbai
                                        </li>
                                        <li>
                                            Chennai
                                        </li>
                                        <li>
                                            Bangalore
                                        </li>
                                        <li>
                                            Hyderabad
                                        </li>
                                       
                                    </ul>
                                </div>
                                <div className="pickupManList">
                                    <ul>
                                        <li className="active">
                                            Pune Office | 1234567890
                                        </li>
                                        <li>
                                            Pune Office | 9901851265
                                        </li>
                                        <li>
                                            Timson Thomas | 9901851265
                                        </li>
                                        <li>
                                            Gauri Shankar Prasad | 9901851265
                                        </li>
                                        <li>
                                            Amit Kumar | 9901851265
                                        </li>
                                        <li>
                                           Ninoj Antony | 9901851265
                                        </li>
                                        <li>
                                            Gauri Shnkar Prasad | 9901851265
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Grid>
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

export default CityWisePickupMan
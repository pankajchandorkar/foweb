import React from 'react'
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import "../styles/ScheduleBox.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'

function ScheduleBox(props) {

    const scheStatus = props.status;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "10px", fontSize: "0.7rem" }}>
                <CardContent>
                    <div className={`scheDetails ${scheStatus}`}>
                        <div className="scheRow">
                            <div className="scheTitle bold">
                                BNG > CHN
                            </div>
                            <div className="busType">
                                {props.busType}
                            </div>
                            <div className="scheTime underline">
                                26 Mar, 02:30 AM
                            </div>
                        </div>
                        <div className="scheRow btmBrd">
                            <div className="scheTitle">
                                Trip-12345
                            </div>
                            <div className="busType">
                                {props.opName}
                            </div>
                            <div className="scheTime">
                                <div className="seatBooked">
                                    {
                                        props.status == "Scheduled" ? <FontAwesomeIcon icon={faCircleArrowUp} style={{ fontSize: "1rem", color: "#1DB24B" }} /> :
                                            props.status == "Blocked" || props.status == "Stop Booking" ? <FontAwesomeIcon icon={faCircleArrowDown} style={{ fontSize: "1rem", color: "#EC3237" }} /> :
                                                props.status == "Inactive" ? <FontAwesomeIcon icon={faCircleArrowDown} style={{ fontSize: "1rem", color: "#7F7F7F" }} /> : null
                                    }
                                    {
                                        props.status == "Scheduled" ? <span>{props.booked} Booked | </span> :
                                            props.status == "Blocked" || props.status == "Stop Booking" ? <span style={{ color: "#EC3237" }}> {props.booked} Booked | </span> :
                                                props.status == "Inactive" ? <span style={{ color: "#7F7F7F" }}>{props.booked} Booked | </span> : null
                                    }

                                    {
                                        props.status == "Scheduled" ? <span style={{ color: "#2A6277", fontWeight: "600", textDecoration: "underline" }}>₹ {props.amount} + </span> :
                                            props.status == "Blocked" || props.status == "Stop Booking" ? <span style={{ color: "#EC3237", textDecoration: "underline" }}> ₹ {props.amount} + </span> :
                                                props.status == "Inactive" ? <span style={{ color: "#7F7F7F", textDecoration: "underline" }}>₹ {props.amount} + </span> : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="scheRow">
                            <div className="percentage">
                                {props.percentage}
                            </div>
                            <div className="status">
                                {
                                    props.status == "Scheduled" ? <span style={{ background: "#1DB24C", color: "#fff", padding: "2px 7px 2px 7px" }}>{props.status}</span> :
                                        props.status == "Blocked" || props.status == "Stop Booking" ? <span style={{ background: "#EC3237", color: "#fff", padding: "2px 7px 2px 7px" }}>{props.status}</span> :
                                            props.status == "Inactive" ? <span style={{ background: "#7F7F7F", color: "#fff", padding: "2px 7px 2px 7px" }}>{props.status}</span> : null
                                }
                            </div>
                            <div className="gross">
                                <span>Gross:</span>{props.gross},
                            </div>
                            <div className="avgfare">
                                <span>Avg Fare:</span>{props.avgFare}
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardActions sx={{ padding: "0", display: "flex", color: "#054B66", background: "#EEF5FB", fontWeight: "600" }}>
                    <div className="card-action-left">
                        {
                            props.status == "Inactive" ? <span style={{ color: "#7F7F7F" }}>Bus Schedule</span> : <span>Bus Schedule</span>
                        }
                    </div>
                    <div className="card-action-right">
                        Trip Schedule
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ScheduleBox
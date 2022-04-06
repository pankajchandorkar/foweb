import React from 'react'
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import SeatIcon from "../components/common/SeatIcon";
import TooltipText from "../components/common/TooltipText";
import DialogBox from "../components/common/DialogBox";
import SeatWiseBreakup from './SeatWiseBreakup';
import FareWiseBreakup from './FareWiseBreakup';
import "../styles/ScheduleBox.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp, faCircleArrowDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';


function ScheduleBox(props) {

    const scheStatus = props.status;

    const seatWiseBreakup = <SeatWiseBreakup />
    const fareWiseBreakup = <FareWiseBreakup />

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "10px", fontSize: "0.7rem" }}>
                <CardContent>
                    <div className={`scheDetails ${scheStatus}`}>
                        {/*schedule title, bus title, time*/}
                        <div className="scheRow">
                            <div className="scheTitle bold">
                                {props.scheTitle}
                            </div>
                            <div className="busType">
                                {props.busType}
                            </div>
                            <div className="scheTime underline">
                                {props.scheTime}
                            </div>
                        </div>
                        {/*for trip, bus-type, seats booked, amount*/}
                        <div className="scheRow btmBrd">
                            <div className="scheTitle">
                                {props.tripName}
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
                                    <span className={`seats ${props.status == "Scheduled" ? "scheduled" : props.status == "Blocked" || props.status == "Stop Booking" ? "blocked" : props.status == "Inactive" ? "inactive" : ""}`}>{props.booked} Booked | </span>

                                    <TooltipText title={seatWiseBreakup} link={<span className={`bookingAmt ${props.status == "Scheduled" ? "scheduled" : props.status == "Blocked" || props.status == "Stop Booking" ? "blocked" : props.status == "Inactive" ? "inactive" : ""}`}>₹ {props.amount} + </span>} />
                                </div>
                            </div>
                        </div>
                        {/*for status gross avg fare row*/}
                        <div className="scheRow">
                            <div className="percentage">
                                <div style={{ paddingRight: "3px" }}>
                                    <SeatIcon style={{ paddingRight: "3px" }} />
                                </div>
                                {props.percentage}
                            </div>
                            <div className="status">
                                {
                                    props.status == "Scheduled" ? <span style={{ background: "#1DB24C", color: "#fff", padding: "2px 7px 2px 7px" }}>{props.status}</span> :
                                        props.status == "Blocked" || props.status == "Stop Booking" ? <span style={{ background: "#EC3237", color: "#fff", padding: "2px 7px 2px 7px" }}>{props.status}</span> :
                                            props.status == "Inactive" ? <span style={{ background: "#7F7F7F", color: "#fff", padding: "2px 7px 2px 7px" }}>{props.status}</span> : null
                                }
                            </div>
                            <div className="gross-avg-fare">
                                <TooltipText
                                    title={fareWiseBreakup}
                                    link={[
                                        <span className="heading">Gross: </span>,
                                        props.gross,
                                        <span className="heading">Avg Fare: </span>,
                                        props.avgFare,
                                        <FontAwesomeIcon icon={faCaretDown}
                                            style={{ fontSize: "1rem", color: "#878787", paddingLeft: "3px" }}
                                        />
                                    ]}
                                />
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
                        <DialogBox link={<span className="spn-action">Trip Schedule</span>}/>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ScheduleBox
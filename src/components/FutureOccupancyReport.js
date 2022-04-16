import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core';
import { Typography, Divider, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import BusIcon from "./common/BusIcon";
import DatePickerInput from "./common/DatePickerInput";
import AutoCompleteInput from "./common/AutoCompleteInput";
import CheckboxWithLabel from "./common/CheckboxWithLabel";
import ProgressBar from "./common/ProgressBar";

import { makeStyles } from "@mui/styles";
import moment from 'moment';
import ScheduleBox from "./ScheduleBox";

import '../styles/FutureOccupancyReport.scss';

function FutureOccupancyReport() {

  const [fromDate, setFromDate] = useState(moment(new Date()));
  const [toDate, setToDate] = useState(moment(new Date(), "DD-MM-YYYY").add(3, 'days'));
  const [frDtFocused, setFrDtFocused] = useState(false);
  const [toDtFocused, setToDtFocused] = useState(false);

  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);

  //options use for trip type drop down
  const options = [
    { label: 'All Trips', id: 1 },
    { label: 'Trip 1', id: 2 },
    { label: 'Trip 2', id: 3 },
    { label: 'Trip 3', id: 4 },
  ];

  //custom css code
  const useStyles = makeStyles({

    for_searchblock: {
      margin: "0px",
      padding: "10px 0px",
      boxSizing: "border-box",
      boxShadow: "0px 1px 5px #aaa",
      background: "#ffffff",
      "& .rptHeading": {
        paddingRight: '8px',
        "&.MuiTypography-h6": {
          fontSize: '0.9rem',
          fontWeight: '600',
        }
      },
      "& .rptCheckobx": {
        "& .MuiIconButton-root": {
          padding: '0px 5px 0px 5px',
        },
        "& .MuiFormControlLabel-label": {
          fontSize: '0.8rem',
        }
      },
      "& .txtSearch": {
        "& .MuiOutlinedInput-root": {
          paddingLeft: "7px",
          fontSize: "0.9rem",
          "& .MuiInputAdornment-root": {
            marginRight: "5px",
          },
          "& .MuiSvgIcon-root": {
            paddingTop: "4px"
          }
        }
      },
      "& .btmInputWrap": {
        marginTop: "10px",
        fontSize: "0.9rem",
      },
      "& .btn-orange": {
        "&.MuiButton-contained": {
          color: '#ffffff',
          backgroundColor: '#ff6000',
          borderColor: ' #ff6000',
          "&:hover": {
            backgroundColor: '#e25500',
          }
        },
      },
      "& .btn-orange-outline": {
        "&.MuiButton-outlined": {
          border: "1px solid #ff6000",
          color: "#ff6000",
          "&:hover": {
            backgroundColor: '#ff6000',
            color: '#ffffff',
          }
        }
      }
    },
    for_resultblock: {
      marginTop: "11px",
      background: "#F1F1F1",
      overflow: "auto",
      height: "80vh",
    }
  });

  const classes = useStyles();

  //onclick on load button get report data
  const getReportData = () => {

    setReportData([]);
    setLoading(true);

    const timer = setTimeout(() => {

      let data = [
        {
          id: "1",
          scheduleTitle: "BNG > CHN",
          scheduleTime: "26 Mar, 12:30 AM",
          busType: "AC Seater Sleeper",
          tripName: "Trip-123",
          opName: "Bharat Benz",
          status: "Scheduled",
          booked: "35",
          amount: "1250",
          percentage: "27/48=56%",
          gross: "23,400",
          avgFare: "843",
        },
        {
          id: "2",
          scheduleTitle: "BNG > CHN",
          scheduleTime: "26 Mar, 12:30 AM",
          busType: "NAC Sleeper",
          tripName: "Trip-123",
          opName: "TATA",
          status: "Blocked",
          booked: "00",
          amount: "00",
          percentage: "00/00=00%",
          gross: "00",
          avgFare: "00",
        },
        {
          id: "3",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Ashok Leyland",
          tripName: "Trip-123",
          status: "Inactive",
          booked: "35",
          amount: "1250",
          percentage: "27/48=56%",
          gross: "23,400",
          avgFare: "843",
        }, {
          id: "4",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Bharat Benze",
          tripName: "Trip-123",
          status: "Stop Booking",
          booked: "00",
          amount: "00",
          percentage: "00/00=00%",
          gross: "00",
          avgFare: "00",
        },
        {
          id: "5",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Bharat Benz",
          tripName: "Trip-123",
          status: "Scheduled",
          booked: "35",
          amount: "1250",
          percentage: "27/48=56%",
          gross: "23,400",
          avgFare: "843",
        },
        {
          id: "6",
          scheduleTitle: "BNG > CHN",
          scheduleTime: "26 Mar, 12:30 AM",
          busType: "NAC Sleeper",
          tripName: "Trip-123",
          opName: "TATA",
          status: "Blocked",
          booked: "00",
          amount: "00",
          percentage: "00/00=00%",
          gross: "00",
          avgFare: "00",
        },
        {
          id: "7",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Ashok Leyland",
          tripName: "Trip-123",
          status: "Inactive",
          booked: "35",
          amount: "1250",
          percentage: "27/48=56%",
          gross: "23,400",
          avgFare: "843",
        }, {
          id: "8",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Bharat Benze",
          tripName: "Trip-123",
          status: "Stop Booking",
          booked: "00",
          amount: "00",
          percentage: "00/00=00%",
          gross: "00",
          avgFare: "00",
        },

        {
          id: "9",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Bharat Benz",
          tripName: "Trip-123",
          status: "Scheduled",
          booked: "35",
          amount: "1250",
          percentage: "27/48=56%",
          gross: "23,400",
          avgFare: "843",
        },
        {
          id: "10",
          scheduleTitle: "BNG > CHN",
          scheduleTime: "26 Mar, 12:30 AM",
          busType: "NAC Sleeper",
          tripName: "Trip-123",
          opName: "TATA",
          status: "Blocked",
          booked: "00",
          amount: "00",
          percentage: "00/00=00%",
          gross: "00",
          avgFare: "00",
        },
        {
          id: "11",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Ashok Leyland",
          tripName: "Trip-123",
          status: "Inactive",
          booked: "35",
          amount: "1250",
          percentage: "27/48=56%",
          gross: "23,400",
          avgFare: "843",
        }, {
          id: "12",
          scheduleTitle: "BNG > CHN",
          busType: "AC Seater Sleeper",
          scheduleTime: "26 Mar, 12:30 AM",
          opName: "Bharat Benze",
          tripName: "Trip-123",
          status: "Stop Booking",
          booked: "00",
          amount: "00",
          percentage: "00/00=00%",
          gross: "00",
          avgFare: "00",
        },
      ]

      setReportData(data);

      setLoading(false);

    }, 0);

  }

  //hooks for on page load
  useEffect(() => {
    getReportData()
  }, []);

  return (
    <div>
      <div id="for_searchblock" className={classes.for_searchblock}>
        <Box mx={1}>
          <Grid container>
            <Grid container item md={12}>
              <Typography variant="h6" className="rptHeading">Future Occupancy Report</Typography>
              |
              <Box ml={1}>
                <CheckboxWithLabel ml={2} className="rptCheckobx" label={"Include Phone Booking"} />
              </Box>
              |
              <Box ml={1}>
                <span className="span_show">Show: </span>
                <CheckboxWithLabel ml={2} className="rptCheckobx" label={"All Trips"} />
                <CheckboxWithLabel ml={2} className="rptCheckobx" label={"Unscheduled Trips"} />
                <CheckboxWithLabel ml={2} className="rptCheckobx" label={"Blocked Trips"} />
                <CheckboxWithLabel ml={2} className="rptCheckobx" label={"Booking Stoped Trips"} />
                <CheckboxWithLabel ml={2} className="rptCheckobx" label={"Inactive Trips"} />
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={1} className="btmInputWrap">
            <Grid container item md={2} sm={3}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
                <DatePickerInput
                  id="fromDate"
                  selectedDate={fromDate}
                  onDateChange={(date) => setFromDate(date)}
                  onFocusChange={(f) => setFrDtFocused(f)}
                  focused={frDtFocused}
                  label="From Chart Date"
                  displayFormat="DD MMM YYYY"
                />
              </Box>
            </Grid>
            <Grid container item md={2} sm={3}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
                <DatePickerInput
                  id="toDate"
                  selectedDate={toDate}
                  onDateChange={(date) => setToDate(date)}
                  onFocusChange={(f) => setToDtFocused(f)}
                  focused={toDtFocused}
                  label="To Chart Date"
                  displayFormat="DD MMM YYYY"
                />
              </Box>
            </Grid>
            <Grid container item md={4} sm={6}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
                <BusIcon />
                <AutoCompleteInput id="txtTripTypes" labelText="Future Scheduled Active Trips" options={options} />
              </Box>
            </Grid>
            <Grid container item md={2} sm={3}>
              <TextField className="txtSearch" id="txtSearch" size="small" label="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid container item md={1} sm={2} xs={3}>
              <Button id="btnLoad" variant="contained" size="medium" className="btn-orange" onClick={() => getReportData()}>Load</Button>
            </Grid>
            <Grid container item md={1} sm={2} xs={3}>
              <Button id="btnExport" variant="outlined" size="medium" className="btn-orange-outline">Export</Button>
            </Grid>
          </Grid>
        </Box>
      </div>
      {loading && <ProgressBar />}

      <div id="for_resultblock" className={classes.for_resultblock}>
        <Box component="div" sx={{ margin: "5px 15px" }}>
          <Grid container spacing={2}>
            {
              reportData.map((data) => {
                return <ScheduleBox
                  key={data.id}
                  scheTitle={data.scheduleTitle}
                  scheTime={data.scheduleTime}
                  tripName={data.tripName}
                  status={data.status}
                  booked={data.booked}
                  busType={data.busType}
                  opName={data.opName}
                  amount={data.amount}
                  percentage={data.percentage}
                  gross={data.gross}
                  avgFare={data.avgFare}

                />
              })
            }
          </Grid>
        </Box>
      </div>

    </div>
  )
}

export default FutureOccupancyReport
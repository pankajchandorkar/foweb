import React, { useState, useEffect } from 'react'
import { Box, Grid, Checkbox } from '@material-ui/core';
import { Typography, FormControlLabel, Divider, TextField, Autocomplete, InputAdornment, IconButton, Button } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import BusIcon from "./common/BusIcon";
import CalenderIcon from "./common/CalenderIcon";
import { makeStyles } from "@mui/styles";

import DatePickerInput from "./common/DatePickerInput";
import AutoCompleteInput from "./common/AutoCompleteInput";
import CheckboxWithLabel from "./common/CheckboxWithLabel";
import moment from 'moment';


import ScheduleBox from "./ScheduleBox";

import '../styles/FutureOccupancyReport.scss';

function FutureOccupancyReport() {

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(moment(new Date(), "DD-MM-YYYY").add(3, 'days'));
  const [reportData, setReportData] = useState([]);

  const handelFromDateChange = (date) => {
    setFromDate(date);
  }

  const handelToDateChange = (date) => {
    setToDate(date);
  }

  const options = [
    { label: 'All Trips', id: 1 },
    { label: 'Trip 1', id: 2 },
    { label: 'Trip 2', id: 3 },
    { label: 'Trip 3', id: 4 },
  ];

  const useStyles = makeStyles({

    for_searchblock: {
      margin: "0px",
      padding: "10px 0px",
      boxSizing: "border-box",
      boxShadow: "0px 1px 5px #aaa",
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
        fontSize:"0.9rem",
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
      background:"#F1F1F1",
    }
  });

  const classes = useStyles();

  const getReportData = () => {

    let data = [
      {
        id: "1",
        scheduleTitle: "BNG > CHN",
        busType: "AC Seater Sleeper",
        opName: "Bharat Benz",
        status: "Scheduled",
        booked: "35",
        amount: "1250",
        percentage: "27/48=56%",
        gross:"23,400",
        avgFare:"843",
      },
      {
        id: "2",
        scheduleTitle: "BNG > CHN",
        busType: "NAC Sleeper",
        opName: "TATA",
        status: "Blocked",
        booked: "00", 
        amount: "00",
        percentage:"00/00=00%",
        gross:"00",
        avgFare:"00",
      },
      {
        id: "3",
        scheduleTitle: "BNG > CHN",
        busType: "AC Seater Sleeper",
        opName: "Ashok Leyland",
        status: "Inactive",
        booked: "35", 
        amount: "1250",
        percentage:"27/48=56%",
        gross:"23,400",
        avgFare:"843",
      }, {
        id: "4",
        scheduleTitle: "BNG > CHN",
        busType: "AC Seater Sleeper",
        opName: "Bharat Benze",
        status: "Stop Booking",
        booked: "00", 
        amount: "00",
        percentage:"00/00=00%",
        gross:"00",
        avgFare:"00",
      },
      
    ]
    setReportData(data);
  }


  useEffect(() => {

    getReportData()



  }, []);

  return (
    <div>
      <div className={classes.for_searchblock}>
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
                <CalenderIcon />
                <DatePickerInput id="txtChartFromDate" lableText="Chart From Date" selectedDate={fromDate} handleDateChange={handelFromDateChange} />
              </Box>
            </Grid>
            <Grid container item md={2} sm={3}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
                <CalenderIcon />
                <DatePickerInput id="txtChartToDate" lableText="Chart To Date" selectedDate={toDate} handleDateChange={handelToDateChange} />
              </Box>
            </Grid>
            <Grid container item md={4} sm={6}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
                <BusIcon />
                <AutoCompleteInput id="txtTripTypes" labelText="Future Scheduled Active Trips" options={options} />
              </Box>
            </Grid>
            <Grid container item md={2} sm={3}>
              <TextField className={classes.txtSearch} id="txtSearch" size="small" label="Search"
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
              <Button id="btnLoad" variant="contained" size="medium" className="btn-orange">Load</Button>
            </Grid>
            <Grid container item md={1} sm={2} xs={3}>
              <Button id="btnExport" variant="outlined" size="medium" className="btn-orange-outline">Export</Button>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className={classes.for_resultblock}>
        <Box component="div" sx={{ margin: "5px 10px" }}>
          <Grid container spacing={2}>
            {
              reportData.map((data) => {
                return <ScheduleBox
                  key={data.id}
                  scheTitle={data.scheduleTitle}
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
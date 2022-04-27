import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core';
import { Typography, Divider, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import BusIcon from "./common/BusIcon";
import DropDown from "./common/DropDown";
import ProgressBar from "./common/ProgressBar";
import CalenderIcon from "./common/CalenderIcon";
import ScheduleBox from "./ScheduleBox";
import MultiDatePickerInput from "./common/MultiDatePickerInput";

import '../styles/FutureOccupancyReport.scss';

function FutureOccupancyReport() {

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [activeTrip, setActiveTrip] = useState("");
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);

  //options use for trip type drop down
  const options = [
    { id: 1, role: "Trip Type 1" },
    { id: 2, role: "Trip Type 2" },
    { id: 3, role: "Trip Type 3" },
    { id: 4, role: "Trip Type 4" },
  ];


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

    }, 1000);

  }

  //hooks for on page load
  useEffect(() => {
    getReportData()
  }, []);

  return (
    <div>
      <div id="for_searchblock" className="for_searchblock">
        <Box mx={1}>
          <Grid container>
            <Grid container item md={12} className="rptHeadingRow">
              <Typography variant="h6" className="rptHeading">Future Occupancy Report</Typography>
              <span className="seperator"></span>
              <Box ml={2}>
                <div className="chk-input-wrap">
                  <input type="checkbox" />
                  <label>Include Phone Booking</label>
                </div>
              </Box>
              <span className="seperator"></span>
              <Box ml={1} className="tripFilter">
                <span className="span_show">Show: </span>

                <div className="chk-input-wrap">
                  <input type="checkbox" />
                  <label>All Trips</label>
                </div>

                <div className="chk-input-wrap">
                  <input type="checkbox" />
                  <label>Unscheduled Trips</label>
                </div>

                <div className="chk-input-wrap">
                  <input type="checkbox" />
                  <label>Blocked Trips</label>
                </div>

                <div className="chk-input-wrap">
                  <input type="checkbox" />
                  <label>Booking Stoped Trips</label>
                </div>

                <div className="chk-input-wrap">
                  <input type="checkbox" />
                  <label>Inactive Trips</label>
                </div>

              </Box>
            </Grid>
          </Grid>
          <Divider className="hr_divider" />
          <Grid container spacing={1} className="btmInputWrap">
            <Grid container item md={2} sm={3}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
                <CalenderIcon/>
                <MultiDatePickerInput
                  id="fromDate"
                  labelReq={true}
                  label="From Chart Date"
                  onDateChange={(date) => setFromDate(date)}
                  selectedDate={fromDate}
                  closeWrapper={false}
                />
              </Box>
            </Grid>
            <Grid container item md={2} sm={3}>
              <Box component="div" sx={{ width: "100%", position: "relative" }}>
              <CalenderIcon/>
                <MultiDatePickerInput
                  id="toDate"
                  labelReq={true}
                  label="To Chart Date"
                  onDateChange={(date) => setToDate(date)}
                  selectedDate={toDate}
                  closeWrapper={false}
                />
              </Box>
            </Grid>
            <Grid container item md={4} sm={6}>
              <Box className="activeTrips" component="div" sx={{ width: "100%", position: "relative" }}>
                <BusIcon />
                <DropDown
                  width={"100%"}
                  label={"Future Scheduled Active Trips"}
                  field={""}
                  data={[...new Set(options.map((el) => el.role))]}
                  searchPlaceholder={"Future Scheduled Active Trips"}
                  defaultValue={activeTrip}
                  handelItemSelect={(value) => setActiveTrip(value)}
                />
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
      <div id="for_resultblock" className="for_resultblock">
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
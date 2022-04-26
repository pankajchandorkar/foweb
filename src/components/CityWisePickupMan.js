import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core';
import EditIcon from './common/EditIcon';
import DropDown from "./common/DropDown";

function CityWisePickupMan(props) {

    const cityWisePickupManData = [
        {
            cityName: "Pune",
            pickupMan: [
                { name: "Babybhai Pune", mobile: "1234567890" },
                { name: "Bajirao", mobile: "9901854265" },
                { name: "Chandra", mobile: "9901851265" },
                { name: "Dharma", mobile: "9901851265" },
                { name: "Dhondu", mobile: "9901851265" },
                { name: "Durgesh", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Lonavala",
            pickupMan: [
                { name: "Fakru Lonavala", mobile: "1234567890" },
                { name: "Gaurav", mobile: "9901854265" },
                { name: "Hafiz raja", mobile: "9901851265" },
                { name: "Ishant", mobile: "9901851265" },
                { name: "Kaka", mobile: "9901851265" },
                { name: "Karim", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Thiruvanthapuram",
            pickupMan: [
                { name: "Kartik Thiruvanthapuram", mobile: "1234567890" },
                { name: "Kishan", mobile: "9901854265" },
                { name: "Kishor", mobile: "9901851265" },
                { name: "Lall", mobile: "9901851265" },
                { name: "Mahesh", mobile: "9901851265" },
                { name: "Mukund", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Mumbai",
            pickupMan: [
                { name: "Nafees Mumbai", mobile: "1234567890" },
                { name: "Narendra", mobile: "9901854265" },
                { name: "Prabhat", mobile: "9901851265" },
                { name: "Pramod", mobile: "9901851265" },
                { name: "Prashant", mobile: "9901851265" },
                { name: "Radheshyam", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Chennai",
            pickupMan: [
                { name: "Rahul Chennai", mobile: "1234567890" },
                { name: "Rajan", mobile: "9901854265" },
                { name: "Rajiv verma", mobile: "9901851265" },
                { name: "Ramesh kumar", mobile: "9901851265" },
                { name: "Rounak", mobile: "9901851265" },
                { name: "Shahid", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Bangalore",
            pickupMan: [
                { name: "Shabaz Bangalore", mobile: "1234567890" },
                { name: "Shambhu", mobile: "9901854265" },
                { name: "Sooraj shah", mobile: "9901851265" },
                { name: "Tushar", mobile: "9901851265" },
                { name: "Venkat", mobile: "9901851265" },
                { name: "Vinod", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Hyderabad",
            pickupMan: [
                { name: "Vishal Hyderabad", mobile: "1234567890" },
                { name: "Waheed", mobile: "9901854265" },
                { name: "Waseem", mobile: "9901851265" },
                { name: "Yash", mobile: "9901851265" },
                { name: "Mangal", mobile: "9901851265" },
                { name: "Mangesh", mobile: "9901851265" },
            ]
        }
        ,
        {
            cityName: "Hyderabad1",
            pickupMan: [
                { name: "PickupMan-1", mobile: "1234567890" },
                { name: "PickupMan-2", mobile: "9901854265" },
                { name: "PickupMan-3", mobile: "9901851265" },
                { name: "PickupMan-4", mobile: "9901851265" },
                { name: "PickupMan-5", mobile: "9901851265" },
                { name: "PickupMan-6", mobile: "9901851265" },
                { name: "PickupMan-7", mobile: "1234567890" },
                { name: "PickupMan-8", mobile: "9901854265" },
                { name: "PickupMan-9", mobile: "9901851265" },
                { name: "PickupMan-10", mobile: "9901851265" },
                { name: "PickupMan-11", mobile: "9901851265" },
                { name: "PickupMan-12", mobile: "9901851265" },
                { name: "PickupMan-13", mobile: "1234567890" },
                { name: "PickupMan-14", mobile: "9901854265" },
                { name: "PickupMan-15", mobile: "9901851265" },
                { name: "PickupMan-16", mobile: "9901851265" },
                { name: "PickupMan-17", mobile: "9901851265" },
                { name: "PickupMan-18", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Hyderabad2",
            pickupMan: [

            ]
        },
        {
            cityName: "Hyderabad3",
            pickupMan: [
                { name: "Vishal Hyderabad3", mobile: "1234567890" },
                { name: "Waheed3", mobile: "9901854265" },
                { name: "Waseem3", mobile: "9901851265" },
                { name: "Yash3", mobile: "9901851265" },
                { name: "Mangal3", mobile: "9901851265" },
                { name: "Mangesh3", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Hyderabad4",
            pickupMan: [
                { name: "Vishal Hyderabad4", mobile: "1234567890" },
                { name: "Waheed4", mobile: "9901854265" },
                { name: "Waseem4", mobile: "9901851265" },
                { name: "Yash4", mobile: "9901851265" },
                { name: "Mangal4", mobile: "9901851265" },
                { name: "Mangesh4", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Hyderabad5",
            pickupMan: [
                { name: "Vishal Hyderabad5", mobile: "1234567890" },
                { name: "Waheed5", mobile: "9901854265" },
                { name: "Waseem5", mobile: "9901851265" },
                { name: "Yash5", mobile: "9901851265" },
                { name: "Mangal5", mobile: "9901851265" },
                { name: "Mangesh5", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Hyderabad6",
            pickupMan: [
                { name: "Vishal Hyderabad6", mobile: "1234567890" },
                { name: "Waheed6", mobile: "9901854265" },
                { name: "Waseem6", mobile: "9901851265" },
                { name: "Yash6", mobile: "9901851265" },
                { name: "Mangal6", mobile: "9901851265" },
                { name: "Mangesh6", mobile: "9901851265" },
            ]
        },
        {
            cityName: "Hyderabad7",
            pickupMan: [
                { name: "Vishal Hyderabad7", mobile: "1234567890" },
                { name: "Waheed7", mobile: "9901854265" },
                { name: "Waseem7", mobile: "9901851265" },
                { name: "Yash7", mobile: "9901851265" },
                { name: "Mangal7", mobile: "9901851265" },
                { name: "Mangesh7", mobile: "9901851265" },
            ]
        }
    ];

    const handelPickupManSelect = (pickupman,city) => {
        console.log(pickupman,city);
    }

    return (
        <div className="citywisePickupManWrap">
            <Box sx={{ width: "100%", marginLeft: "7px" }}>
                <Grid container>
                    {/* 1st row */}
                    <Grid className="trip" item md={12} mb={1}>
                        <div className="input-group" >
                            <span className="group-span">Trip</span>
                            <input className="group-input" id="txtTripBS" name="txtTripBS" placeholder="Trip Name" autoComplete='off' defaultValue="Delhi - Lucknow - SRT-2X1(36) AC-Sleeper" />
                        </div>
                    </Grid>
                    <Grid className="tripDateTime" item md={12}>
                        <div className="input-group" >
                            <span className="group-span">Date / Time</span>
                            <input className="group-input" id="txtdatetimeBS" name="txtdatetimeBS" placeholder="Trip Date / Time" autoComplete='off' defaultValue="15-Dec-2020 09:30 PM" />
                        </div>
                    </Grid>
                    <Grid className="pickupman-container" item md={12}>
                        <div className="heading-row">
                            <div className="city-heading">
                                City Name
                            </div>
                            <div className="pickupman-heading">
                                Pickup Man
                            </div>
                        </div>
                        <div className="pickupman-list">
                            {
                                cityWisePickupManData.map((cities, index) => {
                                    return (
                                        <div className="data-row">
                                            <div className="city-col">
                                                <EditIcon /> {cities.cityName}
                                            </div>
                                            <div className="pickupman-col">
                                                <DropDown
                                                    width={"100%"}
                                                    label={""}
                                                    field={""}
                                                    data={[...new Set(cities.pickupMan.map((el) => (el.name + " | " + el.mobile)))]}
                                                    searchPlaceholder={"Search Code"}
                                                    id="cmbPickupManBS"
                                                    defaultValue={""}
                                                    handelItemSelect={(value) => handelPickupManSelect(value,cities.cityName)}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid className="busSchAction" item xs={12}>
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
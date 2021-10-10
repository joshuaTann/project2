import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'




function DriverSelect(props) {

    const [driverData, setDriverData] = useState([])


    useEffect(() => {
        fetch(`https://ergast.com/api/f1/${props.selectedSeason}/drivers.json?`)
            .then((response) => response.json())
            .then((drivers) => {
                console.log("driverData", drivers);
                setDriverData(drivers)
            });
    }, [props.selectedSeason]);

    const driversArr = driverData?.MRData?.DriverTable?.Drivers

    const listOfDrivers = driversArr?.map((driver, i) => {
        return (driver.givenName + " " + driver.familyName)
    })

    const listOfDriversId = driversArr?.map((driver) => {
        return (driver?.driverId)
    })

    console.log("listOfDrivers", listOfDrivers)


    //Making sure the app doesn't crash while the api is fetching the list of drivers for that particular season
    if(listOfDrivers === undefined){
        var displayDriverList = ["loading drivers please wait a moment..."]
    } else {
        displayDriverList = listOfDrivers
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const selectHandler = (text) => {
        props.setSelectedDriver(text)
    }
    console.log("selectedDriver", props.selectedDriver)

    if (props.selectedDriver !== undefined) {
        const driverIndex = listOfDrivers.indexOf(`${props.selectedDriver}`)
        console.log("driverIndex", driverIndex)
        var driverId = listOfDriversId[driverIndex]
    }
    console.log("driverId", driverId)

    props.setDriverId(driverId)

    const changeTheSeason = () => { //making sure the link is deactivated when going back to choose the season
        props.setSelectedSeason();
        props.setSelectedDriver();
    }


    const handleLink = (event) => {
        if (props.selectedDriver === undefined || props.selectedDriver === null) {
            alert("Please select a driver before proceeding")
            event.preventDefault()
        }
    }


    return (
        <Container maxWidth="sm">
            <Typography variant="h2" >
                Choose your Driver:
            </Typography>
            <Autocomplete
                onChange={(event, value) => selectHandler(value)}
                disablePortal
                id="combo-box-demo"
                options={displayDriverList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select a Driver" />}               
            />
            <Link onClick={handleLink} to={"/seasondisplay"}>
                <Button variant="contained">See the results</Button>
            </Link>
            <p>Add something to separate these buttons later</p>
            <div>
                <Link to={"/seasonselect"}>
                    <Button variant="contained" onClick={() => changeTheSeason()}>Change the season</Button>
                </Link>
            </div>

        </Container>
    )
}

export default DriverSelect
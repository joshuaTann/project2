import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Typography, Container, Autocomplete, TextField, Button, Grid } from "@mui/material";



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
        return (driver.givenName + " " + driver.familyName) //Lewis Hamilton 
    })

    const listOfDriversId = driversArr?.map((driver) => {
        return (driver?.driverId) //hamilton 
    })

    console.log("listOfDrivers", listOfDrivers)


    //Making sure the app doesn't crash while the api is fetching the list of drivers for that particular season
    if (listOfDrivers === undefined) {
        var displayDriverList = ["Select A Driver"]
    } else {
        displayDriverList = listOfDrivers
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const selectHandler = (text) => {
        props.setSelectedDriver(text)
    }
    console.log("selectedDriver", props.selectedDriver)

    if (props.selectedDriver !== undefined && displayDriverList === listOfDrivers) {
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
        if (props.selectedDriver === undefined || props.selectedDriver === null || props.selectedDriver === "Select A Driver") {
            alert("Please select a driver before proceeding")
            event.preventDefault()
        }
    }


    return (
        <Container maxWidth="sm" sx={{ pt: 20 }}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h2">
                        Choose your Driver:
                    </Typography>
                </Grid>

                <Grid item>
                    <Autocomplete
                        onChange={(event, value) => selectHandler(value)}
                        disablePortal
                        id="combo-box-demo"
                        options={displayDriverList}
                        sx={{ mx: 10, width: 300, padding: 5 }}
                        renderInput={(params) => <TextField {...params} label="Select a Driver" />}
                    />
                </Grid>
                <Grid item>
                    <Link onClick={handleLink} to={"/seasondisplay"} style={{ textDecoration: "none" }}>
                        <Button variant="contained" sx={{ px: 4 }}>See the results</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={"/seasonselect"} style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="secondary" onClick={() => changeTheSeason()}>Change the season</Button>
                    </Link>
                </Grid>

            </Grid>
        </Container>
    )
}

export default DriverSelect
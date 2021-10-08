import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";




function DriverSelect() {

    const [driverData, setDriverData] = useState([])


    useEffect(() => {
        fetch("https://ergast.com/api/f1/2008/drivers.json?")
            .then((response) => response.json())
            .then((drivers) => {
                console.log("driverData", drivers);
                setDriverData(drivers)
            });
    }, []);

    const driversArr = driverData?.MRData?.DriverTable?.Drivers

    const listOfDrivers = driversArr?.map((driver, i) => {
         return(driver.givenName +" "+ driver.familyName)
    })

    const [selectedDriver, setSelectedDriver] = useState()
    const selectHandler = (text) => {
        setSelectedDriver(text)
    }

    console.log(selectedDriver)

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" >
                Choose your Driver:
            </Typography>
            <Autocomplete
                onChange={(event, value) => selectHandler(value)}
                disablePortal
                id="combo-box-demo"
                options={listOfDrivers}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select a Driver" />}
            />
            <Button variant="contained">See the results</Button>
        </Container>
    )
}

export default DriverSelect
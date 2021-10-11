import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';



function SeasonSelect(props) {

    const listOfSeasons = []
    var year = new Date().getFullYear()
    for (let i = 1950; i <= year; i++) {
        listOfSeasons.push(`${i}`)
    }
    

    const selectHandler = (text) => { //used to set the selected season on change of the text box value
        props.setSelectedSeason(text)
    }

console.log("Season Side Selected Season", props.selectedSeason)

    const handleLink = (event) => {
        if(props.selectedSeason === undefined || props.selectedSeason === null) {
            alert("Please select a season before proceeding");
            event.preventDefault();
        }
    }


    return (
        <Container maxWidth="sm">
            <Typography variant="h2" >
                Choose your Season:
            </Typography>
            <Autocomplete
                onChange={(event, value) => selectHandler(value)}
                disablePortal
                id="combo-box-demo"
                options={listOfSeasons}
                sx={{ width: 300, padding: 5 }}
                renderInput={(params) => <TextField {...params} label="Select a season" />}
            />
            <Link onClick={handleLink}  to={"/driverselect"}>
            <Button variant="contained">Pick your Driver</Button>
            </Link>
        </Container>
    )
}

export default SeasonSelect
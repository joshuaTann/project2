import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


function SeasonSelect() {

    const listOfSeasons = []
    var year = new Date().getFullYear()
    for (let i = 1950; i < year; i++) {
        listOfSeasons.push(i)
    }
    listOfSeasons.push("Current")

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" >
                Choose your Season:
            </Typography>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={listOfSeasons}
                sx={{ width: 300, padding: 5 }}
                renderInput={(params) => <TextField {...params} label="Select a season" />}
            />
            <Button variant="contained">Pick your Driver</Button>
        </Container>
    )
}

export default SeasonSelect
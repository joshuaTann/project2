import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


function SeasonSelect() {

    const listOfSeasons = []
    var year = new Date().getFullYear()
    for (let i = 1950; i < year; i++) {
        listOfSeasons.push(`${i}`)
    }
    listOfSeasons.push("current")

    const [selectedSeason, setSelectedSeason] = useState(null)
    const selectHandler = (text) => {
        setSelectedSeason(text)
    }

    console.log(selectedSeason)

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
            <Button variant="contained">Pick your Driver</Button>
        </Container>
    )
}

export default SeasonSelect
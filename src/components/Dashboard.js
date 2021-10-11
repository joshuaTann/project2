import { Container, Typography, Grid, Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
    const [selectedRoundData, setSelectedRoundData] = useState()

    useEffect(() => {
        fetch(`https://ergast.com/api/f1/${props.selectedSeason}/${props.roundNumber}/results.json?`)
            .then((response) => response.json())
            .then((round) => {
                console.log("Round Data:", round);
                setSelectedRoundData(round)
            });
    }, [props.selectedSeason, props.roundNumber]);

    const thisRound = props?.raceData?.MRData?.RaceTable?.Races[props.roundIndex]
    const thisRace = selectedRoundData?.MRData?.RaceTable?.Races[0]

    function handleGoBack() {
        props.setRoundIndex();
        props.setRoundNumber();
    }

    return (
        <>
            <Container>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography>Driver: {props?.selectedDriver}</Typography>
                        <Typography>Nationality: {thisRound?.Results[0]?.Driver?.nationality}</Typography>
                        <Typography>Team: {thisRound?.Results[0]?.Constructor?.name}</Typography>
                        <Typography>Season: {props?.selectedSeason}</Typography>
                        <Typography>Round: {thisRound?.round}</Typography>
                        <Typography>Grand Prix: {thisRound?.raceName}</Typography>
                        <Typography>Circuit: {thisRound?.Circuit?.circuitName}</Typography>
                        <Typography>Grid Position: {thisRound?.Results[0]?.grid}</Typography>
                        <Typography>Finishing Position: {thisRound?.Results[0]?.position}</Typography>
                        <Typography>Points Scored: {thisRound?.Results[0]?.points}</Typography>
                        <Typography>Fastest Lap by driver: {thisRound?.Results[0]?.FastestLap?.Time?.time}</Typography>
                        <Typography>Podium Finishers:</Typography>
                        <Typography>
                            First Place: {thisRace?.Results[0]?.Driver?.givenName} {thisRace?.Results[0]?.Driver?.familyName} {thisRace?.Results[0]?.Time?.time}
                        </Typography>
                        <Typography>
                            Second Place: {thisRace?.Results[1]?.Driver?.givenName} {thisRace?.Results[1]?.Driver?.familyName} {thisRace?.Results[1]?.Time?.time}
                        </Typography>
                        <Typography>
                            Third Place: {thisRace?.Results[2]?.Driver?.givenName} {thisRace?.Results[2]?.Driver?.familyName} {thisRace?.Results[2]?.Time?.time}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Link to={"/seasondisplay"}>
                    <Button onClick={() => handleGoBack()}variant="contained">Back to Season Display</Button>
                </Link>
            </Container>
        </>
    )
}

export default Dashboard
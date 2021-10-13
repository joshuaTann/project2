import { Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
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
        console.log("ROUNDS URL", `https://ergast.com/api/f1/${props.selectedSeason}/${props.roundNumber}/results.json?`)
    }, [props.selectedSeason, props.roundNumber]);

    const thisRound = props?.raceData?.MRData?.RaceTable?.Races[props.roundIndex]
    const thisRace = selectedRoundData?.MRData?.RaceTable?.Races[0]

    function handleGoBack() {
        props.setRoundIndex();
        props.setRoundNumber();
    }

    return (
        <>
            <Grid container spacing={4} sx={{ p: 5 }}>

                <Grid item sm={12}>
                    <Card className="dashCards">
                        <CardContent>
                            <Typography variant="h2">Season: {props?.selectedSeason}</Typography>
                            <Typography variant="h4">Round: {thisRound?.round}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card className="dashCards">
                        <CardContent>
                            <Typography variant="h6">{thisRound?.raceName}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6}>
                    <Card className="dashCards">
                        <CardContent>
                            <Typography variant="h6">Circuit: {thisRound?.Circuit?.circuitName}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={12} lg={4} container direction="column" spacing={2}>
                    <Grid item sm={4}>
                        <Card className="dashCards">
                            <CardContent>
                                <Typography variant="h4">{props?.selectedDriver}</Typography>
                                <Typography variant="h6">Nationality: {thisRound?.Results[0]?.Driver?.nationality}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={12} lg={4} >
                        <Card className="dashCards">
                            <CardContent>
                                <Typography variant="h5">Team: {thisRound?.Results[0]?.Constructor?.name}</Typography>
                                <Typography variant="h7">Car Number {thisRound?.Results[0]?.Driver?.permanentNumber}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                <Grid item sm={12} lg={4} >
                    <Card className="dashCards">
                        <CardContent>
                            <Typography variant="h4" align="Left" gutterBottom>Results</Typography>
                            <Typography variant="h5">Grid Position: {thisRound?.Results[0]?.grid}</Typography>
                            <Typography variant="h5">Finishing Position: {thisRound?.Results[0]?.position}</Typography>
                            <Typography variant="h6">Points Scored: {thisRound?.Results[0]?.points}</Typography>
                            <Typography>Fastest Lap by driver: {thisRound?.Results[0]?.FastestLap?.Time?.time}</Typography>
                        </CardContent>
                    </Card>
                </Grid>



                <Grid item sm={12} lg={4} >
                    <Card className="dashCards">
                        <CardContent>
                            <Typography variant="h4" align="Left" gutterBottom>Podium Finishers</Typography>
                            <Typography variant="h5" gutterBottom>
                                <strong>1: {thisRace?.Results[0]?.Driver?.givenName} {thisRace?.Results[0]?.Driver?.familyName} {thisRace?.Results[0]?.Time?.time}</strong>
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                <strong>2: {thisRace?.Results[1]?.Driver?.givenName} {thisRace?.Results[1]?.Driver?.familyName} {thisRace?.Results[1]?.Time?.time}</strong>
                            </Typography>
                            <Typography variant="h6">
                                3: {thisRace?.Results[2]?.Driver?.givenName} {thisRace?.Results[2]?.Driver?.familyName} {thisRace?.Results[2]?.Time?.time}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>



            <Container>
                <Link to={"/seasondisplay"} style={{ textDecoration: "none" }}>
                    <Button onClick={() => handleGoBack()} variant="contained" >Back to Season Display</Button>
                </Link>
            </Container>
        </>
    )
}

export default Dashboard
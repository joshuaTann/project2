import React, { useState } from "react";
import { Card, CardContent, CardActions, Container, Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function SeasonPage(props) {


    const changeTheSeason = () => { //making sure the link is deactivated when going back to choose the season
        props.setSelectedSeason();
        props.setSelectedDriver();
    }
    const changeTheDriver = () => { //making sure the link is deactivated when going back to choose the season
        props.setSelectedDriver();
    }

    const roundsArr = props?.raceData?.MRData?.RaceTable?.Races

    const renderRounds = () => {

        console.log("Rounds Array", roundsArr)

        if (roundsArr !== undefined) {
            return (
                roundsArr.map((r, i) => (
                    <Grid item key={i} xs={12} sm={6} md={4}>
                        <Card sx={{ border: 1, borderColor: 'primary.main' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Round: {r?.round}</Typography>
                                <Typography variant="h7" gutterBottom>Grand Prix: {r?.raceName}</Typography>
                                <Typography gutterBottom>Track: {r?.Circuit?.circuitName}</Typography>
                                <Typography gutterBottom>{props?.selectedDriver} Finishing Position: <strong>{r?.Results[0]?.position}</strong></Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                                    <Button onClick={() => { props.setRoundIndex(i); props.setRoundNumber(r?.round) }}>See More</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )
        }
    }

    const renderButton = () => {
        if (roundsArr !== undefined) {
            return (
                <Container>
                    <Link to={"/driverselect"} style={{ textDecoration: "none" }}>
                        <Button variant="contained" onClick={() => changeTheDriver()} sx={{ m: 2 }}>Change Drivers</Button>
                    </Link>
                    <Link to={"/seasonselect"} style={{ textDecoration: "none" }}>
                        <Button variant="outlined" onClick={() => changeTheSeason()} sx={{ m: 2 }}>Change Seasons</Button>
                    </Link>
                </Container>
            )
        }
    }


    return (
        <>
            <Container maxWidth="sm" sx={{ p: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Results for the driver: {props?.selectedDriver} in the Season: {props?.selectedSeason}
                </Typography>
                <Typography variant="h8" align="center" paragraph>
                    This page displays the results for the season by round in the cards below. Click onto them to see a dashboard of more detalied information from that particular round of the championship
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {renderRounds()}
                </Grid>
            </Container>
            <div>
                {renderButton()}
            </div>

        </>
    )
}


export default SeasonPage



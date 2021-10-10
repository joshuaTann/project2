import React from "react";
import { Card, CardContent, CardActions, Container, Grid, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";



function SeasonPage(props) {

    const roundsArr = props?.raceData?.MRData?.RaceTable?.Races
    console.log("Rounds Array", roundsArr)


    const renderRounds = () => {
        const roundsArr = props?.raceData?.MRData?.RaceTable?.Races
        console.log("Rounds Array", roundsArr)

        if(roundsArr !== undefined){
            return(
                roundsArr.map((r, i) => (
                    <Grid item key={i}>
                        <Card >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Round: {r?.round}</Typography>
                                <Typography gutterBottom>Grand Prix: {r?.raceName}</Typography>
                                <Typography gutterBottom>Track: {r?.Circuit?.circuitName}</Typography>
                                <Typography gutterBottom>{props?.selectedDriver} Finishing Position: {r?.Results[0]?.position}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button>See More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )
        }
    }


    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Button variant="contained" >Pick another driver</Button>
                    <Button variant="contained" >Pick another season</Button>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h4" gutterBottom>
                            Results for the driver: {props?.selectedDriver} in the Season: {props?.selectedSeason}
                        </Typography>
                        <Typography variant="h8" align="center" paragraph>
                            This page displays the results for the season by round in the cards below. Click onto them to see a dashboard of more detalied information from that particular round of the championship
                        </Typography>
                    </Container>
                </div>
                <div>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                           {renderRounds()}
                        </Grid>
                    </Container>
                </div>
            </main>

        </>
    )
}


export default SeasonPage


import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";


function Homepage() {
    return (
        <Container maxWidth="sm" >
            <Typography variant="h5" align="center" width="500px" color="textPrimary" gutterBottom >
                This is the Formula 1 results finder. Choose your desired season and select the driver you would like to see the results for. Then, you may pick the round you want to see in more detail.
            </Typography>
           <Button variant="contained">Get Started</Button>
        </Container>
    )
}

export default Homepage
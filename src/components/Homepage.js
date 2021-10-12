import React from "react";
import { AppBar, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function Homepage() {
    return (
        <>
            <Container maxWidth="sm" sx={{p: 20}}>
                <Typography variant="h5" align="center" width="550px" gutterBottom >
                    This is the Formula 1 results finder. Choose your desired season and select the driver you would like to see the results for. Then, you may pick the round you want to see in more detail.
                </Typography>
                <Link to={"/seasonselect"} style={{textDecoration: "none"}}>
                    <Button variant="contained" sx={{margin: 5 }}>Get Started</Button>
                </Link>
            </Container>
        </>
    )
}

export default Homepage
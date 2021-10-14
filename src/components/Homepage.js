import React from "react";
import { autocompleteClasses, Typography, Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function Homepage() {
    return (
        <>
            <Container maxWidth="sm" sx={{ pt: 20 }}>
                <Grid container direction="column" spacing={5}>
                    <Grid item>
                        <Typography variant="h5" align="center" width="550px" paragraph gutterBottom >
                            <strong>This is the Formula 1 results finder. Choose your desired season and select the driver you would like to see the results for. Then, you may pick the round you want to see in more detail.</strong>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link to={"/seasonselect"} style={{ textDecoration: "none" }}>
                            <Button variant="contained">Get Started</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Homepage
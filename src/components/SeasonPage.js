import React from "react";
import { Typography } from "@mui/material";

function SeasonPage(props) {
    return (
        <Typography>
            Hamilton Result: {props?.raceData?.MRData?.RaceTable.Races[2].Results[0].position}
        </Typography>
    )
}

export default SeasonPage
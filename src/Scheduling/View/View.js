import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";

const ViewScheduling = () => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={1}>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Course Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">Full Stack</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Teacher Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">Ravish</Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Starting Timing:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">04-07-24</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Ending Timing:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">04-03-2025</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Works Days:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">Monday</Box>
                    </Grid>

                </Grid>


                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Status:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">Active</Box>
                    </Grid>

                </Grid>



            </Grid>

        </>
    )
}

export default ViewScheduling;
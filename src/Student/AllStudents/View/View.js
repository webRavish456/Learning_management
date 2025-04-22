import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";

const ViewAllStudent = ({viewData})  => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={1}>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Student Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.studentName}</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Course:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.course} </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Mobile Number:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.mobileNumber} </Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Enrollment Date:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.enrollmentDate} </Box>
                    </Grid>

                </Grid>
                
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Address:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.address} </Box>
                    </Grid>

                </Grid>


                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Status:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.status} </Box>
                    </Grid>

                </Grid>



            </Grid>

        </>
    )
}

export default ViewAllStudent;
import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewStudentResult =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Student Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Ayushi</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Course Name:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Frontend</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Marks Obtained:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">80</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Total Marks:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">100</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Passing Marks:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">35</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Sheet:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">downloaded</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Passed</Box>
            </Grid>

            </Grid>

            </Grid>

        </>
     )
}

export default ViewStudentResult;
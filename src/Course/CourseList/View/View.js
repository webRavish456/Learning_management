import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewCourseList =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Course Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">BCA</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Course Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Bachelor Of Computer Application</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Duratione:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">3 years</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Pricing:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">3000</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Syllabus:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">BCA Syllabus</Box>
            </Grid>

            </Grid>

            </Grid>

        </>
     )
}

export default ViewCourseList;
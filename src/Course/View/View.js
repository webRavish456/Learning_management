import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewExam =()=>
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
            <Box className="pageDescription">Web</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Best Course</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Duration:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">6 months</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Payment Fee:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">04-03-2025</Box>
            </Grid>

            </Grid>


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

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

export default ViewExam;
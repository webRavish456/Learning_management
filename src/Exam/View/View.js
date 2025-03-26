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
            <Box className="pageTitle">Exam Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Sem</Box>
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
            <Box className="pageTitle">Faculty Name:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">Ravish Kumar</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Exan Date:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">04-03-2025</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Duration:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">1 hour</Box>
            </Grid>

            </Grid>

            


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Completed</Box>
            </Grid>

            </Grid>



            </Grid>

        </>
     )
}

export default ViewExam;
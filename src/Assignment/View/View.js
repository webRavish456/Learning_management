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
            <Box className="pageTitle">Assignment:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">html</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">html</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Course:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">Full stack</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Faculty:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Faculty</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Due Date:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">05-06-2008</Box>
            </Grid>

            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
              <Box className="pageTitle">Address</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="pageDescription">Gamhatia</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
              <Box className="pageTittle">Course</Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="pageDescription">Full stack</Box>
            </Grid>

            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
             <Box className="pageTitle">Joining Date</Box>
            </Grid>
            <Grid item={6}>
            <Box className="pageDescription">05-06-2008</Box>
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
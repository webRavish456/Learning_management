import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewFaculty =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
        <>
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Faculty Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">Manisha</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Email:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">manisha@12</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Mobile no:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">676778888</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">DOB:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">04-03-2025</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Gender:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">Female</Box>
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

export default ViewFaculty;
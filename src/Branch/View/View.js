import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewBranch =()=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

     return (
       
       
                  
                
        <>
          <Grid container columnSpacing={8} rowSpacing={1}>

            

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Branch Name:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">Full stack</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Location:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">Gamharia</Box>
         
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

export default ViewBranch;
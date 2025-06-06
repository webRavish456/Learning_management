import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewStudentsAssignment =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");



     return (
        <>
          <Grid container columnSpacing={3} rowSpacing={1}>

          <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle"> Student Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.studentName}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Mobile Number:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.mobileNumber}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle"> Assignment Title:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.assignmentTitle}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Course:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.course}</Box>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Teacher:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.teacher}</Box>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Due Date:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{new Date(viewData.dueDate).toLocaleDateString("en-IN")}</Box>
            </Grid>
            </Grid>
        

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Status:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.status}</Box>
            </Grid>

            </Grid>

            </Grid>

        </>
     )
}

export default ViewStudentsAssignment;
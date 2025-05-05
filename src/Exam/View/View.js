import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";

const ViewExam =({viewData})=>
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
            <Box className="pageDescription">{viewData.examName}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Course Name:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.courseName}</Box>
            </Grid>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Teacher Name:</Box> 
            </Grid>   
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.teacherName}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Exan Date:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{new Date(viewData.examDate).toLocaleDateString("en-IN")}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Duration:</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.duration}</Box>
            </Grid>

            </Grid>

            


            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Test Type</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.testType}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Total Marks</Box>
            </Grid>

            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.totalMarks}</Box>
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

export default ViewExam;


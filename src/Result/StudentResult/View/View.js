import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";

const ViewStudentResult = (viewData) => {
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
            <Box className="pageTitle">Student ID:</Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.studentId}</Box>
          </Grid>

        </Grid>

        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

          <Grid item xs={6}>
            <Box className="pageTitle">Result ID:</Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.resultId}</Box>
          </Grid>

        </Grid>

        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

          <Grid item xs={6}>
            <Box className="pageTitle">Course Name:</Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.courseName}</Box>
          </Grid>

        </Grid>

        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

          <Grid item xs={6}>
            <Box className="pageTitle">Marks Obtained:</Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.marksObtained}</Box>
          </Grid>

        </Grid>

        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

          <Grid item xs={6}>
            <Box className="pageTitle">Total Marks:</Box>
          </Grid>

          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.totalMarks}</Box>


          </Grid>

        </Grid>

        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

          <Grid item xs={6}>
            <Box className="pageTitle">Passing Marks:</Box>
          </Grid>

          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.passingMarks}</Box>
          </Grid>


        </Grid>

        {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

          <Grid item xs={6}>
            <Box className="pageTitle">Sheet:</Box>
          </Grid>

          <Grid item xs={6}>
            <Box className="pageDescription">{viewData.sheet}</Box>
          </Grid>


        </Grid> */}

        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

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

export default ViewStudentResult;
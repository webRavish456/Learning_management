import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const ViewCertificates = ({viewData})  => {

    const isSmScreen = useMediaQuery("(max-width:768px)");

   const handleDownload =  async (pdfUrl) => {

     try {

        const response = await fetch(pdfUrl.certificates);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
    
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `${pdfUrl.courseName}-certificates.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      
        }
         catch (error) {
          console.error("Failed to download PDF", error);
        }

}


    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={1}>

                
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Student Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.studentName} </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Course Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.courseName} </Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Duration:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.duration} </Box>
                    </Grid>

                </Grid>
                
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Certificate:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription download" onClick={()=>handleDownload(viewData)}><PictureAsPdfIcon/></Box>
                    </Grid>

                </Grid>


                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Status:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">{viewData.status} </Box>
                    </Grid>

                </Grid>



            </Grid>

        </>
    )
}

export default ViewCertificates;
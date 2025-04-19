import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import DownloadIcon from '@mui/icons-material/Download';

const ViewCertificates = () => {

    const isSmScreen = useMediaQuery("(max-width:768px)");

    const handleDownload = () => {

        const pdfUrl = 'dynamic.pdf'; 
        const fileName = 'certificate.pdf'; 
    
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={1}>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Student Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">Ravish</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Course Name:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">Java</Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Duration:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="pageDescription">6 months</Box>
                    </Grid>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Certificate:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription" onClick={handleDownload}><PictureAsPdfIcon /></Box>


                    </Grid>

                </Grid>


                {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6} style={{ display: "flex" }}>

                    <Grid item xs={6}>
                        <Box className="pageTitle">Status:</Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className="pageDescription">Active</Box>
                    </Grid>

                </Grid>
 */}


            </Grid>

        </>
    )
}

export default ViewCertificates;
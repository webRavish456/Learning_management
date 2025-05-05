import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';

const ViewDocumentSharing =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");


   const handleDownload =  async (pdfUrl) => {

     try {

          const response = await fetch(pdfUrl.document);
          const blob = await response.blob();
          const blobUrl = window.URL.createObjectURL(blob);
      
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = `${pdfUrl.course}-${pdfUrl.topic}.pdf`;
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

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle">Topic:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.topic}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Topic Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.topicDescription}</Box>
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
            <Box className="pageTitle">Document:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription download" onClick={()=>handleDownload(viewData)}><PictureAsPdfIcon/></Box>
            
            </Grid> 
            </Grid>
            
            </Grid>

        </>
     )
}

export default ViewDocumentSharing;
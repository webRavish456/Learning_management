// import React from "react"
// import { Box, Grid,  useMediaQuery} from "@mui/material";
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// const ViewCourseList =()=>
// {
//     const isSmScreen = useMediaQuery("(max-width:768px)");

//      return (
//         <>
//           <Grid container columnSpacing={2} rowSpacing={1}>

//             <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
//             <Grid item xs={6}>
//             <Box className="pageTitle">Course Name:</Box> 
//             </Grid>  
//             <Grid item xs={6}>
//             <Box className="pageDescription">BCA</Box>
//             </Grid>

//             </Grid>

//             <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

//             <Grid item xs={6}>
//             <Box className="pageTitle">Course Description:</Box>    
//             </Grid>
//             <Grid item xs={6}>
//             <Box className="pageDescription">Bachelor Of Computer Application</Box>
//             </Grid>
//             </Grid>

//             <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

//             <Grid item xs={6}>
//             <Box className="pageTitle">Duratione:</Box> 
//             </Grid>   
//             <Grid item xs={6}>
//             <Box className="pageDescription">3 years</Box>
//             </Grid>

//             </Grid>

//             <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

//             <Grid item xs={6}>
//             <Box className="pageTitle">Pricing:</Box>
//             </Grid>

//             <Grid item xs={6}>
//             <Box className="pageDescription">3000</Box>
//             </Grid>

//             </Grid>

//             <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

//             <Grid item xs={6}>
//             <Box className="pageTitle">Syllabus:</Box>
//             </Grid>

//             <Grid item xs={6}>
//             <Box className="pageDescription"><PictureAsPdfIcon/></Box>
//             </Grid>

//             </Grid>

//             </Grid>

//         </>
//      )
// }

// export default ViewCourseList;
import React from "react"
import { Box, Grid,  useMediaQuery} from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';

const ViewCourseList =({viewData})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");
   console.log(viewData)
 
   const handleDownload = () => {

    const pdfUrl = 'dynamic.pdf';
    const fileName = 'syllabus.pdf'; 

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}


     return (
   
          <Grid container columnSpacing={2} rowSpacing={1}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>
            
            <Grid item xs={6}>
            <Box className="pageTitle"> Course Name:</Box> 
            </Grid>  
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.courseName}</Box>
            </Grid>

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Course Description:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.courseDescription}</Box>
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
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Pricing:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription">{viewData.pricing}</Box>
            </Grid> 
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6} style={{display:"flex"}}>

            <Grid item xs={6}>
            <Box className="pageTitle">Syllabus:</Box>    
            </Grid>
            <Grid item xs={6}>
            <Box className="pageDescription" onClick={()=>handleDownload(viewData.syllabus)}><PictureAsPdfIcon/></Box>
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

     
     )
}

export default ViewCourseList;
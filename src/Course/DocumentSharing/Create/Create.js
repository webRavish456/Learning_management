// import React, { useState } from "react"
// import {
//     TextField,
//     MenuItem,
//     Select,
//     FormControl,
//     InputLabel,
//     Grid,
//     useMediaQuery,
//     Button,
//     Box,
// } from "@mui/material";

// const CreateDocumentSharing = ({ handleSubmit, handleClose }) => {
//     const isSmScreen = useMediaQuery("(max-width:768px)");

//     const [formData, setFormData] = useState({
//         courseTitle: "",
//         courseDescription: "",
//         teacher: "",
//         document: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <>
//             <Grid container columnSpacing={2}>
                 

//                 {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

//                     <FormControl fullWidth margin="normal">
//                         <InputLabel>Course Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
//                         <Select name="courseName" value={formData.courseName} onChange={handleChange}>
//                             <MenuItem value="BCA">BCA</MenuItem>
//                             <MenuItem value="MCA">MCA</MenuItem>
//                             <MenuItem value="MBA">BBA</MenuItem>
//                         </Select>
//                     </FormControl>

//                 </Grid> */}
//                                 <Grid item xs={12} sm={12} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Course Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="courseTitle"
//                         value={formData.courseTitle}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Course Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="courseDescription"
//                         value={formData.courseDescription}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
//                     <FormControl fullWidth margin="normal">
//                         <InputLabel>Teacher <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
//                         <Select name="teacher" value={formData.teacher} onChange={handleChange}>
//                             <MenuItem value="BCA">Ravish Sir</MenuItem>
//                             <MenuItem value="MCA">Rakesh Sir</MenuItem>
//                             <MenuItem value="MBA">Nikhil Sir</MenuItem>
//                         </Select>
//                     </FormControl>

//                 </Grid>

//                 <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Document  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="document"
//                         value={formData.document}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>

//                 {/* <Grid item xs={12} sm={12} md={12}>
//                     <TextField
//                         label={
//                             <>
//                                 Syllabus <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="syllabus"
//                         value={formData.syllabus}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid> */}

//             </Grid>

//             <Box className="submit" sx={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2 }}>
//                 <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
//                 <Button onClick={handleSubmit} className="primary_button">
//                     Submit
//                 </Button>
//             </Box>

//         </>
//     )
// }

// export default CreateDocumentSharing;
// import React, { useState } from "react"
// import {
//     TextField,
//     MenuItem,
//     Select,
//     FormControl,
//     InputLabel,
//     Grid,
//     useMediaQuery,
//     Button,
//     Box,
// } from "@mui/material";

// const CreateCourseList = ({ handleSubmit, handleClose }) => {
//     const isSmScreen = useMediaQuery("(max-width:768px)");

//     const [formData, setFormData] = useState({
//         courseName: "",
//         courseDescription: "",
//         duration: "",
//         pricing: "",
//         syllabus: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <>
//             <Grid container columnSpacing={2}>
                 

//                 {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

//                     <FormControl fullWidth margin="normal">
//                         <InputLabel>Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
//                         <Select name="courseName" value={formData.courseName} onChange={handleChange}>
//                             <MenuItem value="BCA">BCA</MenuItem>
//                             <MenuItem value="MCA">MCA</MenuItem>
//                             <MenuItem value="MBA">BBA</MenuItem>
//                         </Select>
//                     </FormControl>

//                 </Grid> */}
//                 <Grid item xs={12} sm={12} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="courseName"
//                         value={formData.courseName}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Course Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="courseDescription"
//                         value={formData.courseDescription}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>
//                 {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
//                     <FormControl fullWidth margin="normal">
//                         <InputLabel>Duration <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
//                         <Select name="duration" value={formData.duration} onChange={handleChange}>
//                             <MenuItem value="BCA">3 years</MenuItem>
//                             <MenuItem value="MCA">2 years</MenuItem>
//                             <MenuItem value="MBA">2 years</MenuItem>
//                         </Select>
//                     </FormControl>

//                 </Grid> */}
                
//                 <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Duration  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>

//                 <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
//                     <TextField
//                         label={
//                             <>
//                                 Pricing  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="pricing"
//                         value={formData.pricing}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                 </Grid>

//                 <Grid item xs={12} sm={12} md={12}>
//                     <TextField
//                         label={
//                             <>
//                                 Syllabus <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//                             </>
//                         }
//                         name="syllabus"
//                         type="file"
//                         value={formData.syllabus}
//                         onChange={handleChange}
//                         InputLabelProps={{ shrink: true }}
//                         fullWidth
//                         margin="normal"
//                     />
                    
//                 </Grid>

//             </Grid>

//             <Box className="submit" sx={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2 }}>
//                 <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
//                 <Button onClick={handleSubmit} className="primary_button">
//                     Submit
//                 </Button>
//             </Box>

//         </>
//     )
// }


// export default CreateCourseList;
import React, {useEffect, useState} from "react"
import {
    TextField,
    Grid,
    Button,
    Box,
    CircularProgress,
    useMediaQuery,
     MenuItem,
      Select,
     FormControl,
     InputLabel,
  } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({
    courseTitle: yup.string().required("Course Title is required"),
    courseDescription: yup.string().required("Course Description is required"),
    teacher: yup.string().required("Teacher is required"),
    document: yup.mixed().required("Document is required"),



});

const CreateDocumentSharing =({handleCreate, handleClose})=>
{
    const [teacherName, setTeacherName]=useState([]);
    
    const token = Cookies.get('token');

    const Base_url = process.env.REACT_APP_BASE_URL;

    const [loading, setLoading] = useState(false)

    const [loadingdata, setLoadingdata] = useState(true)
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });
  
   useEffect(() => { 
    const fetchTeacherData = async () =>{
      try{
        const response = await fetch (`${Base_url}/teacher`,{
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }) ;
        const result= await response.json();
        if (result.status==="success"){
          console.log(result.data)

          setTeacherName(result.data);
          setLoadingdata(false)
        }
      } catch(error){
        console.error("Error fetching teacher", error);
      }
    };
if(loadingdata)
{
  fetchTeacherData();
}

   },[loadingdata]);
  
  
    const onSubmit = (data) => {
    
           setLoading(true)
  
          const formdata = new FormData();
          formdata.append("courseTitle", data.courseTitle);
          formdata.append("courseDescription", data.courseDescription);
          formdata.append("teacher", data.teacher);
          formdata.append("document", data.document);
          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/documentsharing`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)

              console.log(res)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("Document Sharing Created Successfully!")
                handleCreate(true)
                handleClose()
                reset();
              }
              else {
      
                setLoading(false)
                toast.error(res.message)
      
              }
            })
            .catch((error) => console.error(error));
    };

     return (
        <>
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="text"
              label={
                <>
           Course Title<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("courseTitle")}
              error={!!errors.courseTitle}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.courseTitle?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Course Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("courseDescription")}
              error={!!errors.courseDescription}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.courseDescription?.message}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth margin="normal"
          variant="outlined"
          error={!!errors.teacherName}>
                        <InputLabel>Teacher <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                        <Select
                        label="Teacher"
                        defaultValue=""
                        {
                          ...register("teacher")
                        }>

                        {teacherName.map((teacher, index) =>(
                          <MenuItem key={index} value={teacher.teacherName}>
                            {teacher.teacherName}
                          </MenuItem>
                        ))}
                        </Select>
                     </FormControl>
                     <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.teacherName?.message}
            </div>
          </Grid>   
         
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="file"
              InputLabelProps={{shrink:true}}
              label="document"
              variant="outlined"
              {...register("document")}
              error={!!errors.document}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.document?.message}
            </div>
          </Grid>

        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
          <Button onClick={handleClose} className="secondary_button">
            Cancel
          </Button>
          <Button type="submit" className="primary_button">

          {loading ? (
       <>
         <CircularProgress size={18} 
          style={{ marginRight: 8, color: "#fff" }} />
         
                Submitting
                
            </>
          
            ) : (
            "Submit"
            )}
  
          </Button>
        </Box>
      </form>

        </>
     )
}

export default CreateDocumentSharing;
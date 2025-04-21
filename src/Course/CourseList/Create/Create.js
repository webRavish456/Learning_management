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
import React, { useState} from "react"
import {
    TextField,
    Grid,
    Button,
    Box,
    CircularProgress,
   
  } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({
    courseName: yup.string().required("Course Name is required"),
    courseDescription: yup.string().required("Course Description is required"),
    duration: yup.string().required("Duration is required"),
    pricing: yup.string().required("Pricing is required"),
    syllabus: yup.mixed().required("Syllabus is required"),



});

const CreateCourseList =({handleCreate, handleClose})=>
{
  
    const token = Cookies.get('token');

    const Base_url = process.env.REACT_APP_BASE_URL;
  
    const [loading, setLoading] = useState(false)
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    

  
  
    const onSubmit = (data) => {
    
           setLoading(true)

           console.log(data)
  
          const formdata = new FormData();
          formdata.append("courseName", data.courseName);
          formdata.append("courseDescription", data.courseDescription);
          formdata.append("duration", data.duration);
          formdata.append("pricing", data.pricing);
          formdata.append("syllabus", data.syllabus);
          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/courselist`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)

              console.log(res)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("Courselist Created Successfully!")
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
           Course Name<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("courseName")}
              error={!!errors.courseName}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.courseName?.message}
            </div>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth margin="normal"
          variant="outlined"
          error={!!errors.courseNameName}>
                        <InputLabel>Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                        <Select
                        label="Course Name"
                        defaultValue=""
                        {
                          ...register("courseName",{required: "course name is required"})
                        }>

                        {courseName.map((course, index) =>(
                          <MenuItem key={index} value={course.courseName}>
                            {course.courseName}
                          </MenuItem>
                        ))}
                        </Select>
                     </FormControl>
                     <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.courseName?.message}
            </div>
          </Grid>    */}


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
            <TextField
              type="text"
              label={
                <>
                  Duration <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("duration")}
              error={!!errors.duration}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.duration?.message}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Pricing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("pricing")}
              error={!!errors.pricing}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.pricing?.message}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="file"
              // label={
              //   <>
              //     Syllabus <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              //   </>
              // }
              InputLabelProps={{shrink:true}}
              label="syllabus"
              variant="outlined"
              {...register("syllabus")}
              error={!!errors.syllabus}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.syllabus?.message}
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

export default CreateCourseList;
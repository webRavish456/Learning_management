import React, {useState,useEffect} from "react"
import {
    TextField,
    Grid,
    useMediaQuery,
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
    teacherName: yup.string().required("Teacher Name is required"),
    startTiming: yup.string().required("Start Timing is required"),
    lastTiming: yup.string().required("Last Timing is required"),
    workDays: yup.string().required("Work Days is required"),
    status:  yup.string().required("Status is required")
    
  });

const EditScheduling =({handleUpdate, editData, handleClose})=>  
{

  const isSmScreen = useMediaQuery("(max-width:768px)");


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

    useEffect(() => {
        if (editData) {
          reset({
            courseName: editData.courseName || "",
            teacherName: editData.teacherName || "",
            startTiming: editData.startTiming || "",
            endTiming: editData.endTiming || "",
            workDays: editData.workDays || "",
            status: editData.status || "",
          });
        }
      }, [editData, reset]);
    

    const onSubmit = (data) => {
    
        setLoading(true)

       const formdata = new FormData();
       formdata.append("courseName", data.courseName);
       formdata.append("teacherName", data.teacherName);
       formdata.append("startTiming", data.startTiming);
       formdata.append("endTiming", data.endTiming);
       formdata.append("workDays", data.workDays);
       formdata.append("status", data.status);
    
   
       const requestOptions = {
         method: "PATCH",
         body: formdata,
         headers: {
           Authorization: `Bearer ${token}`, 
          },
       };
   
       fetch(`${Base_url}/timetable/${editData._id}`, requestOptions)
         .then((response) => response.text())
   
         .then((result) => {
   
           const res = JSON.parse(result)
   
           if(res.status==="success")
           {
             setLoading(false)
            
             toast.success("Scheduling Updated Successfully!")
             handleUpdate(true)
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

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            
            <TextField
            label={
            <>
                Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            type="text"
            {...register("courseName")}
            error={!!errors.courseName}
            fullWidth
            margin="normal"
            />

            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.courseName?.message}
            </div>

            </Grid>

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            
            <TextField
            label={
            <>
                Teacher Name  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            type="text"
              {...register("teacherName")}
              error={!!errors.teacherName}
              fullWidth
              margin="normal"
            />


<div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.teacherName?.message}
            </div>
          
            </Grid>

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            
            <TextField
            label={
            <>
                Starting Timing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            type="text"
              {...register("startTiming")}
              error={!!errors.startTiming}
              fullWidth
              margin="normal"
            />
             <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.startTiming?.message}
            </div>
            </Grid>

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            
            <TextField
            label={
            <>
                End Timing  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            type="text"
              {...register("lastTiming")}
              error={!!errors.lastTiming}
              fullWidth
              margin="normal"
            />
             <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.lastTiming?.message}
            </div>
            </Grid>

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            
            <TextField
            label={
            <>
                Work Days <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
                type="text"
              {...register("workDays")}
              error={!!errors.workDays}
              fullWidth
              margin="normal"
            />
           
           <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.workDays?.message}
            </div>
            </Grid>
            
            </Grid>

            <Box className="submit" sx={{display:'flex',justifyContent:'flex-end',gap:'15px',margin:'20px'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button type="submit" className="primary_button">

{loading ? (
<>
<CircularProgress size={18} 
style={{ marginRight: 8, color: "#fff" }} />
      Updating
  </>
  ) : (
  "Update"
  )}

</Button>
</Box>
</form>

</>
)
}

export default EditScheduling;
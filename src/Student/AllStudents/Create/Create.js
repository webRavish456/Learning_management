import React, { useState } from "react"
import {
    TextField,
    // MenuItem,
    // Select,
    // FormControlLabel,
    // FormControl,
    // FormLabel,
    // InputLabel,
    // Radio,
    // RadioGroup,
    Grid,
    useMediaQuery,
    Button,
    Box,
    CircularProgress,
    // duration,
} from "@mui/material";

 import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({
    studentName: yup.string().required("Student Name is required"),
    gender: yup.string().required("Gender is required"),
    mobileNumber: yup.string().required("Mobile Number is required"),
    emailId: yup.string().required("Email Id is required"),
    dob: yup.string().required("DOB is required"),
    address: yup.string().required("Address is required"),
    enrollmentDate: yup.string().required("Enrollment Date is required"),
    course: yup.string().required("Course is required"),
    
  });

const CreateAllStudent = ({ handleCreate, handleClose }) =>  
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
    
    
        const onSubmit = (data) => {
        
            setLoading(true)
    
           const formdata = new FormData();
           formdata.append("studentName", data.studentName);
           formdata.append("gender", data.gender);
           formdata.append("mobileNumber", data.mobileNumber);
           formdata.append("emailId", data.emailId);
           formdata.append("dob", data.dob);
           formdata.append("address", data.address);
           formdata.append("enrollmentDate", data.enrollmentDate);
           formdata.append("course", data.course);
           formdata.append("status", data.status);
        
          
       
           const requestOptions = {
             method: "POST",
             body: formdata,
             headers: {
               Authorization: `Bearer ${token}`, 
              },
           };
       
           fetch(`${Base_url}/allstudents`, requestOptions)
             .then((response) => response.text())
       
             .then((result) => {
       
               const res = JSON.parse(result)
       
               if(res.status==="success")
               {
                 setLoading(false)
                
                 toast.success("Student List Created Successfully!")
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
    
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                label={
                <>
                    Student Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
               type="text"
                {...register("studentName")}
                error={!!errors.studentName}
                fullWidth
                margin="normal"
                />
    
                <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.studentName?.message}
                </div>
    
                </Grid>
    
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                label={
                <>
                    Gender <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                type="text"
                  {...register("gender")}
                  error={!!errors.gender}
                  fullWidth
                  margin="normal"
                />
    
    
    <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.gender?.message}
                </div>
              
                </Grid>
    
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                label={
                <>
                    Mobile Number <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                
                type="number"
                  {...register("mobileNumber")}
                  error={!!errors.mobileNumber}
                  fullWidth
                  margin="normal"
                />
                 <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.mobileNumber?.message}
                </div>
                </Grid>
    
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                label={
                <>
                    Email Id <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                type="text"
                  {...register("emailId")}
                  error={!!errors.emailId}
                  fullWidth
                  margin="normal"
                />
                 <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.emailId?.message}
                </div>
                </Grid>
    
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                // label={
                // <>
                //     DOB <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                // </>
                // }
                type="date"
                // InputLabelProps={{shrink: true}}
                
                  {...register("dob")}
                  error={!!errors.dob}
                  fullWidth
                  margin="normal"
                />
               
               <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.dob?.message}
                </div>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                label={
                <>
                    Address <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                type="text"
                  {...register("address")}
                  error={!!errors.address}
                  fullWidth
                  margin="normal"
                />
               
               <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.address?.message}
                </div>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                // label={
                // <>
                //     Enrollment Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                // </>
                // }
                type="date"
                  {...register("enrollmentDate")}
                  error={!!errors.enrollmentDate}
                  fullWidth
                  margin="normal"
                />
                 </Grid>

<Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                label={
                <>
                    Course <span style={{ course: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                type="text"
                  {...register("course")}
                  error={!!errors.course}
                  fullWidth
                  margin="normal"
                />
               
               <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.course?.message}
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
    
    export default CreateAllStudent;
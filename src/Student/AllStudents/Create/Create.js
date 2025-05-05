import React, { useEffect, useState } from "react"
import {
    TextField,
    Grid,
    useMediaQuery,
    Button,
    Box,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    // MenuItem,
    // Select,
    // FormControlLabel,
    // FormControl,
    // FormLabel,
    // InputLabel,
    // Radio,
    // RadioGroup,
    // // duration,
} from "@mui/material";

 import { set, useForm } from "react-hook-form";
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
    courseName: yup.string().required("Course is required"),
    
  });

const CreateAllStudent = ({ handleCreate, handleClose }) =>  
{
  const [courseName, setCourseName] = useState([]);
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const token = Cookies.get('token');
    
        const Base_url = process.env.REACT_APP_BASE_URL;
      
        const [loading, setLoading] = useState(false)

        const [loadingData, setLoadingData] = useState(true)
      
        const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
        } = useForm({
          resolver: yupResolver(schema),
        });
    
        useEffect(() => {

          const fetchCourseData = async () => {
            try{
              const response = await fetch(`${Base_url}/courselist`,{
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              const result = await response.json();
              if (result.status === "success"){
                console.log(result.data)

                setCourseName(result.data)
                setLoadingData(false)
              }
            }catch(error) {
              console.error("Error fetching course data:",error);
            }
          };
          if(loadingData)
          {
            fetchCourseData();
          }
        }, [loadingData]); 
    
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
           formdata.append("course", data.courseName);
          
       
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

                  <FormControl
                  fullWidth
                  margin="normal"
                  error={!!errors.courseName}
                  >
                   <InputLabel>
                   Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                   </InputLabel>
                      
                  <Select
                  label="Course Name"
                  defaultValue=""
                  {...register("courseName")}
                  >
                  
                    {courseName.map((course,index) => (
                      <MenuItem key={index} value={course.courseName}>
                      {course.courseName}
                      </MenuItem>
                    ))}
                  </Select >
                  <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.courseName?.message}
                </div>
                  </FormControl>
                 </Grid>
    
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
               
                          select
                          label={
                              <>
                             Gender<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                              </>
                          }
                            variant="outlined"
                              fullWidth
                              margin="normal"
                          {...register("gender")}

                     
                          error={!!errors.Status}
                          
                          SelectProps={{
                              MenuProps: {
                              PaperProps: {
                                  style: { maxHeight: 200 },
                              },
                              },
                          }}
                          > 
              <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="others">Others</MenuItem>

                          </TextField>
    
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.gender?.message}
                </div>
              
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
                <TextField
                
                label="DOB"
                type="date"
                 InputLabelProps={{shrink: true}}
               
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
                // variant="outline"
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
                label={
                <>
                    Address <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                multiline
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
                label={
                <>
                    Enrollment Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
                }
                // variant="outline"
                type="date"
                InputLabelProps={{ shrink: true }}
                  {...register("enrollmentDate")}
                  error={!!errors.enrollmentDate}
                  fullWidth
                  margin="normal"
                />
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

    // <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                
    //             <TextField
    //             label={
    //             <>
    //                 Course <span style={{ course: "rgba(240, 68, 56, 1)" }}>*</span>
    //             </>
    //             }
    //             // variant="outline"
    //             type="text"
    //               {...register("course")}
    //               error={!!errors.course}
    //               fullWidth
    //               margin="normal"
    //             />
               
    //            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
    //               {errors.course?.message}
    //             </div>
    //             </Grid>
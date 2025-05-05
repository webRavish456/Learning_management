import React, { useState, useEffect } from "react"
import {
    TextField,
    Grid,
    useMediaQuery,
    Button,
    Box,
    CircularProgress,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    // duration,
  } from "@mui/material";
      
  import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";


  const schema = yup.object().shape({
    studentName: yup.string().required("Student Name is required"),
    courseName: yup.string().required("Course Name is required"),
    duration: yup.string().required("Duration is required"),
    certificate: yup.mixed().required("Certificate is required"),
    status:  yup.string()
    
  });

  const EditCertificate = ({ handleUpdate, editData, handleClose }) => {

  const [courseName, setCourseName] = useState([]);

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
            studentName: editData.studentName || "",
            courseName: editData.courseName || "",
            duration: editData.duration || "",
            certificate: editData.certificates || "",
            status: editData.status || "",
          });
        }
      }, [editData, reset]);
  

  const onSubmit = (data) => {

    setLoading(true)

    const formdata = new FormData();
    formdata.append("studentName", data.studentName);
    formdata.append("courseName", data.courseName);
    formdata.append("duration", data.duration);
    formdata.append("certificate", data.certificate);
    formdata.append("status", data.status);


    const requestOptions = {
      method: "PATCH",
      body: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${Base_url}/certificates/${editData._id}`, requestOptions)
      .then((response) => response.text())

      .then((result) => {

        const res = JSON.parse(result)

        if (res.status === "success") {
          setLoading(false)

          toast.success("Certificate Updated Successfully!")
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
                {...register("courseName", { required: "Course name is required" })}
              >

                {courseName.map((course, index) => (
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
              label={
                <>
                  Duration <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }

              type="text"
              {...register("duration")}
              error={!!errors.duration}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.duration?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            
            <TextField InputLabelProps={{shrink:true}}
                    type="file"
                    label={
                      <>
                        Certificate <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                      </>
                    }
                    variant="outlined"
                
                    {...register("certificate")}
                    error={!!errors.certificate}
                    fullWidth
                    margin="normal"
                  />
                  <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                    {errors.certificate?.message}
                  </div>

                    <Typography variant="body2" sx={{ mt: 0 }}>
                    View existing certificate:&nbsp;
                  <NavLink
                    to={editData.certificates} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                   Certificate
                  </NavLink>
                </Typography>
             
            </Grid>

            <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
   
                select
                label={
                  <>
                      Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                  </>
                  }
                  variant="outlined"
                    {...register("status")}
                    error={!!errors.status}
                    fullWidth
                    margin="normal"
                    defaultValue={editData.status}
                    SelectProps={{
                        MenuProps: {
                        PaperProps: {
                            style: { maxHeight: 200 },
                        },
                        },
                }}
                > 
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">InActive</MenuItem>


           </TextField>

        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
          {errors.status?.message}
        </div>
         
            </Grid>


        </Grid>
        </Grid>

        <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px' }}>
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

export default EditCertificate;
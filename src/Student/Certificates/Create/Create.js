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
  // duration,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


const schema = yup.object().shape({
  studentName: yup.string().required("Student Name is required"),
  courseName: yup.string().required("Course Name is required"),
  duration: yup.string().required("Duration is required"),
  certificate: yup.mixed().required("Certificate is required"),


});

const CreateCertificate = ({ handleCreate, handleClose }) => {
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
      try {
        const response = await fetch(`${Base_url}/courselist`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.status === "success") {
          console.log(result.data)

          setCourseName(result.data)
          setLoadingData(false)
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    if (loadingData) {
      fetchCourseData();
    }
  }, [loadingData]); 


  const onSubmit = (data) => {

    setLoading(true)

    const formdata = new FormData();
    formdata.append("studentName", data.studentName);
    formdata.append("courseName", data.courseName);
    formdata.append("duration", data.duration);
    formdata.append("certificates", data.certificate[0]);


    const requestOptions = {
      method: "POST",
      body: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${Base_url}/certificates`, requestOptions)
      .then((response) => response.text())

      .then((result) => {

        const res = JSON.parse(result)

        if (res.status === "success") {
          setLoading(false)

          toast.success("Certificate Created Successfully!")
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

          <TextField
            label="Certificate"
            name="certificate"
            type="file"
            InputLabelProps={{ shrink: true }}
            inputProps={{ accept: "application/pdf" }} 
            {...register("certificate")}
            error={!!errors.certificate}
            fullWidth
            margin="normal"
          />
          <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
            {errors.certificate?.message}
          </div>

          </Grid>

         
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px 0px' }}>
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

export default CreateCertificate;
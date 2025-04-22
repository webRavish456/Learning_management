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
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


const schema = yup.object().shape({
  courseName: yup.string().required("Course Name is required"),
  teacherName: yup.string().required("Teacher Name is required"),
  startTiming: yup.string().required("Start Timing is required"),
  lastTiming: yup.string().required("Last Timing is required"),
  workDays: yup.string().required("Work Days is required"),
  status: yup.string()
});

const CreateScheduling = ({ handleCreate, handleClose }) => {
  const [courseName, setCourseName] = useState([]);  
  const [teacherName, setTeacherName] = useState([]);
  const isSmScreen = useMediaQuery("(max-width:768px)");


  const token = Cookies.get('token');

  const Base_url = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(true)

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
          setLoading(false)  //change
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(`${Base_url}/teacher`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.status === "success") {
          console.log(result.data)

          setTeacherName(result.data)
          setLoading(false)  //change
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    if (loading) {
      fetchCourseData();
      fetchTeacherData();
    }
  }, [loading]); //dropdown


  const onSubmit = (data) => {

    setLoading(true)

    const formdata = new FormData();
    formdata.append("courseName", data.courseName);
    formdata.append("teacherName", data.teacherName);
    formdata.append("startTiming", data.startTiming);
    formdata.append("lastTiming", data.lastTiming);
    formdata.append("workDays", data.workDays);
    formdata.append("status", data.status);



    const requestOptions = {
      method: "POST",
      body: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${Base_url}/timetable`, requestOptions)
      .then((response) => response.text())

      .then((result) => {

        const res = JSON.parse(result)

        if (res.status === "success") {
          setLoading(false)

          toast.success("Scheduling Created Successfully!")
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
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.teacherName}
            >
              <InputLabel>
                Teacher Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
              </InputLabel>

              <Select
                label="Teacher Name"
                defaultValue=""
                {...register("TeacherName", { required: "Teacher name is required" })}
              >

                {teacherName.map((teacher, index) => (
                  <MenuItem key={index} value={teacher.teacherName}>
                    {teacher.teacherName}
                  </MenuItem>
                ))}
              </Select >
              <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                {errors.teacherName?.message}
              </div>
            </FormControl>
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
                  Last Timing  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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

          <Grid item xs={12} >

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

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px' }}>
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

export default CreateScheduling;
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
import moment from 'moment'; 

const schema = yup.object().shape({
  courseName: yup.string().required("Course Name is required"),
  teacherName: yup.string().required("Teacher Name is required"),
  startTiming: yup
    .string()
    .required("Start Timing is required")
    .test('startBeforeEnd', 'Start time must be earlier than end time', function (value) {
      const { lastTiming } = this.parent;
      if (value && lastTiming) {
        return value < lastTiming;
      }
      return true; 
    }),
  lastTiming: yup
    .string()
    .required("Last Timing is required")
    .test('endAfterStart', 'End time must be later than start time', function (value) {
      const { startTiming } = this.parent;
      if (value && startTiming) {
        return value > startTiming;
      }
      return true;
    }),
  workDays: yup.string().required("Work Days is required"),
  status: yup.string()
});

const CreateScheduling = ({ handleCreate, handleClose }) => {
  const [courseName, setCourseName] = useState([]);
  const [teacherName, setTeacherName] = useState([]);
  const isSmScreen = useMediaQuery("(max-width:768px)");

  const token = Cookies.get('token');
  const Base_url = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
 

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
          setCourseName(result.data);
          setLoadingData(false);
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
          setTeacherName(result.data);
          setLoadingData(false);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    if (loadingData) {
      fetchCourseData();
      fetchTeacherData();
    }
  }, [loadingData]);

  const onSubmit = (data) => {
    setLoading(true);

    let startTime = moment(data.startTiming, ["HH:mm", "hh:mm A"]).format("hh:mm A");
    let lastTime = moment(data.lastTiming, ["HH:mm", "hh:mm A"]).format("hh:mm A");

    const formdata = new FormData();
    formdata.append("courseName", data.courseName);
    formdata.append("teacherName", data.teacherName);
    formdata.append("startTiming", startTime);
    formdata.append("lastTiming", lastTime);
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
        const res = JSON.parse(result);
        if (res.status === "success") {
          setLoading(false);
          toast.success("Scheduling Created Successfully!");
          handleCreate(true);
          handleClose();
          reset();
        } else {
          setLoading(false);
          toast.error(res.message);
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
              select
              label={
                <>
                  Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("courseName")}
              error={!!errors.courseName}
              fullWidth
              margin="normal"
            >
              {courseName.map((course, index) => (
                <MenuItem key={index} value={course.courseName}>
                  {course.courseName}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.courseName?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              select
              label={
                <>
                  Teacher Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("teacherName")}
              error={!!errors.teacherName}
              fullWidth
              margin="normal"
            >
              {teacherName.map((teacher, index) => (
                <MenuItem key={index} value={teacher.teacherName}>
                  {teacher.teacherName}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.teacherName?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              InputLabelProps={{ shrink: true }}
              label={
                <>
                  Starting Timing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              type="time"
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
              InputLabelProps={{ shrink: true }}
              label={
                <>
                  Last Timing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              type="time"
              {...register("lastTiming")}
              error={!!errors.lastTiming}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.lastTiming?.message}
            </div>
          </Grid>

          <Grid item xs={12}>
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
          <Button onClick={handleClose} className="secondary_button">Cancel</Button>
          <Button type="submit" className="primary_button">
            {loading ? (
              <>
                <CircularProgress size={18} style={{ marginRight: 8, color: "#fff" }} />
                Submitting
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateScheduling;
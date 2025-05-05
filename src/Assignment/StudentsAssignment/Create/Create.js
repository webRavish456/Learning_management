import React, {useEffect, useState} from "react"
import {
    TextField,
    Grid,
    Button,
    Box,
    CircularProgress,
    useMediaQuery,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({

    assignmentTitle: yup.string().required("Assignment Title is required"),
    course: yup.string().required("Course is required"),
    teacher: yup.string().required("Teacher is required"),
    dueDate: yup.string().required("Due Date is required"),
    mobileNumber: yup.string().required("Mobile No is required"),
    studentName: yup.string().required("Student Name is required"),
    status: yup.string().required("Status is required")

  });

const CreateStudentsAssignment =({handleCreate, handleClose})=>
{
  const isSmScreen = useMediaQuery("(max-width:768px)");

    const token = Cookies.get('token');

    const Base_url = process.env.REACT_APP_BASE_URL;
  
    const [loading, setLoading] = useState(false)

    const [teacherName, setTeacherName] = useState([]);
    const [courseName, setCourseName] = useState([]);
    const [assignment, setAssignment] = useState([]);

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

      const fetchAssignmentData = async () => {
        try {
          const response = await fetch(`${Base_url}/allAssignment`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const result = await response.json();
          if (result.status === "success") {
            setAssignment(result.data);
            setLoadingData(false);
          }
        } catch (error) {
          console.error("Error fetching course data:", error);
        }
      };

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
        fetchAssignmentData()
        fetchCourseData();
        fetchTeacherData();
      }
    }, [loadingData]);
  
  
    const onSubmit = (data) => {
    
           setLoading(true)
  
          const formdata = new FormData();

          formdata.append("studentName", data.studentName);
          formdata.append("assignmentTitle", data.assignmentTitle);
          formdata.append("course", data.course);
          formdata.append("teacher", data.teacher);
          formdata.append("dueDate", data.dueDate); 
          formdata.append("mobileNumber", data.mobileNumber);
          formdata.append("status", data.status);

          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/studentsAssignment`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("StudentsAssignment Created Successfully!")
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

        <Grid item xs={12}  sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              type="text"
              label={
                <>
                Student Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
            
              {...register("studentName")}
              error={!!errors.studentName}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.studentName?.message}
            </div>
          </Grid>

          <Grid item xs={12}  sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              type="text"
              label={
                <>
                 Mobile Number<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              //variant="standard"
              {...register("mobileNumber")}
              error={!!errors.mobileNumber}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.mobileNumber?.message}
            </div>
          </Grid>

          <Grid item xs={12}  sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              select
              label={
                <>
                 Assignment Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
             // variant="standard"
              {...register("assignmentTitle")}
              error={!!errors.assignmentTitle}
              fullWidth
              margin="normal"
            >
                 {assignment.map((title, index) => (
                <MenuItem key={index} value={title.assignmentTitle}>
                  {title.assignmentTitle}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.assignmentTitle?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            <FormControl
            fullWidth
            margin="normal"
            //variant="standard"
            error={!!errors.course}
            >
           <InputLabel>
           Course Name<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
           </InputLabel>

           <Select
           label="Course Name"
           {...register("course")}
           >
            {courseName.map((course,index) => (
              <MenuItem key={index} value={course.courseName}>
            {course.courseName}
              </MenuItem>
            ))}
            
           </Select>
           
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.course?.message}
            </div>
            </FormControl>
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
              {...register("teacher")}
              error={!!errors.teacher}
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
              {errors.teacher?.message}
            </div>
          </Grid>

          <Grid item xs={12}  sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              type="date"
              InputLabelProps={{shrink : true}}
              label={
                <>
                 Due Date<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              //variant="standard"
              {...register("dueDate")}
              error={!!errors.dueDate}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.dueDate?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
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
                  >
                  <MenuItem value ="Completed">Completed</MenuItem>
                  <MenuItem value ="Not Completed">Not Completed</MenuItem>
                
                  </TextField>
                  <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.status?.message}
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

export default CreateStudentsAssignment;
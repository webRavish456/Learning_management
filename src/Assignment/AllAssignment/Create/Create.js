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
    Select,
    MenuItem
  } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


  const schema = yup.object().shape({
    assignmentTitle: yup.string().required("Assignment Title Name is required"),
    course: yup.string().required("Course is required"),
    teacher: yup.string().required("Teacher Name is required"),
    dueDate: yup.string().required("Due Date is required"),
  });

const CreateAllAssignment =({handleCreate, handleClose})=>
{
  
  const [courseName, setCourseName] = useState([]);
  const isSmScreen = useMediaQuery("(max-width:768px)");

  const [teacherName, setTeacherName] = useState([]);

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
    
           setLoading(true)
  
          const formdata = new FormData();
          formdata.append("assignmentTitle", data.assignmentTitle);
          formdata.append("course", data.course);
          formdata.append("teacher", data.teacher);
          formdata.append("dueDate", data.dueDate);

          
          const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`, 
             },
          };
      
          fetch(`${Base_url}/allAssignment`, requestOptions)
            .then((response) => response.text())
      
            .then((result) => {
      
              const res = JSON.parse(result)
      
              if(res.status==="success")
              {
                setLoading(false)
               
                toast.success("Assignment Created Successfully!")
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
              type="text"
              label={
                <>
                  Assignment Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              //variant="standard"
              {...register("assignmentTitle")}
              error={!!errors.assignmentTitle}
              fullWidth
              margin="normal"
            />
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


          <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
            <TextField
              type="date"
              InputLabelProps={{shrink : true}}
              label={
                <>
                 Due Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
             
              {...register("dueDate")}
              error={!!errors.dueDate}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.dueDate?.message}
            </div>
          </Grid>
         
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
          <Button type="submit" onClick={handleClose} className="secondary_button">
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

export default CreateAllAssignment;
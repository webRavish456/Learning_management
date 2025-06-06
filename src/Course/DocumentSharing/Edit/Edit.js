
import React, { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  useMediaQuery,
  Box,
  Button,
  CircularProgress,
  duration,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
 
  topic: yup.string().required("Topic is required"),
  topicDescription: yup.string().required("Topic Description is required"),
  course: yup.string().required("Course is required"),
  teacher: yup.string().required("Teacher is required"),
  document: yup.mixed()
});

const EditDocumentSharing = ({ handleUpdate,  editData,  handleClose }) => {


  const [courseName, setCourseName] = useState([]);
  const [teacherName, setTeacherName]=useState([]);

  const token = Cookies.get('token');

  const Base_url = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false)

  const [loadingdata, setLoadingdata] = useState(true)

  const isSmScreen = useMediaQuery("(max-width:768px)");

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
        topic: editData.topic|| "",
        topicDescription: editData.topicDescription || "",
        course:editData.course || "",
        teacher: editData.teacher || "",
        document: editData.document || "",
       
      });
    }
  }, [editData, reset]);

  console.log(document)

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

                setCourseName(result.data);
               
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

                setTeacherName(result.data);
                setLoadingdata(false)
            }
        } catch (error) {
            console.error("Error fetching teacher data:", error);
        }
    };
    if (loadingdata) {
        fetchCourseData();
        fetchTeacherData();
    }
}, [loadingdata]);



  const onSubmit = (data) => {
  
         setLoading(true)

        const formdata = new FormData();
    
        formdata.append("topic", data.topic);
        formdata.append("topicDescription", data.topicDescription);
        formdata.append("course", data.course);
        formdata.append("teacher", data.teacher);
        if (Array.isArray(data.document) || data.document instanceof FileList)
        {
          formdata.append("document", data.document[0]);
        }
       

        const requestOptions = {
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/documentsharing/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("Document Updated Successfully!")
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

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="text"
              label={
                <>
              Topic <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("topic")}
              error={!!errors.topic}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.topic?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              type="text"
              label={
                <>
                  Topic Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("topicDescription")}
              error={!!errors.topicDescription}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.topicDescription?.message}
            </div>
          </Grid>

          <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <FormControl
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.course}
                        >
                            <InputLabel>
                                Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </InputLabel>

                            <Select
                                label="Course Name"
                                defaultValue={editData.course}
                                {...register("course")}
                            >
                                {courseName.map((course, index) => (
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

          <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth margin="normal"
          variant="outlined"
          error={!!errors.teacherName}>
                        <InputLabel>Teacher <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                        <Select
                        label="Teacher"
                        defaultValue={editData.teacher}
                        {
                          ...register("teacher")
                        }>

                        {teacherName.map((teacher, index) =>(
                          <MenuItem key={index} value={teacher.teacherName}>
                            {teacher.teacherName}
                          </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.teacherName?.message}
            </div>
          </Grid>   
        
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              type="file"
              InputLabelProps={{shrink:true}}
              label="document"
              variant="outlined"
              {...register("document")}
              error={!!errors.document}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.document?.message}
            </div>


            <Typography variant="body2" sx={{ mt: 0 }}>
                    View existing document:&nbsp;
                  <NavLink
                    to={editData.document} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Document
                  </NavLink>
                  </Typography>

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
  );
};

export default EditDocumentSharing;

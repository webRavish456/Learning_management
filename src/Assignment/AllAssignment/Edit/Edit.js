import React, { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  useMediaQuery,
  Box,
  Button,
  CircularProgress,
  MenuItem,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
  assignmentTitle: yup.string().required("assignmentTitle Name is required"),
  course: yup.string().required("course Location is required"),
  teacher: yup.string().required("teacher Name is required"),
  dueDate: yup.string().required("dueDate Location is required"),
  status: yup.string()
});

const EditAllAssignment = ({ handleUpdate,  editData,  handleClose }) => {

const isSmScreen = useMediaQuery("(max-width:768px)");
  const token = Cookies.get('token');

  const Base_url = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false)

  const [loadingData, setLoadingData] = useState(true)

  const [teacherName, setTeacherName] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {


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

      fetchTeacherData();
    }
  }, [loadingData]);

  useEffect(() => {
    if (editData) {
      reset({
        assignmentTitle: editData.assignmentTitle || "",
        course: editData.course || "",
        teacher: editData.teacher || "",
        dueDate: editData.dueDate ? new Date(editData.dueDate).toISOString().split("T")[0] : "",
        status: editData.status || "",
      });
    }
  }, [editData, reset]);


  const onSubmit = (data) => {
  
         setLoading(true)

        const formdata = new FormData();
        formdata.append("assignmentTitle", data.assignmentTitle);
        formdata.append("course", data.course);
        formdata.append("teacher", data.teacher);
        formdata.append("dueDate", data.dueDate);
        formdata.append("status", data.status);
    
        const requestOptions = {
          method: "PATCH",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`, 
           },
        };
    
        fetch(`${Base_url}/allAssignment/${editData._id}`, requestOptions)
          .then((response) => response.text())
    
          .then((result) => {
    
            const res = JSON.parse(result)
    
            if(res.status==="success")
            {
              setLoading(false)
             
              toast.success("Assignment Updated Successfully!")
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
              type="text"
              label={
                <>
                  Assignment Title <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
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
            <TextField
              type="text"
              label={
                <>
                  Course <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                </>
              }
              variant="outlined"
              {...register("course")}
              error={!!errors.course}
              fullWidth
              margin="normal"
            />
            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.course?.message}
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
              defaultValue={editData.teacher}
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
               variant="outlined"
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
                  defaultValue={editData.status}
                  variant="outlined"
                  {...register("status")}
                  error={!!errors.status}
                  fullWidth
                  margin="normal"
                  >
                  <MenuItem value ="Active">Active</MenuItem>
                  <MenuItem value ="Inactive">Inactive</MenuItem>
                
                  </TextField>
                  <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                  {errors.status?.message}
                  </div>

          </Grid>
    
        
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
          <Button type="submit" onClick={handleClose} className="secondary_button">
            Cancel
          </Button>
          <Button type="submit" className="primary_button">

          {loading ? ( <>
          <CircularProgress
           size={18}
           style={{ marginRight: 8, color: "#fff" }}
          /> 
            Updating
          </> 
          )   : "Update"}
            
         
          </Button>
        </Box>
      </form>
    </>
  );
};

export default EditAllAssignment;

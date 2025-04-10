import React, {useState} from "react"
import {  TextField,Grid, useMediaQuery, Button, Box, } from "@mui/material";

const CreateAllAssignment =({handleSubmit, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        assignment: "",
        description: "",
        course: "",
        faculty: "",  
        duedate: "",
        status: "",
     });

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

     return (
        <>
             <Grid container columnSpacing={2}>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
            Assignment Title<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="assignmenttitle"
            value={formData.examName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>

            <TextField
            label={
            <>
                Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="description"
            value={formData.courseName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Course<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="course"
            value={formData.facultyName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                        Faculty: <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="faculty"
            value={formData.examDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
            <TextField
            label={
            <>
                Due Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="duedate"
            value={formData.duration}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            </Grid>

            <Box className="submit">
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleSubmit} className="primary_button">
             Submit
            </Button>
            </Box>

        </>
     )
}

export default CreateAllAssignment;
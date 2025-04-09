import React, {useState} from "react"
import {
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid,
    useMediaQuery,
    Button,
    Box,
    duration,
  } from "@mui/material";

const CreateTimeTable =({handleSubmit, handleClose})=>  //CreateExam
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        courseName: "",
        teacherName: "",
        startingTiming: "",
        endingTiming: "",  
        workDays: "",
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
                Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="courseName"
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
                Teacher Name  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />

            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Starting Timing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="startingTiming"
            value={formData.startingTiming}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Ending Timing  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="endingTiming"
            value={formData.endingTiming}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Work Days <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="workDays"
            value={formData.workDays}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
           

            </Grid>
            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
                Address  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>
           

            </Grid>

            <Box className="submit" sx={{display:'flex',justifyContent:'flex-end',gap:'15px',margin:'20px'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleSubmit} className="primary_button">
             Submit
            </Button>
            </Box>

        </>
     )
}

export default CreateTimeTable;//CreateExam
import React, {useState} from "react"
import {
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid,
    useMediaQuery,
    Box,
    Button,
    duration,
  } from "@mui/material";

const EditExam =({handleUpdate, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        email: "",
        courseName: "",
        facultyName: "",
        mobile: "",  
        joiningdate: "",
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
               Email<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="email"
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
                Course Name  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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
                Faculty Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="facultyname"
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
               Mobile <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="mobile"
            value={formData.examDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <TextField
            label={
            <>
             Joining Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="joiningdate"
            value={formData.duration}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <FormControl fullWidth margin="normal">
            <InputLabel>Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
            <Select name="Status" value={formData.status} onChange={handleChange}>
            <MenuItem value="active">Scheduled</MenuItem>
            <MenuItem value="inactive">Completed</MenuItem>
            <MenuItem value="upcoming">Cancelled</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            </Grid>

            <Box className="submit">
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleUpdate} className="primary_button">
             Update
            </Button>
            </Box>

        </>
     )
}

export default EditExam;
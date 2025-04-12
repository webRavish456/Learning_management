import React, {useState} from "react"
import {TextField,MenuItem,Select,FormControl,InputLabel,Grid,useMediaQuery,Box,Button,} from "@mui/material";

const EditAllAssignment =({handleUpdate, handleClose})=>
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
               Assignment<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="assignment"
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
                Description  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
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
            <FormControl fullWidth margin="normal">
                                    <InputLabel>Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                                    <Select name="courseName" value={formData.courseName} onChange={handleChange}>
                                    <MenuItem value="BCA">BCA</MenuItem>
                                    <MenuItem value="MCA">MCA</MenuItem>
                                    <MenuItem value="MBA">BBA</MenuItem>
                                    </Select>
                                    </FormControl>
            
                        </Grid>
            
                        <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
                        <FormControl fullWidth margin="normal">
                                    <InputLabel>Teacher Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                                    <Select name="teacherName" value={formData.teacherName} onChange={handleChange}>
                                    <MenuItem value="BCA">Ravish Kumar</MenuItem>
                                    <MenuItem value="MCA">Sanjoy</MenuItem>
                                    <MenuItem value="MBA">Nikhil</MenuItem>
                                    </Select>
                                    </FormControl>
            </Grid>

            <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
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

            <Box className="submit" sx={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleUpdate} className="primary_button">
             Update
            </Button>
            </Box>

        </>
     )
}

export default EditAllAssignment;
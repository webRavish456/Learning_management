import React, { useState } from "react"
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
  } from "@mui/material";

const CreateStudentsAssignment = ({ handleSubmit, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        student_name: "",
        assignment_title: "",
        course_name: "",
        teacher_name: "",
        due_date: "",
        status: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Grid container columnSpacing={2}>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

                    <TextField
                        label={
                            <>
                                Student Name:<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="student_name"
                        value={formData.student_name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

                    <TextField
                        label={
                            <>
                                Assignment Title: <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="assignment"
                        value={formData.assignment_title}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        label={
                            <>
                                Due Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="due-date"
                        value={formData.due_date}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

            </Grid>

            <Box className="submit" sx={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2}}>
                <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                <Button onClick={handleSubmit} className="primary_button">
                    Submit
                </Button>
            </Box>

        </>
    )
}

export default CreateStudentsAssignment;
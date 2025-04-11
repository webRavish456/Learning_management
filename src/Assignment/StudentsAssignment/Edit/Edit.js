import React, { useState } from "react"
import { TextField, MenuItem, Select, FormControl, InputLabel, Grid, useMediaQuery, Box, Button, } from "@mui/material";

const EditStudentsAssignment = ({ handleUpdate, handleClose }) => {
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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Course <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="course"
                        value={formData.examDate}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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

export default EditStudentsAssignment;
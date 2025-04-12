import React, { useState } from "react"
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
} from "@mui/material";

const EditCourseList = ({ handleSubmit, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        courseName: "",
        courseDescription: "",
        duration: "",
        pricing: "",
        syllabus: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
                    <Grid container columnSpacing={2}>
                         
        
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
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                label={
                                    <>
                                        Course Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                    </>
                                }
                                name="courseDescription"
                                value={formData.courseDescription}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Duration <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                                <Select name="duration" value={formData.duration} onChange={handleChange}>
                                    <MenuItem value="BCA">3 years</MenuItem>
                                    <MenuItem value="MCA">2 years</MenuItem>
                                    <MenuItem value="MBA">2 years</MenuItem>
                                </Select>
                            </FormControl>
        
                        </Grid>
        
                        <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                            <TextField
                                label={
                                    <>
                                        Pricing  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                    </>
                                }
                                name="pricing"
                                value={formData.pricing}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
        
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                label={
                                    <>
                                        Syllabus <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                    </>
                                }
                                name="syllabus"
                                type="file"
                                InputLabelProps={{shrink:true}}
                                value={formData.syllabus}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
        
                    </Grid>
        
                    <Box className="submit" sx={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2 }}>
                        <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                        <Button onClick={handleSubmit} className="primary_button">
                            Submit
                        </Button>
                    </Box>
        
                </>
            )
        }
        

export default EditCourseList;
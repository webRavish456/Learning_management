import React, { useState } from "react";
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

const CreateStudentResult = ({ handleSubmit, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        studentName: "",
        courseName: "",
        marksObtained: "",
        totalMarks: "",
        passingMarks: "",
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
                                Student Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
               
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>
                            Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                        </InputLabel>
                        <Select
                            name="courseName"
                            value={formData.courseName}
                            onChange={handleChange}
                        >
                            <MenuItem value="BCA">BCA</MenuItem>
                            <MenuItem value="MCA">MCA</MenuItem>
                            <MenuItem value="BBA">BBA</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Marks Obtained
                                <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="marksObtained"
                        value={formData.marksObtained}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"                       
                    />
                </Grid>
                
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Total Marks
                                <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="totalMarks"
                        value={formData.totalMarks}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"                        
                    />
                </Grid>
              
                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Passing Marks
                                <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="passingMarks"
                        value={formData.passingMarks}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"                       
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>
                            Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                        </InputLabel>
                        <Select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <MenuItem value="Passed">Passed</MenuItem>
                            <MenuItem value="Failed">Failed</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: "16px" }}
                    >
                        Download Sheet
                    </Button>
                </Grid>
            </Grid>
           
            <Box
                className="submit"
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "flex-end",
                    marginTop: 2,
                }}
            >
                <Button
                    onClick={handleClose}
                    className="secondary_button"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    className="primary_button"
                >
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default CreateStudentResult;

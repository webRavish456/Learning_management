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

const CreateResult = ({ handleSubmit, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        examName: "",
        courseName: "",
        teacherName: "",
        testType: "",
        resultDate: "",
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
                                Exam Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="examName"
                        value={formData.examName}
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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Teacher Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                        <Select name="teacherName" value={formData.teacherName} onChange={handleChange}>
                            <MenuItem value="BCA">Ravish Kumar</MenuItem>
                            <MenuItem value="MCA">Sanjoy</MenuItem>
                            <MenuItem value="MBA">Nikhil</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Test Type  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="testType"
                        value={formData.testType}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        label={
                            <>
                                Result Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="resultDate"
                        value={formData.resultDate}
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

export default CreateResult;
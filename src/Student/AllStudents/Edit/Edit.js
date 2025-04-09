import React, { useState } from "react"
import {
    TextField,
    // MenuItem,
    // Select,
    FormControl,
    FormControlLabel,
    Radio,
    // FormGroup,
    FormLabel,
    RadioGroup,
    // InputLabel,
    Grid,
    useMediaQuery,
    Box,
    Button,
    // duration,
} from "@mui/material";

const EditAllStudents = ({ handleUpdate, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        studentName: "",
        courseName: "",
        mobileNumber: "",
        emailId: "",
        enrollmentDate: "",
        address: "",
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
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Mobile Number <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="mobileNumber"
                        type="number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Email Id  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        // label={
                        // <>
                        //     Dob <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                        // </>
                        // }
                        label="Date Of Birth"
                        name="dob"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>


                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        // label={
                        // <>
                        //     Enrollment Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                        // </>
                        // }
                        label="Enrollment Date"
                        name="enrollmentDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.enrollmentDate}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

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



                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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

            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px', padding: '20px 20px' }}>
                <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                <Button onClick={handleUpdate} className="primary_button">
                    Update
                </Button>
            </Box>

        </>
    )
}

export default EditAllStudents;
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
    duration,
    // Typography,
} from "@mui/material";
import Certificates from "../Certificates";

const CreateCertificate = ({ handleSubmit, handleClose ,handleFileChange}) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
         studentName: "",
        courseName: "",
        duration: "",
        certificate: "",
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
                                Duration <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        // label={
                        //     <>
                        //         Certificate  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                        //     </>
                        // }
                        label={
                            <>
                            Certificate
                            </>
                        }
                        />
                        <input
                        type="file"
                        name="certificateFile"
                        onChange={handleFileChange}  // Handle file change event
                        accept="application/pdf,image/*"  // You can restrict to certain file types (e.g., pdf, images)
                        style={{ padding: '10px' }}
                    
                    />
                </Grid> */}
                {/* <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
    <TextField
        label={
            <>
                Certificate  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
        }
        name="certificate"
        value={formData.certificate}
        onChange={handleChange}
        fullWidth
        margin="normal"
    />
</Grid> */}
<Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
    <TextField
// label={
//             <>
//                 Certificate  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
//             </>
//         }
        label="Certificate"
        type="file"
        InputLabelProps={{ shrink: true }}
        name="certificateFile"
        onChange={handleFileChange}  // Handle file change event
        accept="application/pdf,image/*"  // You can restrict to certain file types (e.g., pdf, images)
        style={{ padding: '10px' }}
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

export default CreateCertificate;
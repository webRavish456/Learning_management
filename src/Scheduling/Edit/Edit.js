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
    duration,
} from "@mui/material";

const EditScheduling = ({ handleUpdate, handleClose }) => {
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
                                Starting Timing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="startingTiming"
                        // type="time"
                        value={formData.startingTiming}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                        label={
                            <>
                                Ending Timing <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                        }
                        name="endingTiming"
                        // type="time"
                        value={formData.endingTiming}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
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

                <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
                        <Select name="Status" value={formData.status} onChange={handleChange}>
                            <MenuItem value="active">Scheduled</MenuItem>
                            <MenuItem value="inactive">Reschedule</MenuItem>
                            <MenuItem value="upcoming">Cancelled</MenuItem>
                        </Select>
                    </FormControl>
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

export default EditScheduling;
import React, {useState} from "react"
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
  } from "@mui/material";

const CreateExam =({handleSubmit, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
        courseName: "",
        description: "",
        duration: "",
        payment_Fee:"",
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
                Description <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />

            <Grid item xs={12} sm={12} md={12}>
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
            </Grid>

<Grid item xs={12} sm={isSmScreen?12:6} md={6}>
<TextField
label={
<>
    Payment Fee  <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
</>
}
name="payment_Fee"
value={formData.payment_Fee}
onChange={handleChange}
fullWidth
margin="normal"
/>
</Grid>

            </Grid>

            <Box className="submit">
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleSubmit} className="primary_button">
             Submit
            </Button>
            </Box>

        </>
     )
}

export default CreateExam;
import React, {useState} from "react"
import {TextField,MenuItem,Select,FormControl,InputLabel,Grid,useMediaQuery,Box,Button,} from "@mui/material";

const CreateBranch =({handleUpdate, handleClose})=>
{
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const [formData, setFormData] = useState({
       sino:'',
        branchname:'',
        location:'',
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
                Branch Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="branchname"
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
                Location <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
            </>
            }
            name="location"
            value={formData.facultyName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Grid>

           

            

            {/* <Grid item xs={12} sm={isSmScreen?12:6} md={6}>
            <FormControl fullWidth margin="normal">
            <InputLabel>Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span></InputLabel>
            <Select name="Status" value={formData.status} onChange={handleChange}>
            <MenuItem value="active">Scheduled</MenuItem>
            <MenuItem value="inactive">Completed</MenuItem>
            <MenuItem value="upcoming">Cancelled</MenuItem>
            </Select>
            </FormControl>
            </Grid> */}
            </Grid>

            <Box className="submit" sx={{ display: "flex", gap: 1, justifyContent: "flex-end", marginTop: 2}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleUpdate} className="primary_button" > Update</Button>
            </Box>

        </>
     )
}

export default CreateBranch;
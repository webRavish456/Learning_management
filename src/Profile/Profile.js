import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Radio,
 RadioGroup,
 FormControlLabel,
} from "@mui/material";
import {
  
  Cake,
  LocationOn,
  Person,
  Phone,
} from "@mui/icons-material";

const Profile = () => {
  const [ setTab] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const handleClose = () => {
    setEditMode(false);     
  };
  const [formData, setFormData] = useState({});
  
  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  };

  return (
    <Box p={3}>
      {/* <Typography variant="h6" fontWeight={600} mb={2}>
         My Profile
       </Typography> */}

      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Profile Header */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} display="flex" alignItems="center" >
            <Avatar sx={{ width: 74, height: 74, mr: 2 }}>SC</Avatar>
            <Box>
              <Typography variant="h6">Super Admin</Typography>
              <Button variant="contained" className="primary_button" size="small" sx={{ mt: 1 }}>
                Active
              </Button>
              {/* <Typography color="text.secondary">superadmin@gmail.com</Typography> */}
              {/* <Typography color="primary">superAdmin</Typography> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <Box display="flex" alignItems="center" padding="5px 5px 5px 5px">
                  <Phone sx={{ mr: 1 }} />
                  <Typography>
                    <strong>Contact:</strong> 9876543211
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={8} sm={4}>
                <Box display="flex" alignItems="center" padding="5px 5px 5px 5px">
                  <LocationOn sx={{ mr: 1 }} />
                  <Typography>
                    <strong>Address:</strong> Ujjain
                  </Typography>
                  
                </Box>
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <Cake sx={{ mr: 1 }} />
                  <Typography>
                    <strong>Date of birth:</strong> 31-10-1979
                  </Typography>
                </Box>
              </Grid> */}
            </Grid> 


            <Grid container spacing={2}>

            <Grid item xs={12} sm={8} md={6}>
                <Box display="flex" alignItems="center" padding="5px 5px 5px 5px">
                  <Cake sx={{ mr: 1 }} />
                  <Typography>
                    <strong>Date of birth:</strong> 31-10-1979
                  </Typography>
                </Box>
              </Grid> 
                
              <Grid item xs={12} sm={8} md={6}>
                <Box display="flex" alignItems="center" padding="5px 5px 5px 5px">
                  <Person sx={{ mr: 1 }} />
                  <Typography>
                    <strong>Role Type:</strong> SuperAdmin
                  </Typography>
                </Box>
              </Grid> 


                  
            </Grid> 
         
          </Grid>
        </Grid>

        
</Box >
        
     <Box p={3} sx={{backgroundColor:"white", marginTop:"15px"}}>
          <Box mt={2}>
          <Box display="flex" justifyContent="flex-end" mb={6}  gap={2} mt={2}>
              <Typography variant="h6" justifyContent="flex-start">Personal Details</Typography>
              <Button variant="contained" className="primary_button" onClick={() => setEditMode(!editMode)}>
                {editMode ? 'Save' : 'Edit'}
              </Button>
              <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
        </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Full Name" value="Super" />
              </Grid>
              <Grid item xs={12}>
           <RadioGroup
            row
            name="gender"
           // value={formData.gender}
            
          >
            <FormControlLabel
              value="Male"
              control={<Radio/>}
              label="Male"
            />
            <FormControlLabel
              value="Female"
              control={<Radio/>}
              label="Female"
            />
          </RadioGroup>
        </Grid>

              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Email" value="superadmin@gmail.com" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Contact Number" value="87976756" />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Address" value="Sakchi" />
              </Grid>
             
            </Grid>
           
          </Box>
        

       

    
      </Box>
    </Box>
  );
};

export default Profile;
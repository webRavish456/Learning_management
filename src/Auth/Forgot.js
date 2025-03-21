import React from "react";
import {Box, Button, TextField} from "@mui/material"

const Forgot=()=>
{
      return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

<<<<<<< HEAD
            <Box className="header_title">Forgot Password</Box>     

            <Box className="forgot">  
=======
            <Box className="header_title">Forgot_Password</Box>     

            <Box className="Forgot">  
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523

           <TextField
           type="email"
           required
           id="email"
           variant="standard"
           label="Enter Email Id"
        />

         <TextField
          type="password"
          required
           variant="standard"
          id="password"
          label="Enter Password"
        />
            
         <Box className="forgot_password">
            <Box className="forgot">Forgot Password</Box>
         </Box>
          
          <Button className="primary_button">Submit</Button>
            
<<<<<<< HEAD
         {/* <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot">Login</Box>
         </Box> */}
=======
         <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot">Login</Box>
         </Box>
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523

          </Box> 
        
        </Box> 
        </>
      )
}

export default Forgot;
import React from "react";
import {Box, Button, TextField} from "@mui/material"

const SignIn=()=>
{
      return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

            <Box className="header_title">SignIn</Box>     

            <Box className="signIn">  

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
          
<<<<<<< HEAD
          <Button className="primary_button">SignIn</Button>
=======
          <Button className="primary_button">Register</Button>
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
            
         <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot">Login</Box>
         </Box>

          </Box> 
        
        </Box> 
        </>
      )
}

export default SignIn;
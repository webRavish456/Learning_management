import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required")
});

const SignIn = () => {


  const navigate =useNavigate()

  useEffect(() => {

   const token = Cookies.get("token");

    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const Base_url = process.env.REACT_APP_BASE_URL; //define base url

  const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {     //data store
    console.log(data)  //check
    setLoading(true)

    const formdata = new FormData();
    formdata.append("email", data.email);       //formdata.append: send data from frontend to backend
    formdata.append("password", data.password);

    const requestOptions = {
      method: "POST",
      body: formdata,    
    };

    fetch(`${Base_url}/login`, requestOptions)         
      .then((response) => response.text())

      .then((result) => {

        const res = JSON.parse(result) //data comes from backend to frontent

        if(res.status==="success")
        {
          setLoading(false)
         
          toast.success("Login Successful!")

          setTimeout(() => {
            navigate("/dashboard");
            reset();
          }, 1500);

          document.cookie = `token=${res.access_token}; path=/; max-age=${res.expiresAt}; SameSite=Strict`;

        }
        else {

          setLoading(false)
          toast.error(res.message)

        }
      })
      .catch((error) => console.error(error));
  };

 const handleFprgot =()=>
 {
   navigate("/fogot")
 }

  return (
    <>
      <ToastContainer />

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        autoComplete="off"
        className="register"
      >
        <Box className="header_title">Log In</Box>

        <Box className="signIn">
          <Box>
            <TextField
              type="email"
              label="Enter Email Id"
              variant="standard"
              {...register("email")}
              error={!!errors.email}
            />
            <div style={{color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.email?.message}
            </div>
          </Box>

          <Box>
            <TextField
              type="password"
              label="Enter Password"
              variant="standard"
              {...register("password")}
              error={!!errors.password}
            />
            <div style={{color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
              {errors.password?.message}
            </div>
          </Box>

          <Box className="forgot_password">
            <Box className="forgot" onClick={handleFprgot}>Forgot Password</Box>
         </Box>

          <Button type="submit" className="primary_button login_btn">
         
          {loading && (
          <CircularProgress
           size={18}
           style={{ marginRight: 8, color: "#fff" }}
          />
           )}

            Log In
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;

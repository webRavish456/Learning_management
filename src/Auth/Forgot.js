import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmpassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required")
});

const Forgot = () => {

  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const Base_url = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    const formdata = new FormData();
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("confirmpassword", data.confirmpassword);


    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(`${Base_url}/forgot`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);

        if (res.status === "success") {
          setLoading(false);
          toast.success("Password updated successfully!");
          setTimeout(() => {
            navigate("/login");
            reset();
          }, 1500);

          document.cookie = `token=${res.access_token}; path=/; max-age=${res.expiresAt}; SameSite=Strict`;

        }else {
          setLoading(false);
          toast.error(res.message);
        }
      })
      .catch((error) => console.error(error));
  };

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
        <Box className="header_title">Forgot Password</Box>

        <Box className="forgotPassword">
          <TextField
            type="email"
            label="Enter Email Id"
            variant="standard"
            {...register("email")}
            error={!!errors.email}
          />
          <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
            {errors.email?.message}
          </div>
        </Box>

        <Box>
          <TextField
            type="password"
            label="Enter New Password"
            variant="standard"
            {...register("password")}
            error={!!errors.password}
          />
          <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
            {errors.password?.message}
          </div>
        </Box>

        <Box>
          <TextField
            type="password"
            label="Confirm New Password"
            variant="standard"
            {...register("confirmpassword")}
            error={!!errors.confirmpassword}
          />
          <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
            {errors.confirmpassword?.message}
          </div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end",  mt: 2 }}>

        <Button  type="submit" className="primary_button forgot_password_btn" >
          {loading && (
            <CircularProgress
              size={18}
              style={{ marginRight: 8, color: "#fff" }}
            />
          )}
          Submit
        </Button>
        </Box>
      </Box>
    </>
  );
};

export default Forgot;

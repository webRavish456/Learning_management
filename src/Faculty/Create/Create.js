import React, { useEffect, useState } from "react";
import {
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid,
    Typography,
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    CircularProgress
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({

    teacherName: yup.string().required("Teacher Name is required"),
    emailId: yup.string().required("Email is required"),
    mobileNo: yup.string().required("Mobile Number is required"),
    experience: yup.string().required("Experience is required"),
    gender: yup.string().required("Gender is required"),
    qualification: yup.string().required("Qualification is required"),
    dob: yup.string().required("Date of birth is required"),
    address: yup.string().required("Address is required"),
    branchName: yup.string().required("Branch Name is required"),
    courseName: yup.string().required("Course Name is required"),
    salary: yup.string().required("Salary is required"),
    joiningDate: yup.string().required("Joining Date is required"),
    resumeCertificate: yup
    .mixed()
    .test("required", "Resume Certificate is required", (value) => {
    return value && value.length > 0;
    }),
    highestQualificationCertificate: yup
    .mixed()
    .test("required", "Highest qualification certificate is required", (value) => {
    return value && value.length > 0;
    }),
    panCard: yup
    .mixed()
    .test("required", "Pan Card is required", (value) => {
    return value && value.length > 0;
    }),
    aadharCard: yup
    .mixed()
    .test("required", "Aadhar Card is required", (value) => {
    return value && value.length > 0;
    }),
    accountHolderName: yup.string().required("Account Holder Name is required"),
    accountNumber: yup.string().required("Account Number is required"),
    bankName: yup.string().required("Bank Name is required"),
    ifscCode: yup.string().required("IFSC Code is required"),
    branch: yup.string().required("Bank Branch is required"),
    branchLocation: yup.string().required("Branch Location is required"),
});

const CreateFaculty = () => {

    const token = Cookies.get('token');

    const Base_url = process.env.REACT_APP_BASE_URL;

    const [loading, setLoading] = useState(false)

    const [loadingData, setLoadingData] =useState(true)

    const [branch, setBranch] = useState([])

    const [course, setCourse] =useState([])

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),

    });

    useEffect(() => {
        const fetchBranchData = async () => {
          try {
            const response = await fetch(`${Base_url}/branch`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            const result = await response.text();
            const res = JSON.parse(result);
      
            if (res.status === "success") {
              const formattedData = res.data.map((item) => item.branchName);
              setBranch(formattedData);
            }
          } catch (error) {
            console.error("Error fetching branch data:", error);
          }
        };
      
        const fetchCourseData = async () => {
          try {
            const response = await fetch(`${Base_url}/courselist`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            const result = await response.text();
            const res = JSON.parse(result);
      
            const formattedCourse = res.data.map((item) => item.courseName);
              
              setCourse(formattedCourse);
              
          } catch (error) {
            console.error("Error fetching course data:", error);
          }
        };
      
        const fetchData = async () => {
          try {
            await Promise.all([fetchBranchData(), fetchCourseData()]);
            setLoadingData(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoadingData(false);
          }
        };
      
        if (loadingData) {
          fetchData();
        }
      
      }, [loadingData]);

    const onSubmit = (data) => {

        setLoading(true)

        console.log(data)

        const companyDetails = {
            branchName: data.branchName,
            courseName: data.courseName,
            salary: data.salary,
            joiningDate: data.joiningDate,
        };

        const bankDetails = {
            accountHolderName: data.accountHolderName,
            accountNumber: data.accountNumber,
            bankName: data.bankName,
            ifscCode: data.ifscCode,
            branch: data.branch,
            branchLocation: data.branchLocation
        }

        const formdata = new FormData();
        formdata.append("teacherName", data.teacherName);
        formdata.append("gender", data.gender);
        formdata.append("dob", data.dob);

        formdata.append("companyDetails", JSON.stringify(companyDetails))
        formdata.append("bankDetails", JSON.stringify(bankDetails))

        formdata.append("mobileNumber", data.mobileNo);
        formdata.append("emailId", data.emailId);
        formdata.append("experience", data.experience);
        formdata.append("qualification", data.qualification);
        formdata.append("address", data.address);

        formdata.append("documents.resumeCertificate", data.resumeCertificate[0]);
        formdata.append("documents.highestQualificationCertificate", data.highestQualificationCertificate[0]);
        formdata.append("documents.panCard", data.panCard[0]);
        formdata.append("documents.aadharCard", data.aadharCard[0]);


        const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(`${Base_url}/teacher`, requestOptions)
            .then((response) => response.text())

            .then((result) => {

                const res = JSON.parse(result)

                if (res.status === "success") {
                    setLoading(false)

                    toast.success("Teacher Created Successfully!")
                    setTimeout(()=>{
                        navigate("/teacher")
                    },[1000])
                  
                    reset();
                }
                else {

                    setLoading(false)
                    toast.error(res.message)

                }
            })
            .catch((error) => console.error(error));
    };

    const handleCancel = () => {
        navigate("/teacher")
    }

    console.log("branch", branch)
    console.log("courseName", course)

    return (
  
         <>
         <ToastContainer/>
       
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4} style={{ padding: "20px" }}>
                    {/* Personal Details */}
                    <Grid item xs={6}>
                        <Box
                            style={{
                                border: "1px solid #ccc",
                                padding: "20px",
                                borderRadius: "8px",
                                marginBottom: "20px",
                                backgroundColor:"#ffffff"
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Personal Details
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Teacher Name
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("teacherName")}
                                            error={!!errors.teacherName}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.teacherName?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="number"
                                            label={
                                                <>
                                                    Mobile Number
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("mobileNo")}
                                            error={!!errors.mobileNo}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.mobileNo?.message}
                                        </div>
                                    </Box>
                                  
                                    <Box>
                                        <TextField InputLabelProps={{ shrink: true }}
                                            type="date"
                                            label={
                                                <>
                                                    Date of Birth
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("dob")}
                                            error={!!errors.dob}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.dob?.message}
                                        </div>
                                    </Box>

                                    <FormControl component="fieldset" fullWidth margin="normal" error={!!errors.gender}>
                                        <FormLabel component="legend" sx={{ marginLeft: 2 }}>Gender</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel
                                                value="male"
                                                control={<Radio sx={{ marginLeft: 2 }} {...register("gender")} />}
                                                label="Male"
                                                error={!!errors.gender}
                                            />
                                            <FormControlLabel
                                                value="female"
                                                control={<Radio sx={{ marginLeft: 2 }} {...register("gender")} />}
                                                label="Female"
                                                error={!!errors.gender}
                                            />
                                            <FormControlLabel
                                                value="others"
                                                control={<Radio sx={{ marginLeft: 2 }} {...register("gender")} />}
                                                label="Others"
                                                error={!!errors.gender}
                                            />
                                        </RadioGroup>
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.gender?.message}
                                        </div>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Email ID
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("emailId")}
                                            error={!!errors.emailId}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.emailId?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Experience
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("experience")}
                                            error={!!errors.experience}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.experience?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Qualification
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("qualification")}
                                            error={!!errors.qualification}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.qualification?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Address
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("address")}
                                            error={!!errors.address}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.address?.message}
                                        </div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginBottom: "20px", backgroundColor:"#ffffff" }}>
                            <Typography variant="h6" gutterBottom>
                                Company Details
                            </Typography>
                            <Grid container spacing={2}>
                            <Grid item xs={6}>
                                    <Box>
                                    <TextField
                            select
                            label={
                            <>
                                Branch Name<span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </>
                            }
                            variant="outlined"
                            {...register("branchName")}
                            error={!!errors.branchName}
                            fullWidth
                            margin="normal"
                            SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                style: { maxHeight: 200 },
                                },
                            },
                            }}
                            >
                            {branch?.map((branchName, index) => (
                            <MenuItem key={index} value={branchName}>
                                {branchName}
                            </MenuItem>
                            ))}
                            </TextField>
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.branchName?.message}
                                        </div>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Box>

                           <TextField
                                 select
                                 label={
                               <>
                                Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                               </>
                            }
                            variant="outlined"
                            {...register("courseName")}
                            error={!!errors.courseName}
                            fullWidth
                            margin="normal"
                            SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                style: { maxHeight: 200 },
                                },
                            },
                            }}
                            >
                            {course?.map((courseName, index) => (
                            <MenuItem key={index} value={courseName}>
                                {courseName}
                            </MenuItem>
                            ))}
                            </TextField>

                                <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                    {errors.courseName?.message}
                                </div>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Salary
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("salary")}
                                            error={!!errors.salary}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.salary?.message}
                                        </div>
                                    </Box>
                                    </Grid>

                                    <Grid item xs={6}>
                                    <Box>
                                        <TextField InputLabelProps={{ shrink: true }}
                                            type="date"
                                            label={
                                                <>
                                                    Joining Date
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("joiningDate")}
                                            error={!!errors.joiningDate}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.joiningDate?.message}
                                        </div>
                                    </Box>
                                </Grid>
                                </Grid>
                        </Box>

                    </Grid>

                    <Grid item xs={6}>
                        <Box style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor:"#ffffff" }}>
                            <Typography variant="h6" gutterBottom>
                                Document Details
                            </Typography>
                       
                            <Box marginBottom={2}>
                                <TextField InputLabelProps={{ shrink: true }}
                                    type="file"
                                    label={
                                        <>
                                            Highest Qualification Certificate
                                        </>
                                    }
                                    variant="outlined"
                                    {...register("highestQualificationCertificate")}
                                    error={!!errors.highestQualificationCertificate}
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ accept: "application/pdf" }} 
                                />
                                <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                    {errors.highestQualificationCertificate?.message}
                                </div>
                           
                            </Box>
                            <Box marginBottom={2}>
                                <TextField InputLabelProps={{ shrink: true }}
                                    type="file"
                                    label={
                                        <>
                                            Resume
                                        </>
                                    }
                                    variant="outlined"
                                    {...register("resumeCertificate")}
                                    error={!!errors.resumeCertificate}
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ accept: "application/pdf" }} 
                                />
                                <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                    {errors.resumeCertificate?.message}
                                </div>
                               
                            </Box>
                            <Box marginBottom={2}>
                                <TextField InputLabelProps={{ shrink: true }}
                                    type="file"
                                    label={
                                        <>
                                            Aadhar Card
                                        </>
                                    }
                                    variant="outlined"
                                    {...register("aadharCard")}
                                    error={!!errors.aadharCard}
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ accept: "application/pdf" }} 
                                />
                                <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                    {errors.aadharCard?.message}
                                </div>
                              
                            </Box>
                            <Box marginBottom={2}>
                                <TextField InputLabelProps={{ shrink: true }}
                                    type="file"
                                    label={
                                        <>
                                            Pan Card
                                        </>
                                    }
                                    variant="outlined"
                                    {...register("panCard")}
                                    error={!!errors.panCard}
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ accept: "application/pdf" }} 
                                />
                                <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                    {errors.panCard?.message}
                                </div>
                              
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor:"#ffffff" }}>
                            <Typography variant="h6" gutterBottom>
                                Bank Details
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>                                   
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Account Holder Name
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("accountHolderName")}
                                            error={!!errors.accountHolderName}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.accountHolderName?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Account Number
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("accountNumber")}
                                            error={!!errors.accountNumber}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.accountNumber?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Bank Name
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("bankName")}
                                            error={!!errors.bankName}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.bankName?.message}
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    IFSC Code
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("ifscCode")}
                                            error={!!errors.ifscCode}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.ifscCode?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Bank Branch
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("branch")}
                                            error={!!errors.branch}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.branch?.message}
                                        </div>
                                    </Box>
                                    <Box>
                                        <TextField
                                            type="text"
                                            label={
                                                <>
                                                    Branch Location
                                                </>
                                            }
                                            variant="outlined"
                                            {...register("branchLocation")}
                                            error={!!errors.branchLocation}
                                            fullWidth
                                            margin="normal"
                                        />
                                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                            {errors.branchLocation?.message}
                                        </div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        marginTop: 2,
                        justifyContent: "flex-end",
                        width: "100%", // Ensure the box spans the full width
                    }}
                >
                        <Button onClick={handleCancel} className="secondary_button" >
                            Cancel
                        </Button>
                        <Button type="submit" className="primary_button">
                            {loading ? (
                                <>
                                    <CircularProgress size={18}
                                        style={{ marginRight: 8, color: "#fff" }} />
                                    Submitting
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </Box>
                </Grid>
            </form>
     </>
    );
};

export default CreateFaculty;

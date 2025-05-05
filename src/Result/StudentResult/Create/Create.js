import React, { useEffect, useState } from "react";
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
    CircularProgress,
} from "@mui/material";

import * as  yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie"

const CreateStudentResult = ({ handleCreate, handleClose }) => {

    const [courseName, setCourseName] = useState([]);

    const isSmScreen = useMediaQuery("(max-width:768px)");

    const token = Cookies.get('token');

    const Base_url = process.env.REACT_APP_BASE_URL;

    const [loading, setLoading] = useState(false)
    const [loadingdata, setLoadingdata] = useState(true)


    const schema = yup.object().shape({

        studentName: yup.string().required("Student Name is required"),
        courseName: yup.string().required("Course Name is required"),
        marksObtained: yup.string().required("Marks Obtained is required"),
        totalMarks: yup.string().required("Total Marks is required"),
        passingMarks: yup.string().required("Passing Marks is required"),
        status:yup.string().required("Status is required"),
        sheet:yup.mixed().required("Sheet is required")

    });
    
    useEffect(() => {

        const fetchCourseData = async () => {
            try {
                const response = await fetch(`${Base_url}/courselist`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const result = await response.json();
                if (result.status === "success") {
                    console.log(result.data)

                    setCourseName(result.data);
                    setLoadingdata(false)
                }
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };
      
        if (loadingdata) {
            fetchCourseData();
        }
    }, [loadingdata]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {

        setLoading(true)

        const formdata = new FormData();
        formdata.append("studentName", data.studentName);
        formdata.append("courseName", data.courseName);
        formdata.append("marksObtained", data.marksObtained);
        formdata.append("totalMarks", data.totalMarks);
        formdata.append("passingMarks", data.passingMarks);
        formdata.append("status", data.status);
        formdata.append("studentId", data.studentId);
        formdata.append("resultId", data.resultId);
        formdata.append("sheet", data.sheet[0]);

        const requestOptions = {
            method: "POST",
            body: formdata,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(`${Base_url}/result`, requestOptions)
            .then((response) => response.text())

            .then((result) => {

                const res = JSON.parse(result)

                if (res.status === "success") {
                    setLoading(false)

                    toast.success("Result Created Successful!")

                    handleCreate(true)
                    handleClose()
                    reset();
                }
                else {

                    setLoading(false)
                    toast.error(res.message)

                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
             <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container columnSpacing={2}>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>

                        <TextField
                            type="text"
                            label={
                                <>
                                    Student Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("studentName")}
                            error={!!errors.studentName}
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.studentName?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <FormControl
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.courseName}
                        >
                            <InputLabel>
                                Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </InputLabel>

                            <Select
                                label="Course Name"
                           
                                {...register("courseName")}
                            >
                                {courseName.map((course, index) => (
                                    <MenuItem key={index} value={course.courseName}>
                                        {course.courseName}
                                    </MenuItem>
                                ))}
                            </Select>

                            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                {errors.courseName?.message}
                            </div>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                            label={
                                <>
                                    Marks Obtained <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            type="number"
                            variant="outlined"
                            {...register("marksObtained")}
                            error={!!errors.marksObtained}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.marksObtained?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                            label={
                                <>
                                    Total Marks <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            type="number"
                            variant="outlined"
                            {...register("totalMarks")}
                            error={!!errors.totalMarks}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.totalMarks?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                            label={
                                <>
                                    Passing Marks <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            type="number"
                            variant="outlined"
                            {...register("passingMarks")}
                            error={!!errors.passingMarks}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.passingMarks?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                    <TextField
                    type="file"
                    InputLabelProps={{ shrink: true }}
                    label="sheet"
                    variant="outlined"
                    {...register("sheet")}
                    error={!!errors.sheet}
                    fullWidth
                    margin="normal"
                    inputProps={{ accept: "application/pdf" }} 
        />
                    <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                    {errors.sheet?.message}
                    </div>
          </Grid>

                </Grid>

                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
                    <Button onClick={handleClose} className="secondary_button">
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
            </form>
        </>
    );
};

export default CreateStudentResult;

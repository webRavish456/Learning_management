import React, { useEffect, useState } from "react"
import {
    TextField,
    Grid,
    Button,
    Box,
    CircularProgress,
    useMediaQuery,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import * as  yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie"

const schema = yup.object().shape({
    examName: yup.string().required("Exam Name is required"),
    courseName: yup.string().required("Course Name is required"),
    teacherName: yup.string().required("Teacher Name is required"),
    testType: yup.string().required("Test Type is required"),
    resultDate: yup.string().required("Result Date is required"),
    status: yup.string()
});

const EditResult = ({ handleUpdate, editData, handleClose }) => {
    const isSmScreen = useMediaQuery("(max-width:768px)");

    const token = Cookies.get('token');

    const Base_url = process.env.REACT_APP_BASE_URL;

    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (editData) {
            reset({
                examName: editData.examName || "",
                courseName: editData.courseName || "",
                teacherName: editData.teacherName || "",
                testType: editData.testType || "",
                resultDate: editData.totalMarks || "",
                status: editData.status || "",
            });
        }
    }, [editData, reset]);

    const courseOptions = ["BCA", "B.Tech", "B.Sc"]; 
    const teacherOptions = ["Ravish", "Nikhil", "Sanjoy"]; 

    const onSubmit = (data) => {

        setLoading(true)

        const formdata = new FormData();
        formdata.append("examName", data.examName);
        formdata.append("courseName", data.courseName);
        formdata.append("teacherName", data.teacherName);
        formdata.append("testType", data.testType);
        formdata.append("resultDate", data.resultDate);
        formdata.append("status", data.status)

        const requestOptions = {
            method: "PATCH",
            body: formdata,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(`${Base_url}/result/${editData._id}`, requestOptions)
            .then((response) => response.text())

            .then((result) => {

                const res = JSON.parse(result)

                if (res.status === "success") {
                    setLoading(false)

                    toast.success("New Result Edited Successful!")

                    handleUpdate(true)
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
                                    Exam Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            {...register("examName")}
                            error={!!errors.examName}
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.examName?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel id="courseName-label">
                                Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </InputLabel>
                            <Select
                                labelId="courseName-label"
                                {...register("courseName")}
                                error={!!errors.courseName}
                            >
                                {courseOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                {errors.courseName?.message}
                            </div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel id="teacherName-label">
                                Teacher Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                            </InputLabel>
                            <Select
                                labelId="teacherName-label"
                                {...register("teacherName")}
                                error={!!errors.teacherName}
                            >
                                {teacherOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                            <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                                {errors.teacherName?.message}
                            </div>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            label={
                                <>
                                    Test Type <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            type="text"
                            variant="outlined"
                            {...register("testType")}
                            error={!!errors.testType}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.testType?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            label={
                                <>
                                    Result Date <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            {...register("resultDate")}
                            error={!!errors.resultDate}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.resultDate?.message}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            label={
                                <>
                                    Status <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            type="text"
                            variant="outlined"
                            {...register("status")}
                            error={!!errors.status}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.status?.message}
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
    )
}

export default EditResult;
import React, { useEffect, useState } from "react";
import {
    TextField,
    Grid,
    Button,
    Box,
    CircularProgress,
    useMediaQuery,
} from "@mui/material";
import * as  yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie"

const schema = yup.object().shape({
    studentName: yup.string().required("Student Name is required"),
    studentId: yup.string().required("Student ID is required"),
    resultId: yup.string().required("Result ID is required"),
    courseName: yup.string().required("Course Name is required"),
    marksObtained: yup.number().required("Marks Obtained is required"),
    totalMarks: yup.number().required("Total Marks is required"),
    passingMarks: yup.number().required("Passing Marks is required"),
    sheet: yup.mixed().required("Sheet is required"),
    status: yup.string()
});

const EditStudentResult = ({ handleUpdate, editData, handleClose }) => {
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
                studentName: editData.studentName || "",
                studentId: editData.studentId || "",
                resultId: editData.resultId || "",
                courseName: editData.courseName || "",
                marksObtained: editData.marksObtained || "",
                totalMarks: editData.totalMarks || "",
                passingMarks: editData.passingMarks || "",
                sheet: editData.sheet || "",
                status: editData.status || "",
            });
        }
    }, [editData, reset]);

    const onSubmit = (data) => {

        setLoading(true)

        const formdata = new FormData();
        formdata.append("studentName", data.studentName);
        formdata.append("studentId", data.studentId);
        formdata.append("resultId", data.resultId);
        formdata.append("courseName", data.courseName);
        formdata.append("marksObtained", data.marksObtained);
        formdata.append("totalMarks", data.totalMarks);
        formdata.append("passingMarks", data.passingMarks);
        formdata.append("sheet", data.sheet[0]);
        formdata.append("status", data.status);
        const requestOptions = {
            method: "PATCH",
            body: formdata,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(`${Base_url}/studentresult/${editData._id}`, requestOptions)
            .then((response) => response.text())

            .then((result) => {

                const res = JSON.parse(result)

                if (res.status === "success") {
                    setLoading(false)

                    toast.success("New Student Result Edited Successful!")

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
                                    Student Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("studentName")}
                            error={!!errors.studentName}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.studentName?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            type="text"
                            label={
                                <>
                                    Student ID <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("studentId")}
                            error={!!errors.studentId}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.studentId?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            type="text"
                            label={
                                <>
                                    Result ID <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("resultId")}
                            error={!!errors.resultId}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.resultId?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            type="text"
                            label={
                                <>
                                    Course Name <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("courseName")}
                            error={!!errors.courseName}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.courseName?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            type="number"
                            label={
                                <>
                                    Marks Obtained
                                    <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("marksObtained")}
                            error={!!errors.marksObtained}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.marksObtained?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            type="number"
                            label={
                                <>
                                    Total Marks
                                    <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("totalMarks")}
                            error={!!errors.totalMarks}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.totalMarks?.message}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={isSmScreen ? 12 : 6} md={6}>
                        <TextField
                            type="number"
                            label={
                                <>
                                    Passing Marks
                                    <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("passingMarks")}
                            error={!!errors.passingMarks}
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
                            label={
                                <>
                                    Sheet
                                    <span style={{ color: "rgba(240, 68, 56, 1)" }}>*</span>
                                </>
                            }
                            varient="outlined"
                            {...register("sheet")}
                            error={!!errors.sheet}
                            fullWidth
                            margin="normal"
                        />
                        <div style={{ color: "rgba(240, 68, 56, 1)", fontSize: "0.8rem" }}>
                            {errors.sheet?.message}
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

export default EditStudentResult;

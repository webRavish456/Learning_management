import React, { useState } from "react";
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
    FormLabel
} from "@mui/material";

const CreateFaculty = ({ handleSubmit, handleClose }) => {
    const [formData, setFormData] = useState({
        teacherName: "",
        gender: "",
        dob: "",
        mobileNo: "",
        email: "",
        experience: "",
        qualification: "",
        address: "",
        branchName: "",
        courseName: "",
        salary: "",
        joiningDate: "",
        resumeCertificate: "",
        highestQualificationCertificate: "",
        panCard: "",
        aadharCard: "",
        accountHolderName: "",
        accountNumber: "",
        bankName: "",
        ifscCode: "",
        bankBranch: "",
        branchLocation: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ marginLeft: 2, marginTop: 4 }}>
                Edit Teacher Details
            </Typography>
            <Grid container spacing={6} style={{ padding: "20px" }}>
                {/* Personal Details */}
                <Grid item xs={6}>
                    <Box
                        style={{
                            border: "1px solid #ccc",
                            padding: "20px",
                            borderRadius: "8px",
                            marginBottom: "20px",
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Personal Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Teacher Name"
                                    name="teacherName"
                                    value={formData.teacherName}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Mobile Number"
                                    name="mobileNo"
                                    type="number"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" sx={{ marginLeft: 2 }}>Gender</FormLabel>
                                    <RadioGroup
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel value="male" control={<Radio sx={{ marginLeft: 2 }} />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio sx={{ marginLeft: 2 }} />} label="Female" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField
                                    sx={{ marginTop: 4 }}
                                    label="Date of Birth"
                                    name="dob"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.dob}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Email ID"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Qualification"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
                        <Typography variant="h6" gutterBottom>
                            Company Details
                        </Typography>
                        <TextField
                            label="Branch Name"
                            name="branchName"
                            value={formData.branchName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Course Name</InputLabel>
                            <Select
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                            >
                                <MenuItem value="Course1">BCA</MenuItem>
                                <MenuItem value="Course2">MCA</MenuItem>
                                <MenuItem value="Course3">MBA</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Joining Date"
                            name="joiningDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.joiningDate}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
                        <Typography variant="h6" gutterBottom>
                            Document Details
                        </Typography>
                        {/* <Typography variant="subtitle2" gutterBottom>
                            Accepted formats: pdf, jpeg, jpg, png | Minimum file size: 100 KB
                        </Typography> */}
                        <Box marginBottom={2}>
                            <TextField
                                label="Certificate"
                                name="certificate"
                                type="file"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="normal"
                            />
                            <Typography variant="body2">
                                View existing document: <a href="certificate.pdf" target="_blank" rel="noopener noreferrer">Certificate.pdf</a>
                            </Typography>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField
                                label="Resume"
                                name="resume"
                                type="file"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="normal"
                            />
                            <Typography variant="body2">
                                View existing document: <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume.pdf</a>
                            </Typography>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField
                                label="Aadhar Document"
                                name="aadharDocument"
                                type="file"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="normal"
                            />
                            <Typography variant="body2">
                                View existing document: <a href="aadhar.pdf" target="_blank" rel="noopener noreferrer">Aadhar.pdf</a>
                            </Typography>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField
                                label="PAN Card Document"
                                name="panCardDocument"
                                type="file"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="normal"
                            />
                            <Typography variant="body2">
                                View existing document: <a href="panCard.pdf" target="_blank" rel="noopener noreferrer">PANCard.pdf</a>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
                        <Typography variant="h6" gutterBottom>
                            Bank Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Account Holder Name"
                                    name="accountHolderName"
                                    value={formData.accountHolderName}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Account Number"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Bank Name"
                                    name="bankName"
                                    value={formData.bankName}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="IFSC Code"
                                    name="ifscCode"
                                    value={formData.ifscCode}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Bank Branch"
                                    name="bankBranch"
                                    value={formData.bankBranch}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Branch Location"
                                    name="branchLocation"
                                    value={formData.branchLocation}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Box
                    className="submit"
                    sx={{
                        display: "flex",
                        gap: 2,
                        marginTop: 2,
                        justifyContent: "flex-end",
                        width: "100%", // Ensure the box spans the full width
                    }}
                >
                    <Button onClick={handleClose} className="secondary_button" >
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} className="primary_button">
                        Submit
                    </Button>
                </Box>
            </Grid>
        </>
    );
};

export default CreateFaculty;

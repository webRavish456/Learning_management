import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ViewFaculty = () => {
  return (
    <div style={{ padding: "20px" }}>
       <Typography variant="h5" gutterBottom >
                    View Teacher Details
                </Typography>
      <Grid container spacing={2}>
        {/* Personal Details Section */}
        <Grid item xs={12} md={6}>
          <Box
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
              Personal Details
            </Box>
            <Grid container spacing={2}>
              {/* Left Column: Teacher Name to Mobile No */}
              <Grid item xs={12} md={6}>
                {[
                  { label: "Teacher Name", value: "Ravish" },
                  { label: "Gender", value: "Male" },
                  { label: "DOB", value: "17-12-2001" },
                  { label: "Mobile No", value: "1234567812" },
                ].map((item, index) => (
                  <Box key={index} style={{ marginBottom: "10px" }}>
                    <Box style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {item.label}:
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </Box>
                  </Box>
                ))}
              </Grid>

              {/* Right Column: Email to Address */}
              <Grid item xs={12} md={6}>
                {[
                  { label: "Email Id", value: "ravish@gmail.com" },
                  { label: "Experience", value: "5 years" },
                  { label: "Qualification", value: "B Teach" },
                  { label: "Address", value: "Sakchi" },
                ].map((item, index) => (
                  <Box key={index} style={{ marginBottom: "10px" }}>
                    <Box style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {item.label}:
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Company Details Section */}
        <Grid item xs={12} md={6}>
          <Box
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
              Company Details
            </Box>
            <Grid container spacing={2}>
              {[
                { label: "Branch Name", value: "Frontend" },
                { label: "Course Name", value: "BCA" },
                { label: "Salary", value: "₹50,000" },
                { label: "Joining Date", value: "12-03-2025" },
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box>
                    <Box style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {item.label}:
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Document Details Section */}
        <Grid item xs={12} md={6}>
          <Box
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
              Document Details
            </Box>
            {[
              { label: "Resume Certificate", value: "File Type" },
              { label: "Highest Qualification Certificate", value: "File Type" },
              { label: "Pan Card", value: "File Type" },
              { label: "Aadhar Card", value: "File Type" },
            ].map((item, index) => (
              <Box key={index} style={{ marginBottom: "10px" }}>
                <Box style={{ fontWeight: "bold", marginBottom: "5px" }}>
                  {item.label}:
                </Box>
                <Box
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                  }}
                >
                  {item.value}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Bank Details Section */}
        <Grid item xs={12} md={6}>
          <Box
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Box style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
              Bank Details
            </Box>
            <Grid container spacing={2}>
              {/* Left Column: Account Holder Name to Bank Name */}
              <Grid item xs={12} md={6}>
                {[
                  { label: "Account Holder Name", value: "Ravish Kumar" },
                  { label: "Account Number", value: "12345" },
                  { label: "Bank Name", value: "SBI" },
                ].map((item, index) => (
                  <Box key={index} style={{ marginBottom: "10px" }}>
                    <Box style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {item.label}:
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </Box>
                  </Box>
                ))}
              </Grid>

              {/* Right Column: IFSC Code to Branch Location */}
              <Grid item xs={12} md={6}>
                {[
                  { label: "IFSC Code", value: "98765" },
                  { label: "Bank Branch", value: "ABCD" },
                  { label: "Branch Location", value: "Sakchi" },
                ].map((item, index) => (
                  <Box key={index} style={{ marginBottom: "10px" }}>
                    <Box style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {item.label}:
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewFaculty;

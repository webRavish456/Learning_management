import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Cookies from "js-cookie";

const Dashboard = () => {

    const [studentCourse, setStudentCourse] = useState([]);
    const [dailyExam, setDailyExam] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [assignmentData, setAssignmentData] = useState([]);


    const [loading, setLoading] = useState(true)

    const token = Cookies.get("token");
    const Base_url = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
      
      
        const fetchData = async () => {
          try {
            const [studentRes, examRes, teacherRes, assignmentRes] = await Promise.all([
              fetch(`${Base_url}/allstudents`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse),
              fetch(`${Base_url}/exam`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse),
              fetch(`${Base_url}/teacher`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse),
              fetch(`${Base_url}/allAssignment`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse)
            ]);
      

            if (studentRes.status === "success") {
                const studentData = studentRes.data.reduce((acc, item) => {
                  const course = item.course;
                  acc[course] = (acc[course] || 0) + 1; 
                  return acc;
                }, {});
              
                const formattedData = Object.entries(studentData).map(([name, value]) => ({
                  name,   
                  value,  
                }));
              
              
                setStudentCourse(formattedData);
              }
              
      
 
            if (examRes.status === "success") {
              const dailyCounts = examRes.data.reduce((acc, item) => {
                const date = new Date(item.createdAt).toLocaleDateString();
                acc[date] = (acc[date] || 0) + 1;
                return acc;
              }, {});
              const formattedData = Object.entries(dailyCounts).map(([date, count]) => ({
                date,
                exam: count
              }));
              console.log(formattedData)
                setDailyExam(formattedData);
            }
      
            if (assignmentRes.status === "success") {
                const courseAssignments = assignmentRes.data.reduce((acc, item) => {
                  const course = item.course; 
                  acc[course] = (acc[course] || 0) + 1; 
                  return acc;
                }, {});
                const formattedData = Object.entries(courseAssignments).map(([name, value]) => ({
                  name, 
                  value, 
                }));
                setAssignmentData(formattedData); 
              }

            if (teacherRes.status === "success") {
                const courseCounts = teacherRes.data.reduce((acc, item) => {
                  const course = item.companyDetails.courseName;
                  acc[course] = (acc[course] || 0) + 1;
                  return acc;
                }, {});
              
                const formattedData = Object.entries(courseCounts).map(([name, value]) => ({
                  name, 
                  value, 
                }));
                 console.log(formattedData)
                setTeacherData(formattedData);
              }
    

            setLoading(false)
      
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
       if(loading) {
        fetchData();
       }
       
      }, [loading]);
      

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <Box sx={{
              flexGrow: 1,
              overflowY: "auto",
              height: "100vh",
              paddingBottom: 4,
              marginBottom: "20px"
            }}>

        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
            
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          Students per Course
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                        <Pie
                        data={studentCourse}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        >
                        {studentCourse.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                        </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                     Exam
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dailyExam}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="exam" stroke="#8884d8" />
                    </LineChart>
                    </ResponsiveContainer>
                </Paper>
                </Grid>

          
                <Grid item xs={12} md={6} >
                <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Number of Assignments by Course
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={assignmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                </Paper>
                </Grid>

            
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Teacher per course
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                        <Pie
                        data={teacherData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        >
                        {teacherData.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                        </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
};

export default Dashboard;
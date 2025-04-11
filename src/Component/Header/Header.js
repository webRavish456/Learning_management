import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useLocation } from "react-router-dom";

const Header=()=>
{

  const location = useLocation();
    const settings = ['My Profile',  'Logout'];


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

      const getHeadingFromPath = () => {
        const path = location.pathname;
    
        if (path.includes("/branch")) return "Branch";
        if (path.includes("/course/all-courses")) return "All Courses";
        if (path.includes("/course/document-sharing")) return "Document Sharing";
        if (path.includes("/teacher")) return "Teacher";
        if (path.includes("/student/all-students")) return "AllStudents";
        if (path.includes("/student/certificates")) return "Certificates";
        if (path.includes("/scheduling")) return "Scheduling";
        if (path.includes("/assignment/all-assignments")) return "All Assignments";
        if (path.includes("/assignment/students-assignment")) return "Students-Assignments";
        if (path.includes("/exam")) return "Exam";
        if (path.includes("/results")) return "Results";

         // Move the "Dashboard" condition here
  if (path === "/") return "Dashboard";

  return ""; // Fallback in case no match is found
       
      };

    return (
        <>
        <AppBar position="static" style={{backgroundColor:"#ffffff", height:"60px"}}>
        <Typography variant="h6" sx={{ color: "#333" }}>
          {getHeadingFromPath()}
        </Typography>
          <Box sx={{ flexGrow: 0, padding:"10px 30px",display:'flex', justifyContent:"flex-end", alignItems:"center" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{
          position: "absolute", // Set absolute positioning for the avatar
          top: "3px",          // Adjust the vertical position
          right: "30px",        // Adjust the horizontal position
          zIndex: "1",          // Ensure it appears above other elements
        }}>
                <Avatar alt="Learning.." src="Learning.." />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    </AppBar>

        </>
    )
  }

export default Header;
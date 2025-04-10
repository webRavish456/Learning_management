import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import CloseIcon from "@mui/icons-material/Close";


import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow ,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  IconButton,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  useMediaQuery,
} from "@mui/material";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import ViewExam from "./View/View";
import CreateExam from "./Create/Create";
import EditExam from "./Edit/Edit";
import DeleteExam from "./Delete/Delete";
import Search from "../../Search/Search";

const AllStudents=()=>
  {
  
    const [openData, setOpenData] = useState(false)
  
    const [viewData, setViewData] = useState(false)
  
    const [editData, setEditData] = useState(false)
  
    const [deleteData, setDeleteData] = useState(false)
  
   const handleView = () =>
    {
      setViewData(true)
    }
  
  const handleEdit = () =>
  {
     setEditData(true)
  }
  
  const handleDelete = () =>
    {
      setDeleteData(true)
    }
  

const columns = [
  { id: 'si', 
    label: 'SI.No',
     flex:1, 
     align:'center'
     },
  { id: 'student_name',
     label: 'Student Name',
      flex:1, 
      align:'center' 
    },
  {
    id: 'gender',
    label: 'Gender',
    flex:1,
    align: 'center',
  },
  {
    id: 'mobile_number',
    label: 'Mobile Number',
    flex:1,
    align: 'center',
  },
  {
    id: 'email_id',
    label: 'Email Id ',
    flex:1,
    align: 'center',
  },
  {
    id: 'dob',
    label: 'DOB ',
    flex:1,
    align: 'center',
  },
  
  {
    id: 'address',
    label: 'Address ',
    flex:1,
    align: 'center',
  },
  {
    id: 'enrollment_date',
    label: 'Enrollment Date ',
    flex:1,
    align: 'center',
  },
  {
    id: 'course',
    label: 'Course ',
    flex:1,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    flex:1,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Action',
    flex:1,
    align: 'center',
  },
];

function createData(si, student_name, gender, mobile_number,email_id, dob, address, enrollment_date, course, status ) {
  return { si, student_name, gender, mobile_number,email_id, dob, address, enrollment_date, course,status, action: (
      <>
      <IconButton
          style={{ color: "blue", padding: "4px", transform: "scale(0.8)" }}
          onClick={handleView}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          style={{ color: "grey", padding: "4px", transform: "scale(0.8)" }}
          onClick={handleEdit}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ color: "red", padding: "4px", transform: "scale(0.8)" }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
   };
}


const rows = [
  createData('1', 'Harry', 'Male', '9087654323', 'hary@gmail.com', '10-02-2003', 'Jamshedpur', '20-03-25','Java', 'Completed')
  // createData('2', 'Goldie', 'goldie@gmail.com', '1234567891', '2000-02-02', 'Female', 'JSR', '2023-01-02', 'Science', 'Inactive'),
  // createData('3', 'Nandani', 'nandani@gmail.com', '1234567892', '1999-03-03', 'Female', 'JSR', '2023-01-03', 'History', 'Active'),
  // createData('4', 'Manisha', 'manisha@gmail.com', '1234567893', '1998-04-04', 'Female', 'JSR', '2023-01-04', 'English', 'Inactive'),
  // createData('5', 'Aastha', 'aastha@gmail.com', '1234567894', '1997-05-05', 'Female', 'JSR', '2023-01-05', 'Computer Science', 'Active'),
];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onAddClick =()=>
    {
      setOpenData(true)
    }

    const handleClose = () => {
      setEditData(false)
      setViewData(false)
      setOpenData(false)
      setDeleteData(false)
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     setOpenData(false)
     // console.log("Form Data Submitted:", formData);
   }

   const handleUpdate = (e) => {
      e.preventDefault();
      setEditData(false)
   }


  return (

    <Box className="container">
      <Search onAddClick={onAddClick}/>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight:700}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    <CommonDialog 
      open={openData || viewData || editData || deleteData} 
      onClose={handleClose}
      dialogTitle={ <>
         {openData? "Exam Form" : viewData ? "View Exam Details": editData?"Edit Exam Details":deleteData?"Delete Exam Details":null}
      </>}
      
      dialogContent = {
         openData ? <CreateExam handleSubmit={handleSubmit} handleClose={handleClose} /> :
          viewData ? <ViewExam /> : 
         editData ? <EditExam handleUpdate={handleUpdate} handleClose={handleClose} /> : 
         deleteData? <DeleteExam handleDelete={handleDelete} handleClose={handleClose} />:null
        
      }

      />

    </Box>
  );
}

export default AllStudents;

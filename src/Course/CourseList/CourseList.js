import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// import CloseIcon from "@mui/icons-material/Close";

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
    // Dialog,
    // DialogTitle,
    // DialogActions,
    // DialogContent,
    // DialogContentText,
    // TextField,
    IconButton,
} from "@mui/material";

import CreateCourseList from "./Create/Create";
import ViewCourseList from "./View/View";
import EditCourseList from "./Edit/Edit";
import DeleteCourseList from "./Delete/Delete";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import Search from "../../Search/Search";

const CourseList=()=>
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
  { id: 'si', label: 'SI.No', flex:1, align:'center' },
  {
    id: 'coursename',
    label: 'Course Name',
    flex:1,
    align: 'center',
  },
  {
    id: 'coursedescription',
    label: 'Course Description',
    flex:1,
    align: 'center',
  },
  {
    id: 'duration',
    label: 'Duration ',
    flex:1,
    align: 'center',
  },
  {
    id: 'pricing',
    label: 'Pricing ',
    flex:1,
    align: 'center',
  },

   {
    id: 'syllabus',
    label: 'Syllabus ',
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

function createData(si,coursename,coursedescription,duration,pricing,syllabus ) {
  return { si,coursename,coursedescription,duration,pricing,syllabus , action: (
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
  createData('1', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('2', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('3', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('4', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('5', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('6', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('7', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('8', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('9', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('10', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('11', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('12', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('13', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('14', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('15', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('16', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('17', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('18', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('19', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
  createData('20', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus')




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
      {/* <Box>Course-List</Box> */}
      <Search onAddClick={onAddClick} buttonText=' Add New Course'/>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{overflowX:"auto", maxWidth: 1070 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight:700 }}
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
         {openData? "CourseList" : viewData ? "View CourseList Details ": editData?"Edit CourseList Details":deleteData?"Delete CourseList Details":null}
      </>}
      
      dialogContent = {
         openData ? <CreateCourseList handleSubmit={handleSubmit} handleClose={handleClose} /> :
          viewData ? <ViewCourseList /> : 
         editData ? <EditCourseList handleUpdate={handleUpdate} handleClose={handleClose} /> : 
         deleteData? <DeleteCourseList handleDelete={handleDelete} handleClose={handleClose} />:null
        
      }

      />

    </Box>
  );
  
}

export default CourseList;
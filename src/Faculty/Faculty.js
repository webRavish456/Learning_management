import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import CloseIcon from "@mui/icons-material/Close";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";

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
 
  IconButton,
  
} from "@mui/material";
import CommonDialog from "../Component/CommonDialog/CommonDialog";
import ViewFaculty from "./View/View";
import CreateFaculty from "./Create/Create";
import EditFaculty from "./Edit/Edit";
import DeleteFaculty from "./Delete/Delete";

const Faculty=()=>
  {
  
    const [openData, setOpenData] = useState(false)
  
    const [viewData, setViewData] = useState(false)
  
    const [editData, setEditData] = useState(false)
  
    const [deleteData, setDeleteData] = useState(false)
   const navigate = useNavigate();
   
   
  
   const handleView = () =>
    {
      navigate("/viewfaculty")
    }
  
  const handleEdit = () =>
  {
    navigate("/editfaculty")
  }
  
  const handleDelete = () =>
    {
      setDeleteData(true)
    }
  

const columns = [
  { id: 'si', label: 'SI.No', flex:1, align:'center' },
  { id: 'teacherName', label: 'Teacher Name', flex:1, align:'center' },
  
  {id: 'email',label: 'Email',flex:1,align: 'center',},
  {id: 'mobileNo',label: 'Mobile No',flex:1,align: 'center',},
  
  {id: 'dob',label: 'DOB',flex:1, align: 'center',},
  { id: 'gender',label: 'Gender ', flex:1, align: 'center',},
 
  {id: 'address',label: 'Address ',flex:1,align: 'center',},
  {id: 'joiningDate',label: 'Joining Date',flex:1,align: 'center', },

  {id: 'course',label: 'Course ', flex:1,align: 'center',},
  {id: 'status',label: 'Status',flex:1,align: 'center', },
  {id: 'action',label: 'Action', flex:1,align: 'center', },
 
];

function createData(si, teacherName, email, mobileNo, dob, gender, address, course, joiningDate,status ) {
  return { si, teacherName, email, mobileNo, dob, gender, address, course, joiningDate,status, action: (
      <>
      <IconButton style={{color:"blue", padding:"4px", transform:"scale(0.8)"}} onClick={handleView}>
        <VisibilityIcon />
      </IconButton>
      <IconButton style={{color:"grey", padding:"4px", transform:"scale(0.8)"}} onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      <IconButton style={{color:"red", padding:"4px", transform:"scale(0.8)"}} onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      </>
    ),
   };
}


const rows = [
  createData('1', 'Ravish', 'ravish@gmail.com', '1234567812', '17-12-2001', 'Male', 'Sakchi','Full stack','12-03-2025' ,'Active')
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
                  style={{ minWidth: column.minWidth, fontWeight: 700 }}
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
         {openData? "Create New Faculty Detail" : viewData ? "View Faculty Details": editData?"Edit Faculty Details":deleteData?"Delete Faculty Details":null}
      </>}
      
      dialogContent = {
         openData ? <CreateFaculty handleSubmit={handleSubmit} handleClose={handleClose} /> :
          viewData ? <ViewFaculty /> : 
         editData ? <EditFaculty handleUpdate={handleUpdate} handleClose={handleClose} /> : 
         deleteData? <DeleteFaculty handleDelete={handleDelete} handleClose={handleClose} />:null
        
      }

      />

    </Box>
  );
}

export default Faculty;

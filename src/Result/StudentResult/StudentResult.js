import React, { useEffect, useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Cookies from 'js-cookie'

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

import ViewStudentResult from "./View/View";
import CreateStudentResult from "./Create/Create";
import EditStudentResult from "./Edit/Edit";
import DeleteStudentResult from "./Delete/Delete";
import Search from "../../Search/Search";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import { useParams } from "react-router-dom";

const StudentResult = () => {
  
    const [openData, setOpenData] = useState(false)
  
    const [viewData, setViewData] = useState(false)
  
    const [editData, setEditData] = useState(false)
  
    const [deleteData, setDeleteData] = useState(false)

    const [rows, setRows] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const [searchTerm, setSearchTerm] = useState("");
  
    const {examId} = useParams()

    const token = Cookies.get("token");
    const Base_url = process.env.REACT_APP_BASE_URL;
  
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
  { id: 'studentName', label: 'Student Name', flex:1, align:'center' },
  {
    id: 'courseName',
    label: 'Course Name',
    flex:1,
    align: 'center',
  },
  {
    id: 'marksObtained',
    label: 'Marks Obtained',
    flex:1,
    align: 'center',
  },
  {
    id: 'totalMarks',
    label: 'Total Marks',
    flex:1,
    align: 'center',
  },
  {
    id: 'passingMarks',
    label: 'Passing Marks ',
    flex:1,
    align: 'center',
  },
  {
    id: 'sheet',
    label: 'Sheet',
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

useEffect(() => {

  const fetchStudentResultData = async () => {
    try {
      const response = await fetch(`${Base_url}/studentresult/${examId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.text();
      const res = JSON.parse(result);

      if (res.status === "success") {
        setLoading(false);
        const formattedData = res.data.map((item, index) =>
          createData(
            index + 1,
            item,
            item.examName,
            item.courseName,
            item.teacherName,
            item.testType,
            item.resultDate,
            item.status
          )
        );
        setRows(formattedData);
        setFilteredRows(formattedData);
      }
    } catch (error) {
      console.error("Error fetching result data:", error);
    }
  };

  if (loading) {
    fetchStudentResultData();
  }
}, [loading]);


function createData(si, studentName, courseName, marksObtained, totalMarks, passingMarks, sheet, status  ) {
  return { si, studentName, courseName, marksObtained, totalMarks, passingMarks, sheet, status,  action: (
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
   }

   const handleUpdate = (e) => {
      e.preventDefault();
      setEditData(false)
   }


  return (

    <Box className="container">
      <Search onAddClick={onAddClick} buttonText="Add New Students Result" />
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
         {openData? "Student Result" : viewData ? "View Student Result Details ": editData?"Edit Student Result Details":deleteData?"Delete Student Result Details":null}
      </>}
      
      dialogContent = {
         openData ? <CreateStudentResult handleSubmit={handleSubmit} handleClose={handleClose} /> :
          viewData ? <ViewStudentResult /> : 
         editData ? <EditStudentResult handleUpdate={handleUpdate} handleClose={handleClose} /> : 
         deleteData? <DeleteStudentResult handleDelete={handleDelete} handleClose={handleClose} />:null
        
      }

      />

    </Box>
  );
}

export default StudentResult;

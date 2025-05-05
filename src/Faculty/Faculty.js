import React, { useEffect, useState } from "react";

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
import DeleteFaculty from "./Delete/Delete";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Faculty=()=>
  {
  
    const [deleteId, setDeleteId] = useState(null);
     const [isDeleting, setIsDeleting] = useState(false);
  
    const [deleteData, setDeleteData] = useState(false)

    const [rows, setRows] = useState([]);
      const [loading, setLoading] = useState(true);
    
      const token = Cookies.get("token");
      const Base_url = process.env.REACT_APP_BASE_URL;
      const navigate = useNavigate();
   
   
  
   const handleView = (id) =>
    {
      navigate(`/viewfaculty/${id}`)
    }
  
  const handleEdit = (id) =>
  {
    navigate(`/editfaculty/${id}`)
  }

  const handleShowDelete=(id)=>{
    setDeleteId(id);
    setDeleteData(true)
  }
  
  const handleDelete = () =>
    {
       setIsDeleting(true);
      fetch(`${Base_url}/teacher/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.text())
        .then((result) => {
          const res = JSON.parse(result);
          if (res.status === "success") {
            toast.success("Teacher deleted successfully!");
            setLoading(true);
          } else {
            toast.error(res.message);
          }
          setIsDeleting(false);
          setLoading(true)
          handleClose();
        })
        .catch((error) => {
          console.error("Delete error:", error);
          setIsDeleting(false);
        });
  }
  

const columns = [

  { id: 'si', label: 'SI.No', flex:1, align:'center' },
  { id: 'teacherName', label: 'Teacher Name', flex:1, align:'center' },
  {id: 'courseName',label: 'Course ', flex:1,align: 'center'},
  { id: 'gender',label: 'Gender ', flex:1, align: 'center'},
  {id: 'mobileNo',label: 'Mobile No',flex:1,align: 'center'},
  {id: 'emailId',label: 'Email ID',flex:1,align: 'center'},
  {id: 'experience',label: 'Experience',flex:1,align: 'center'},
  {id: 'qualification',label: 'Qualification',flex:1,align: 'center'},
  {id: 'address',label: 'Address',flex:1,align: 'center'},
  {id: 'joiningDate',label: 'Joining Date',flex:1,align: 'center' },
  {id: 'status',label: 'Status',flex:1,align: 'center' },
  {id: 'action',label: 'Action', flex:1,align: 'center' },
 
];

useEffect(() => {
  const fetchTeacherData = async () => {
    try {
      const response = await fetch(`${Base_url}/teacher`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.text();
      const res = JSON.parse(result);

      console.log("res",res)

      if (res.status === "success") {
        setLoading(false);
        const formattedData = res.data.map((item, index) =>
          createData(
            index + 1,
            item._id,
            item.teacherName,
            item.emailId,
            item.mobileNumber,
            item.dob,
            item.gender,
            item.address,
            item.experience,
            item.qualification,
            item.companyDetails.courseName,
            item.companyDetails.salary,
            new Date(item.companyDetails.joiningDate).toLocaleDateString("en-IN"),
            item.status
          )
        );
        setRows(formattedData);
      }
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };

  if (loading) {
    fetchTeacherData();
  }
}, [loading]);

function createData(si, id, teacherName, emailId, mobileNo, dob, gender, address, experience, qualification, courseName,salary, joiningDate,status ) {
  return { si, id,  teacherName, emailId, mobileNo, dob, gender, address, experience, qualification, courseName,salary, joiningDate,status, action: (
      <>
      <IconButton style={{color:"rgb(13, 33, 121)", padding:"4px", transform:"scale(0.8)"}} onClick={()=>handleView(id)}>
        <VisibilityIcon />
      </IconButton>
      <IconButton style={{color:"rgb(98, 99, 102)", padding:"4px", transform:"scale(0.8)"}} onClick={()=>handleEdit(id)}>
        <EditIcon />
      </IconButton>
      <IconButton style={{color:"rgb(224, 27, 20)", padding:"4px", transform:"scale(0.8)"}} onClick={()=>handleShowDelete(id)}>
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
       navigate("/createfaculty")
    }

    const handleClose = () => {
      setDeleteData(false)
   };



  return (
    <>
        <ToastContainer/>
   
    <Box className="container">
      <Search onAddClick={onAddClick} buttonText="Add Teacher"/>
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
      open={deleteData} 
      onClose={handleClose}
      dialogTitle={ <>
         {deleteData?"Delete Teacher Details":null}
      </>}
      
      dialogContent = {
         deleteData? <DeleteFaculty handleDelete={handleDelete} isDeleting={isDeleting} handleClose={handleClose} />:null
        
      }

      />
    </Box>
    </>
  );
}

export default Faculty;

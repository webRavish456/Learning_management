import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  IconButton,
} from "@mui/material";

import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import ViewStudentsAssignment from "./View/View";
import CreateStudentsAssignment from "./Create/Create";
import EditStudentsAssignment from "./Edit/Edit";
import DeleteStudentsAssignment from "./Delete/Delete";
import Search from "../../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentsAssignment= () => {
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = Cookies.get("token");
  const Base_url = process.env.REACT_APP_BASE_URL;

  const columns = [

    { id: "studentName", label: "Student Name", flex: 1, align: "center" },
    { id: "mobileNumber", label: "Mobile Number", flex: 1, align: "center" },
    { id: "assignmentTitle", label: "Assignment Title", flex: 1, align: "center" },
    { id: "course", label: "Course", flex: 1, align: "center" },
    { id: "teacher", label: "Teacher", flex: 1, align: "center" },
    { id: "dueDate", label: "Due Date", flex: 1, align: "center" },
    { id: "status", label: "Status", flex: 1, align: "center" },
    { id: "action", label: "Action", flex: 1, align: "center" },
  ];

  useEffect(() => {
    const fetchStudentsAssignmentData = async () => {
      try {
        const response = await fetch(`${Base_url}/studentsAssignment`, {
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
              
              item,
              item.studentName,
              item.assignmentTitle,
              item.course,
              item.teacher,
              new Date(item.dueDate).toLocaleDateString("en-IN"),
              item.mobileNumber,
              item.status
            )
          );
          setRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching StudentsAssignment data:", error);
      }
    };

    if (loading) {
      fetchStudentsAssignmentData();
    }
  }, [loading]);

  const createData = ( row, studentName,assignmentTitle,course,teacher,dueDate, mobileNumber,status) => ({
     row,studentName,assignmentTitle,course,teacher,dueDate,mobileNumber, status ,action: (
      <>
        <IconButton
          style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }}
          onClick={() => handleView(row)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }}
          onClick={() => handleEdit(row)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }}
          onClick={() => handleShowDelete(row._id)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  });

  const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setEditShow(true);
  };

  const handleShowDelete = (id) => {
    setDeleteId(id);
    setDeleteShow(true);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    fetch(`${Base_url}/studentsAssignment/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res.status === "success") {
          toast.success("Student Assignment deleted successfully!");
          setLoading(true);
        } else {
          toast.error(res.message);
        }
        setIsDeleting(false);
        handleClose();
      })
      .catch((error) => {
        console.error("Delete error:", error);
        setIsDeleting(false);
      });
  };

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
  };

  const handleCreate = (data) => {
    setLoading(data);
  };

  const handleUpdate = (data) => {
     setLoading(data);
  };

  const onAddClick = () => setOpenData(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <>
      <ToastContainer />
      <Box className="container">
        <Search onAddClick={onAddClick} buttonText="Add New Student's Assignment" />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="studentsAssignment table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ fontWeight: 700 }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => (
                    <TableRow hover role="checkbox" key={idx}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
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
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Create New Student's Assignment"
              : viewShow
              ? "View  Student's Assignment"
              : editShow
              ? "Edit  Student's Assignment"
              : deleteShow
              ? "Delete  Student's Assignment"
              : ""
          }
          dialogContent={
            openData ? (
              <CreateStudentsAssignment handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewStudentsAssignment viewData={viewData} />
            ) : editShow ? (
              <EditStudentsAssignment
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteStudentsAssignment
                handleDelete={handleDelete}
                isDeleting={isDeleting}
                handleClose={handleClose}
              />
            ) : null
          }
        />
      </Box>
    </>
  );
};

export default StudentsAssignment;

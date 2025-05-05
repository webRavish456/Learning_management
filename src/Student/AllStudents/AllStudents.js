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
import Search from "../../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteAllStudent from "./Delete/Delete";
import EditAllStudent from "./Edit/Edit";
import ViewAllStudent from "./View/View";
import CreateAllStudent from "./Create/Create";

const AllStudents = () => {
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);  //new Line 1
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("") //2

  const token = Cookies.get("token");

  const Base_url = process.env.REACT_APP_BASE_URL;

  const columns = [
    { id: "si", label: "SI.No", flex: 1, align: "center" },
    { id: "studentName", label: "Student Name", flex: 1, align: "center" },
    { id: "gender", label: "Gender", flex: 1, align: "center" },
    { id: "mobileNumber", label: "Mobile Number", flex: 1, align: "center" },
    { id: "emailId", label: "Email Id", flex: 1, align: "center" },
    { id: "dob", label: "DOB", flex: 1, align: "center" },
    { id: "address", label: "Address", flex: 1, align: "center" },
    { id: "enrollmentDate", label: "Enrollment Date", flex: 1, align: "center" },
    { id: "course", label: "Course", flex: 1, align: "center" },
    { id: "status", label: "Status", flex: 1, align: "center" },
    { id: "action", label: "Action", flex: 1, align: "center" },
  ];



  useEffect(() => {
    const fetchAllStudentsData = async () => {
      try {
        const response = await fetch(`${Base_url}/allstudents`, {
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
              item.studentName,
              item.gender,
              item.mobileNumber,
              item.emailId,
              new Date(item.dob).toLocaleDateString("en-IN"),
              item.address,
              new Date(item.enrollmentDate).toLocaleDateString("en-IN"),
              item.course,
              item.status
            )
          );
          setRows(formattedData);
          setFilteredRows(formattedData);  
        }
      } catch (error) {
        console.error("Error fetching all students data:", error);
      }
    };



    if (loading) {
      fetchAllStudentsData();
    }
  }, [loading]);

  const createData = (si, row, studentName, gender, mobileNumber, emailId, dob, address, enrollmentDate, course, status) => ({
    si,
    row,
    studentName,
    gender,
    mobileNumber,
    emailId,
    dob,
    address,
    enrollmentDate,
    course,
    status,
    action: (
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


  useEffect(() => {
    const filtered = rows.filter(
      (row) =>
        row.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.emailId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(row.mobileNumber).includes(searchTerm) ||
        String(row.enrollmentDate).includes(searchTerm)
    );
    setFilteredRows(filtered);
  }, [searchTerm, rows]);  

  const handleView = (row) => {
    console.log("row", row)
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
    fetch(`${Base_url}/allstudents/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {

        const res = JSON.parse(result);

        if (res.status === "success") {
          toast.success("Student data deleted successfully!");
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

  const handleCreate = () => {
     setLoading(true);
  };

  const handleUpdate = () => {
    setLoading(true);
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
        {/* Use update search component */}
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={onAddClick}  //Add button action
          buttonText=" Add Students List"
        />

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="branch table">
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
                {filteredRows.length > 0 ? (
                  filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, idx) => (
                      <TableRow hover role="checkbox" key={idx}>
                        {columns.map((column) => (
                          <TableCell key={column.id} align={column.align}>
                            {row[column.id]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      No results found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredRows.length}  //search
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
              ? "Create New Student List"
              : viewShow
                ? "View Student List"
                : editShow
                  ? "Edit Student List"
                  : deleteShow
                    ? "Delete Student List"
                    : ""
          }
          dialogContent={
            openData ? (
              <CreateAllStudent handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewAllStudent viewData={ViewData} />
            ) : editShow ? (
              <EditAllStudent
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteAllStudent
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

export default AllStudents;
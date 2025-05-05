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

import ViewStudentResult from "./View/View";
import CreateStudentResult from "./Create/Create";
import EditStudentResult from "./Edit/Edit";
import DeleteStudentResult from "./Delete/Delete";
import Search from "../../Search/Search";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const StudentResult = () => {

  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const { resultId } = useParams()

  const token = Cookies.get("token");
  const Base_url = process.env.REACT_APP_BASE_URL;

  const columns = [
    { id: 'si', label: 'SI.No', flex: 1, align: 'center' },
    { id: 'studentName', label: 'Student Name', flex: 1, align: 'center' },
    // {
    //   id: 'studentId',
    //   label: 'Student ID',
    //   flex: 1,
    //   align: 'center',
    // },
    // {
    //   id: 'resultId',
    //   label: 'Result ID',
    //   flex: 1,
    //   align: 'center',
    // },
    {
      id: 'courseName',
      label: 'Course Name',
      flex: 1,
      align: 'center',
    },
    {
      id: 'marksObtained',
      label: 'Marks Obtained',
      flex: 1,
      align: 'center',
    },
    {
      id: 'totalMarks',
      label: 'Total Marks ',
      flex: 1,
      align: 'center',
    },
    {
      id: 'passingMarks',
      label: 'Passing Marks ',
      flex: 1,
      align: 'center',
    },
    // {
    //   id: 'sheet',
    //   label: 'Sheet',
    //   flex: 1,
    //   align: 'center',
    // },
    {
      id: 'status',
      label: 'Status',
      flex: 1,
      align: 'center',
    },
    {
      id: 'action',
      label: 'Action',
      flex: 1,
      align: 'center',
    },
  ];

  useEffect(() => {

    const fetchStudentResultData = async () => {
      try {
        const response = await fetch(`${Base_url}/studentresult/${resultId}`, {
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
              item.studentId,
              item.resultId,
              item.courseName,
              item.marksObtained,
              item.totalMarks,
              item.passingMarks,
              item.sheet,
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


  const createData = (si, row, studentName, studentId, resultId, courseName, marksObtained, totalMarks, passingMarks, sheet, status) => ({
    si, row, studentName, studentId, resultId, courseName, marksObtained, totalMarks, passingMarks, sheet, status, action: (
      <>
        <IconButton
          style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }}
          onClick={(e) => { e.stopPropagation(); handleView(row); }}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }}
          onClick={(e) => { e.stopPropagation(); handleEdit(row) }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }}
          onClick={(e) => { e.stopPropagation(); handleShowDelete(row._id) }}
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
        row.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.marksObtained.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  }, [searchTerm, rows]);
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
    fetch(`${Base_url}/studentresult/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res.status === "success") {
          toast.success("Student Result deleted successfully!");
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

  const handleCreate = (refresh = true) => {
    if (refresh) setLoading(true);
    setOpenData(false);
  };

  const handleUpdate = (refresh = true) => {
    if (refresh) setLoading(true);
    setEditShow(false);
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

    <Box className="container">
    <Search onAddClick={onAddClick} buttonText="Add New Students Result" />
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="result table">
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
                {filteredRows.length > 0 ? (
                  filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, idx) => (
                      <TableRow hover role="checkbox" key={idx}>
                        {columns.map((column) => (
                          <TableCell key={column.id} align={column.align} style={{cursor:"pointer"}} onClick={(e) => {
                     
                            handleStudentResult(row.row); 
                          }}>
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
          <>
            {openData
              ? "Create New Student Result"
              : viewData
                ? "View Student Result Details"
                : editData
                  ? "Edit Student Result Details"
                  : deleteShow
                    ? "Delete Student Result Details"
                    : ""}
          </>
        }
        dialogContent={
          openData ? (
            <CreateStudentResult handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <ViewStudentResult viewData={viewData} />
          ) : editShow ? (
            <EditStudentResult
              editData={editData}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          ) : deleteShow ? (
            <DeleteStudentResult
              handleDelete={handleDelete}
              isDeleting={isDeleting}
              handleClose={handleClose}
            />
          ) : null
        }
      />

    </Box>
      
  )

}

export default StudentResult;


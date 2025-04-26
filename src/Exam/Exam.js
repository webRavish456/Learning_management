import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Search from "../Search/Search";
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
  Skeleton,
  Chip,
} from "@mui/material";
import CommonDialog from "../Component/CommonDialog/CommonDialog";
import ViewExam from "./View/View";
import CreateExam from "./Create/Create";
import EditExam from "./Edit/Edit";
import DeleteExam from "./Delete/Delete";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Exam = () => {
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

  const token = Cookies.get("token");
  const Base_url = process.env.REACT_APP_BASE_URL;

  const columns = [
    { id: "si", label: "SI.No", flex: 1, align: "center" },
    { id: "examName", label: "Exam Name", flex: 1, align: "center" },
    {
      id: "courseName",
      label: "Course Name",
      flex: 1,
      align: "center",
    },
    {
      id: "teacherName",
      label: "Teacher Name",
      flex: 1,
      align: "center",
    },
    {
      id: "examDate",
      label: "Exam Date",
      flex: 1,
      align: "center",
    },
    {
      id: "duration",
      label: "Duration",
      flex: 1,
      align: "center",
    },
    {
      id: "testType",
      label: "Test Type",
      flex: 1,
      align: "center",
    },
    {
      id: "totalMarks",
      label: "Total Marks",
      flex: 1,
      align: "center",
    },
    {
      id: "status",
      label: "Status",
      flex: 1,
      align: "center",
    },
    {
      id: "action",
      label: "Action",
      flex: 1,
      align: "center",
    },
  ];

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await fetch(`${Base_url}/exam`, {
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
              item.examDate,
              item.duration,
              item.testType,
              item.totalMarks,
              item.status
            )
          );

          setRows(formattedData);
          setFilteredRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching exam data:", error);
      }
    };

    if (loading) {
      fetchExamData();
    }
  }, [loading]);

  const createData = (
    si,
    row,
    examName,
    courseName,
    teacherName,
    examDate,
    duration,
    testType,
    totalMarks,
    status
  ) => ({
    si,
    row,
    examName,
    courseName,
    teacherName,
    examDate,
    duration,
    testType,
    totalMarks,
    status: (
      <Chip
        label={status === "active" ? "Active" : "Inactive"}
        sx={{
          backgroundColor: status === "active" ? "green" : "red",
          color: "white",
          fontWeight: "bold",
        }}
      />
    ),
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
        row.examName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.testType.toLowerCase().includes(searchTerm.toLowerCase()) 
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
    fetch(`${Base_url}/exam/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res.status === "success") {
          toast.success("Exam deleted successfully!");
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
    <>
      <ToastContainer />

      <Box className="container">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={onAddClick}
          buttonText="Add Exam"
        />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="exam table">
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
                {loading ? (
                  Array.from({ length: rowsPerPage }).map((_, index) => (
                    <TableRow key={index}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {/* <Skeleton width="100%" /> */}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
              ) : filteredRows.length > 0 ? (
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
          count={filteredRows.length}
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
            ? "Create New Exam"
            : viewShow
            ? "View Exam"
            : editShow
            ? "Edit Exam"
            : deleteShow
            ? "Delete Exam"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateExam handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <ViewExam viewData={viewData} />
          ) : editShow ? (
            <EditExam
              editData={editData}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          ) : deleteShow ? (
            <DeleteExam
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

export default Exam;

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
    TableRow ,
    Box,
    IconButton,
} from "@mui/material";

import CreateCourseList from "./Create/Create";
import ViewCourseList from "./View/View";
import EditCourseList from "./Edit/Edit";
import DeleteCourseList from "./Delete/Delete";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import Search from "../../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const CourseList=()=>
  {
    

const [openData, setOpenData] = useState(false);
const [viewShow, setViewShow] = useState(false);
const [editShow, setEditShow] = useState(false);
const [deleteShow, setDeleteShow] = useState(false);

const [viewData, setViewData] = useState(null);
const [editData, setEditData] = useState(null);
const [deleteId, setDeleteId] = useState(null);
const [isDeleting, setIsDeleting] = useState(false);

const [rows, setRows] = useState([]);
const [filteredRows, setFilteredRows]=useState([]);
const [loading, setLoading] = useState(true);

 const [searchTerm, setSearchTerm]= useState("");

const token = Cookies.get("token");
const Base_url = process.env.REACT_APP_BASE_URL;

const columns = [
  { id: "si", label: "SI.No", flex: 1, align: "center" },
  { id: "courseName", label: "Course Name", flex: 1, align: "center" },
  { id: "courseDescription", label: "Course Description", minwidth:180, align: "center" },
  { id: "duration", label: "Duration", flex: 1, align: "center" },
  { id: "pricing", label: "Pricing", flex: 1, align: "center" },
  { id: "syllabus", label: "Syllabus", flex: 1, align: "center" },
  { id: "status", label: "Status", flex: 1, align: "center" },
  { id: "action", label: "Action", flex: 1, align: "center" },
];


useEffect(() => {

  const fetchCourseListData = async () => {
    try {
      const response = await fetch(`${Base_url}/courselist`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.text();
      const res = JSON.parse(result);

      if (res.status === "success") {
     
        const formattedData = res.data.map((item, index) =>
          createData(
            index + 1,
            item,
            item.courseName,
            item.courseDescription,
            item.duration,
            `₹${item.pricing}`,
            item.syllabus,
            item.status
          )
        );
        setRows(formattedData);
        setFilteredRows(formattedData);
      }

      setLoading(false);

    } catch (error) {
      console.error("Error fetching courselist data:", error);
    }
  };

  if (loading) {
    fetchCourseListData();
  }
}, [loading]);

const createData = (si, row, courseName,courseDescription,duration,pricing,syllabus, status) => ({
  si,
  row,
  courseName,
  courseDescription:
    courseDescription.length > 50
      ? `${courseDescription.slice(0, 50)}...`
      : courseDescription,
  duration,
  pricing,
  syllabus,
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
      row.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.duration.toLowerCase().includes(searchTerm.toLowerCase())
    
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
  fetch(`${Base_url}/courselist/${deleteId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.text())
    .then((result) => {
      const res = JSON.parse(result);
      if (res.status === "success") {
        toast.success("Course deleted successfully!");
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

    const handleUpdate = () => {
      setLoading(true);
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


const handleClick = async (pdfUrl) => {
 
  try {

    const response = await fetch(pdfUrl.syllabus);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${pdfUrl.courseName}-syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);

  }
   catch (error) {
    console.error("Failed to download PDF", error);
  }

};


return (
  <>
    <ToastContainer />
    <Box className="container">
      <Search
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
      onAddClick={onAddClick} buttonText="Add Course" />
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
  {filteredRows.length === 0 ? (
    <TableRow>
      <TableCell colSpan={columns.length} align="center">
        No records found
      </TableCell>
    </TableRow>
  ) : (
    filteredRows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, idx) => (
        <TableRow hover role="checkbox" key={idx}>
      {columns.map((column) => (
        <TableCell key={column.id} align={column.align}>
          {column.id === "syllabus" ? (
            
            <img
              onClick={()=>handleClick(row.row)}
              src="/pdf.png"
              alt="item"
              style={{ width: "30px", height: "30px", objectFit: "contain", cursor:"pointer" }}
            />
          ) : (
            row[column.id]
          )}
        </TableCell>
      ))}
    </TableRow>
      ))
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
            ? "Create New Course List"
            : viewShow
            ? "View Course List"
            : editShow
            ? "Edit Course List"
            : deleteShow
            ? "Delete Course List"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateCourseList handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <ViewCourseList viewData={viewData} />
          ) : editShow ? (
            <EditCourseList
              editData={editData}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          ) : deleteShow ? (
            <DeleteCourseList
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
}

export default CourseList;
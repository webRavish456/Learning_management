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
import CommonDialog from "../Component/CommonDialog/CommonDialog";

import Search from "../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteScheduling from "./Delete/Delete";
import EditScheduling from "./Edit/Edit";
import ViewScheduling from "./View/View";
import CreateScheduling from "./Create/Create";

const Scheduling = () => {

  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [filteredRows, setFilteredRows] = useState([]); //filtered rows 1
  const [isDeleting, setIsDeleting] = useState(false);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = Cookies.get("token");
  const [searchTerm, setSearchTerm] = useState("") //searchterm
  const Base_url = process.env.REACT_APP_BASE_URL;


  const columns = [
    {
      id: 'si',
      label: 'SI.No',
      flex: 1,
      align: 'center'

    },
    {
      id: 'courseName',
      label: 'Course Name',
      flex: 1,
      align: 'center'
    },
    {
      id: 'teacherName',
      label: 'Teacher Name',
      flex: 1,
      align: 'center',
    },
    {
      id: 'startTiming',
      label: 'Start Timing',
      flex: 1,
      align: 'center',
    },
    {
      id: 'lastTiming',
      label: 'Last Timing',
      flex: 1,
      align: 'center',
    },
    {
      id: 'workDays',
      label: 'Work Days',
      flex: 1,
      align: 'center',
    },

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
    const fetchSchedulingData = async () => {
      try {
        const response = await fetch(`${Base_url}/timetable`, {
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
              item.courseName,
              item.teacherName,
              item.startTiming,
              item.lastTiming,
              item.workDays,
              item.status
            )
          );
          setRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching scheduling data:", error);
      }
    };

    if (loading) {
      fetchSchedulingData();
    }
  }, [loading]);


  const createData = (si, row, courseName, teacherName, startTiming, lastTiming, workDays, status) => ({


    si, row, courseName, teacherName, startTiming, lastTiming, workDays, status, action: (
      <>
        <IconButton style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleView(row)}>
          <VisibilityIcon />
        </IconButton>
        <IconButton style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleEdit(row)}>
          <EditIcon />
        </IconButton>
        <IconButton style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }} onClick={() => handleShowDelete(row._id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  });

  //Automatically filter rows based on search term
  useEffect(() => {
    const filtered = rows.filter(
      (row) =>
        // row.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||  //1st method
        (row.courseName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||   //2nd method
        (row.teacherName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (row.status || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  }, [searchTerm, rows]);  //Dependencies ensure filtering happens dynamically 


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
    fetch(`${Base_url}/timetable/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res.status === "success") {
          toast.success("Scheduling deleted successfully!");
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
        {/* Use update search component */}
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={onAddClick}  //Add button action
          buttonText=" Add Scheduling"
        />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="scheduling table">
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
              ? "Create New Scheduling"
              : viewShow
                ? "View Scheduling"
                : editShow
                  ? "Edit Scheduling"
                  : deleteShow
                    ? "Delete Scheduling"
                    : ""
          }
          dialogContent={
            openData ? (
              <CreateScheduling handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewScheduling viewData={viewData} />
            ) : editShow ? (
              <EditScheduling
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteScheduling
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

export default Scheduling;

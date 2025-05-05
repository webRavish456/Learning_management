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
  duration,
} from "@mui/material";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";

import Search from "../../Search/Search";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteCertificate from "./Delete/Delete";
import EditCertificate from "./Edit/Edit";
import ViewCertificates from "./View/View";
import CreateCertificate from "./Create/Create";

const Certificates = () => {

  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]); //filtered rows 1
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
      id: 'studentName',
      label: 'Student Name',
      flex: 1,
      align: 'center'
    },
    {
      id: 'courseName',
      label: 'Course Name',
      flex: 1,
      align: 'center',
    },
    {
      id: 'duration',
      label: 'Duration',
      flex: 1,
      align: 'center',
    },
    {
      id: 'certificates',
      label: 'Certificate',
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
    const fetchCertificatesData = async () => {
      try {
        const response = await fetch(`${Base_url}/certificates`, {
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
              item.studentName,
              item.courseName,
              item.duration,
              item.certificates,
              item.status
            )
          );
          setRows(formattedData);
          setFilteredRows(formattedData); 
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certificate data:", error);
      }
    };

    if (loading) {
      fetchCertificatesData();
    }
  }, [loading]);


  const createData = (si, row, studentName, courseName, duration, certificates, status) => ({


    si, row, studentName, courseName, duration, certificates, status, action: (
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

  useEffect(() => {
    const filtered = rows.filter(
      (row) =>
        // row.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||  //1st method
        (row.studentName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||   //2nd method
        (row.courseName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (row.certificates || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (row.status || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  }, [searchTerm, rows]);  //Dependencies ensure filtering happens dynamically 


  const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleClick = async (pdfUrl) => {
 
    try {
  
      const response = await fetch(pdfUrl.certificates);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${pdfUrl.courseName}-certificates.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
  
    }
     catch (error) {
      console.error("Failed to download PDF", error);
    }
  
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
    fetch(`${Base_url}/certificates/${deleteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        const res = JSON.parse(result);
        if (res.status === "success") {
          toast.success("Certificate deleted successfully!");
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
        {/* Use update search component */}
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={onAddClick}  //Add button action
          buttonText=" Add Certificates"
        />

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="certificates table">
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
                    {column.id === "certificates" ? (
                      
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
            count={filteredRows.length}  //filteredrows.length
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
              ? "Create New Certificate"
              : viewShow
                ? "View Certificate"
                : editShow
                  ? "Edit Certificate"
                  : deleteShow
                    ? "Delete Certificate"
                    : ""
          }
          dialogContent={
            openData ? (
              <CreateCertificate handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewCertificates viewData={viewData} />
            ) : editShow ? (
              <EditCertificate
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteCertificate
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

export default Certificates;

import React, { useState } from "react";

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
    // Dialog,
    // DialogTitle,
    // DialogActions,
    // DialogContent,
    // DialogContentText,
    // TextField,
    // Button,
    // MenuItem,
    // Select,
    // FormControl,
    // InputLabel,
    // Grid,
    // useMediaQuery,
} from "@mui/material";
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCertificate from "./Create/Create";
import ViewCertificates from "./View/View";
import EditCertificate from "./Edit/Edit";
import DeleteCertificate from "./Delete/Delete";
import Search from "../../Search/Search";

const Certificates = () => {

    const [openData, setOpenData] = useState(false)

    const [viewData, setViewData] = useState(false)

    const [editData, setEditData] = useState(false)

    const [deleteData, setDeleteData] = useState(false)

    const handleView = () => {
        setViewData(true)
    }

    const handleEdit = () => {
        setEditData(true)
    }

    const handleDelete = () => {
        setDeleteData(true)
    }


    const columns = [
        { id: 'si', label: 'SI.No', flex: 1, align: 'center' },

        { id: 'student_name', label: 'Student Name', flex: 1, align: 'center' },

        { id: 'course_name', label: 'Course Name', flex: 1, align: 'center', },

        { id: 'duration', label: 'Duration', flex: 1, align: 'center', },

        { id: 'certificate', label: 'Certificate', flex: 1, align: 'center', },

        { id: 'action', label: 'Action', flex: 1, align: 'center', },

    ];

    function createData(si, student_name, course_name, duration, certificate) {
        return {
            si, student_name, course_name, duration, certificate, action: (
                <>
                    <IconButton style={{ color: "#072eb0", padding: "4px", transform: "scale(0.8)" }} onClick={handleView}>
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton style={{ color: "#6b6666", padding: "4px", transform: "scale(0.8)" }} onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton style={{ color: "#e6130b", padding: "4px", transform: "scale(0.8)" }} onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        };
    }


    const rows = [
        createData('1', 'Nandini', 'Full Stack', '6-Month', 'Completed')
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

    const onAddClick = () => {
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
            <Search onAddClick={onAddClick} buttonText="Add Certificates" />
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
                dialogTitle={<>
                    {openData ? "Create New Certificate" : viewData ? "View Certificate " : editData ? "Edit Certificate" : deleteData ? "Delete Certificate" : null}
                </>}

                dialogContent={
                    openData ? <CreateCertificate handleSubmit={handleSubmit} handleClose={handleClose} /> :
                        viewData ? <ViewCertificates /> :
                            editData ? <EditCertificate handleUpdate={handleUpdate} handleClose={handleClose} /> :
                                deleteData ? <DeleteCertificate handleDelete={handleDelete} handleClose={handleClose} /> : null

                }

            />

        </Box>
    );
}

export default Certificates;

import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// import CloseIcon from "@mui/icons-material/Close";




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
import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import ViewDiscount from "./View/View";
import CreateDiscount from "./Create/Create";
import EditDiscount from "./Edit/Edit";
import DeleteDiscount from "./Delete/Delete";
import Search from "../../Search/Search";

const AllAssignment = () => {

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
        { id: 'si',
             label: 'SI.No',
              flex: 1, 
              align: 'center' },
        { 
            id: 'assignment_title',
             label: 'Assignment Title',
              flex: 1,
               align: 'center'
             },
        {
            id: 'teacher',
            label: 'Teacher',
            flex: 1,
            align: 'center',
        },
        {
            id: 'due_date',
            label: 'Due Date',
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

    function createData(si, assignment_title, teacher, due_date, status) {
        return {
            si, assignment_title, teacher, due_date,status, action: (

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
        createData('1', 'Learning Management', 'Ravish', '12-04-25', 'Active')
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
            <Search onAddClick={onAddClick} buttonText="Add Assignment" />
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
                    {openData ? "Create New Assignment" : viewData ? "View Assignment Details" : editData ? "Edit Assignment Details" : deleteData ? "Delete Assignment Details" : null}
                </>}

                dialogContent={
                    openData ? <CreateDiscount handleSubmit={handleSubmit} handleClose={handleClose} /> :
                        viewData ? <ViewDiscount /> :
                            editData ? <EditDiscount handleUpdate={handleUpdate} handleClose={handleClose} /> :
                                deleteData ? <DeleteDiscount handleDelete={handleDelete} handleClose={handleClose} /> : null

                }

            />

        </Box>
    );
}

export default AllAssignment;

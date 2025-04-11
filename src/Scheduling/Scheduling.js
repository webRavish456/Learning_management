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
import CommonDialog from "../Component/CommonDialog/CommonDialog";
import ViewScheduling from "./View/View";
import CreateScheduling from "./Create/Create";
import EditScheduling from "./Edit/Edit";
import DeleteScheduling from "./Delete/Delete";
import Search from "../Search/Search";

const Scheduling = () => {

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
        { id: 'coursename', label: 'Course Name', flex: 1, align: 'center' },
        {
            id: 'teachername',
            label: 'Teacher Name',
            flex: 1,
            align: 'center',
        },
        {
            id: 'starttiming',
            label: 'Start Timing',
            flex: 1,
            align: 'center',
        },
        {
            id: 'lasttiming',
            label: 'Last Timing',
            flex: 1,
            align: 'center',
        },
        {
            id: 'workdays',
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

    function createData(si, coursename, teachername, starttiming, lasttiming,workdays, status) {
        return {
            si, coursename, teachername, starttiming, lasttiming,workdays, status, action: (

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
        createData('1', 'Full stack', 'Ravish', '10:30am', '3:00pm', 'Monday', 'Active')
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
            <Search onAddClick={onAddClick} buttonText="Add Schedule" />
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
                    {openData ? "Create Schedule" : viewData ? "View Schedule" : editData ? "Edit Schedule" : deleteData ? "Delete Schedule" : null}
                </>}

                dialogContent={
                    openData ? <CreateScheduling handleSubmit={handleSubmit} handleClose={handleClose} /> :
                        viewData ? <ViewScheduling /> :
                            editData ? <EditScheduling handleUpdate={handleUpdate} handleClose={handleClose} /> :
                                deleteData ? <DeleteScheduling handleDelete={handleDelete} handleClose={handleClose} /> : null

                }

            />

        </Box>
    );
}

export default Scheduling;
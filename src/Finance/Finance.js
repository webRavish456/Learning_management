<<<<<<< HEAD
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import Search from "../Search/Search";


const columns = [
  { id: 'si', label: 'SI.No', flex:1, align:'center' },
  { id: 'name', label: 'Name', flex:1, align:'center' },
  {
    id: 'amount',
    label: 'Amount',
    flex:1,
    align: 'center',
  },
  {
    id: 'transactiontype',
    label: 'Transaction Type',
    flex:1,
    align: 'center',
  },
  {
    id: 'category',
    label: 'Category',
    flex:1,
    align: 'center',
  },
  {
    id: 'paymentmode',
    label: 'Payment mode',
    flex:1,
    align: 'center',
  },
  {
    id: 'transactiondate',
    label: 'Transaction Date',
    flex:1,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    flex:1,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Action',
    flex:1,
    align: 'center',
  },
];

function createData(si, name, amount, transactiontype, category, paymentmode, transactiondate, status ) {
  return { si, name, amount, transactiontype, category, paymentmode, transactiondate, status, action: (
      <>
      <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
        <VisibilityIcon />
      </IconButton>
      <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
        <EditIcon />
      </IconButton>
      <IconButton style={{color:"#000", padding:"4px", transform:"scale(0.8)"}}>
        <DeleteIcon />
      </IconButton>
      </>
    ),
   };
}


const rows = [
  createData('1', 'Ravish', '10000', 'Income', 'Salary', 'Cash', '12/03/2025', 'completed'),
//   createData('2', 'Goldie', 'goldie@gmail.com', '1234567891', '2000-02-02', 'Female', 'JSR', '2023-01-02', 'Science', 'Inactive'),
//   createData('3', 'Nandani', 'nandani@gmail.com', '1234567892', '1999-03-03', 'Female', 'JSR', '2023-01-03', 'History', 'Active'),
//   createData('4', 'Manisha', 'manisha@gmail.com', '1234567893', '1998-04-04', 'Female', 'JSR', '2023-01-04', 'English', 'Inactive'),
//   createData('5', 'Aastha', 'aastha@gmail.com', '1234567894', '1997-05-05', 'Female', 'JSR', '2023-01-05', 'Computer Science', 'Active'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (

    <Box className="container">
      <Search />
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
    </Box>
  );
}
=======
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Search from  "../Search/Search";
import { Box } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns = [
    { id: "SI_no", 
        label: "SI NO.",
         flex: 1,
         align:"center",
         format: (value) => value.toFixed(2) },

    { id: "name",
         label: "Name",
          flex: 1, 
          align: "center",
          format: (value) => value.toFixed(2) },

    { id: "amount",
         label: "Amount",
          flex: 1,
           align: "center",
           format: (value) => value.toFixed(2)},

    { id: "transaction_type",
         label: "Teansaction_Type",
          flex: 1,
           align: "center",
           format: (value) => value.toFixed(2)},

    { id: "category",
        label: "Category",
         flex: 1,
          align: "center",
          format: (value) => value.toFixed(2)},

    { id: "payment_mode",
         label: "Payment_Mode",
          flex: 1, 
          align: "center",
          format: (value) => value.toFixed(2)},

    { id: "transaction_date",
         label: "Transaction_Date",
          flex: 1,
           align: "center",
           format: (value) => value.toFixed(2) },

    { id: "status",
         label: "Status",
          flex: 1, 
          align: "center ",
          format: (value) => value.toFixed(2)},


    { id: "action", 
        label: "Action", 
        flex: 1,
         align: "center",
         format: (value) => value.toFixed(2) },
];

function createData(
    SI_no,
    Name,
    Amount,
    Transaction_Type,
    Cetegory,
    Payment_Mode,
    Transaction_Date,
    status,
    Action,
) {
    return {
      SI_no,
      Name,
      Amount,
      Transaction_Type,
      Cetegory,
      Payment_Mode,
      Transaction_Date,
      status,
      Action
    };
}

const rows = [
    createData(
        "1",
        "Goldi",
        "10000",
        "Income/Expense",
        "Salary, Payment, Rent, Utilities",
        "Cash, Bank_Transfer, UPI, Cradit_Card",
        "12/03/2025",
        "Pading, completed, cancelled",
        "View, Edit, Delete",
    ),

];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0); // Reset to first page when rows per page changes
    };

    const handleDelete = (id) => {
        console.log("Delete item with ID:", id);
        // You can perform your delete logic here
    };

    const handleEdit = (id) => {
        console.log("Edit item with ID:", id);
        // You can open a modal or perform your edit logic here
    };

    const handleView = (id) => {
        console.log("View item with ID:", id);
        // You can show more details of the item here
    };

    return (
        < Box className="container">
            <Search/>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer
                className="table"
                sx={{ maxHeight: 400 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: "900"
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Adjust row slice based on page and rowsPerPage
                            .map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.SI_no}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === "action" ? (
                                                    <div>
                                                        <IconButton
                                                            onClick={() => handleView(row.SI_no)}
                                                            color="black"
                                                        >
                                                            <VisibilityIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            onClick={() => handleEdit(row.SI_no)}
                                                            color="black"
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            onClick={() => handleDelete(row.SI_no)}
                                                            color="black"
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </div>
                                                ) : column.format && typeof value === "number" ? (
                                                    column.format(value)
                                                ) : (
                                                    value
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]} // Added more options for rows per page
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </Box>
    );
}
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523

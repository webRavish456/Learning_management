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


//const Student=()=>
  // {
const columns = [
  { id: 'si', label: 'SI.No', flex:1, align:'center' },
  { id: 'name', label: 'Name', flex:1, align:'center' },
  {
    id: 'email',
    label: 'Email',
    flex:1,
    align: 'center',
  },
  {
    id: 'mobileno',
    label: 'MobileNo',
    flex:1,
    align: 'center',
  },
  {
    id: 'dob',
    label: 'Dob',
    flex:1,
    align: 'center',
  },
  {
    id: 'gender',
    label: 'Gender',
    flex:1,
    align: 'center',
  },
  {
    id: 'address',
    label: 'Address',
    flex:1,
    align: 'center',
  },
  {
    id: 'enrollmentdate',
    label: 'EnrollmentDate',
    flex:1,
    align: 'center',
  },
  {
    id: 'course',
    label: 'Course',
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

function createData(si, name, email, mobileno, dob, gender, address, enrollmentdate, course, status, ) {
  return { si, name, email, mobileno, dob, gender, address, enrollmentdate, course, status, action: (
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
  createData('1', 'Ayushi', 'ayushi@gmail.com', '1234567890', '2001-01-01', 'Female', 'JSR', '2023-01-01', 'Math', 'Active'),
  createData('2', 'Goldie', 'goldie@gmail.com', '1234567891', '2000-02-02', 'Female', 'JSR', '2023-01-02', 'Science', 'Inactive'),
  createData('3', 'Nandani', 'nandani@gmail.com', '1234567892', '1999-03-03', 'Female', 'JSR', '2023-01-03', 'History', 'Active'),
  createData('4', 'Manisha', 'manisha@gmail.com', '1234567893', '1998-04-04', 'Female', 'JSR', '2023-01-04', 'English', 'Inactive'),
  createData('5', 'Aastha', 'aastha@gmail.com', '1234567894', '1997-05-05', 'Female', 'JSR', '2023-01-05', 'Computer Science', 'Active'),
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

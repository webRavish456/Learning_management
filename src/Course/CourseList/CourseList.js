import React, { useEffect, useState } from "react";
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
    TableRow ,
    Box,
    // Dialog,
    // DialogTitle,
    // DialogActions,
    // DialogContent,
    // DialogContentText,
    // TextField,
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
    
//     const [openData, setOpenData] = useState(false)
  
//     const [viewData, setViewData] = useState(false)
  
//     const [editData, setEditData] = useState(false)
  
//     const [deleteData, setDeleteData] = useState(false)
  
//    const handleView = () =>
//     {
//       setViewData(true)
//     }
  
//   const handleEdit = () =>
//   {
//      setEditData(true)
//   }
  
//   const handleDelete = () =>
//     {
//       setDeleteData(true)
//     }
  

// const columns = [
//   { id: 'si', label: 'SI.No', flex:1, align:'center' },
//   {
//     id: 'coursename',
//     label: 'Course Name',
//     flex:1,
//     align: 'center',
//   },
//   {
//     id: 'coursedescription',
//     label: 'Course Description',
//     flex:1,
//     align: 'center',
//   },
//   {
//     id: 'duration',
//     label: 'Duration ',
//     flex:1,
//     align: 'center',
//   },
//   {
//     id: 'pricing',
//     label: 'Pricing ',
//     flex:1,
//     align: 'center',
//   },

//    {
//     id: 'syllabus',
//     label: 'Syllabus ',
//     flex:1,
//     align: 'center',
//   },
//   {
//     id: 'action',
//     label: 'Action',
//     flex:1,
//     align: 'center',
//   },
// ];

// function createData(si,coursename,coursedescription,duration,pricing,syllabus ) {
//   return { si,coursename,coursedescription,duration,pricing,syllabus , action: (
//       <>
//       <IconButton
//           style={{ color: "blue", padding: "4px", transform: "scale(0.8)" }}
//           onClick={handleView}
//         >
//           <VisibilityIcon />
//         </IconButton>
//         <IconButton
//           style={{ color: "grey", padding: "4px", transform: "scale(0.8)" }}
//           onClick={handleEdit}
//         >
//           <EditIcon />
//         </IconButton>
//         <IconButton
//           style={{ color: "red", padding: "4px", transform: "scale(0.8)" }}
//           onClick={handleDelete}
//         >
//           <DeleteIcon />
//         </IconButton>
//       </>
//     ),
//    };
// }


// const rows = [
//   createData('1', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('2', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('3', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('4', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('5', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('6', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('7', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('8', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('9', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('10', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('11', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('12', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('13', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('14', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('15', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('16', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('17', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('18', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('19', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus'),
//   createData('20', 'BCA', 'Bachelor Of Computer Application', '3 years',  '3000', 'BCA Syllabus')




//   // createData('2', 'Goldie', 'goldie@gmail.com', '1234567891', '2000-02-02', 'Female', 'JSR', '2023-01-02', 'Science', 'Inactive'),
//   // createData('3', 'Nandani', 'nandani@gmail.com', '1234567892', '1999-03-03', 'Female', 'JSR', '2023-01-03', 'History', 'Active'),
//   // createData('4', 'Manisha', 'manisha@gmail.com', '1234567893', '1998-04-04', 'Female', 'JSR', '2023-01-04', 'English', 'Inactive'),
//   // createData('5', 'Aastha', 'aastha@gmail.com', '1234567894', '1997-05-05', 'Female', 'JSR', '2023-01-05', 'Computer Science', 'Active'),
// ];

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const onAddClick =()=>
//     {
//       setOpenData(true)
//     }

//     const handleClose = () => {
//       setEditData(false)
//       setViewData(false)
//       setOpenData(false)
//       setDeleteData(false)
//    };

//    const handleSubmit = (e) => {
//      e.preventDefault();
//      setOpenData(false)
//      // console.log("Form Data Submitted:", formData);
//    }

//    const handleUpdate = (e) => {
//       e.preventDefault();
//       setEditData(false)
//    }


//   return (

//     <Box className="container">
//       {/* <Box>Course-List</Box> */}
//       <Search onAddClick={onAddClick} buttonText=' Add New Course'/>
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{overflowX:"auto", maxWidth: 1070 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth, fontWeight:700 }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>

//     <CommonDialog
//       open={openData || viewData || editData || deleteData} 
//       onClose={handleClose}
//       dialogTitle={ <>
//          {openData? "CourseList" : viewData ? "View CourseList Details ": editData?"Edit CourseList Details":deleteData?"Delete CourseList Details":null}
//       </>}
      
//       dialogContent = {
//          openData ? <CreateCourseList handleSubmit={handleSubmit} handleClose={handleClose} /> :
//           viewData ? <ViewCourseList /> : 
//          editData ? <EditCourseList handleUpdate={handleUpdate} handleClose={handleClose} /> : 
//          deleteData? <DeleteCourseList handleDelete={handleDelete} handleClose={handleClose} />:null
        
//       }

//       />

//     </Box>
//   );
const [openData, setOpenData] = useState(false);
const [viewShow, setViewShow] = useState(false);
const [editShow, setEditShow] = useState(false);
const [deleteShow, setDeleteShow] = useState(false);

const [viewData, setViewData] = useState(null);
const [editData, setEditData] = useState(null);
const [deleteId, setDeleteId] = useState(null);
const [isDeleting, setIsDeleting] = useState(false);

const [rows, setRows] = useState([]);
const [filteredRows, setFilteredRows]=useState([]);//line 1
const [loading, setLoading] = useState(true);

 const [searchTerm, setSearchTerm]= useState("");//2

const token = Cookies.get("token");
const Base_url = process.env.REACT_APP_BASE_URL;

const columns = [
  { id: "si", label: "SI.No", flex: 1, align: "center" },
  { id: "courseName", label: "Course Name", flex: 1, align: "center" },
  { id: "courseDescription", label: "Course Description", flex: 1, align: "center" },
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
       console.log(FormData)
      if (res.status === "success") {
        setLoading(false);
        const formattedData = res.data.map((item, index) =>
          createData(
            index + 1,
            item,
            item.courseName,
            item.courseDescription,
            item.duration,
            item.pricing,
            item.syllabus,
            item.status
          )
        );
        setRows(formattedData);
        setFilteredRows(formattedData);//4 initialize filterRows with all data
      }
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
  courseDescription,
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

// 5 Automatically filter rows based on search term 
useEffect(() => {
  const filtered = rows.filter(
    (row) =>
      row.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.duration.toLowerCase().includes(searchTerm.toLowerCase())
    
  );
  setFilteredRows(filtered);
}, [searchTerm, rows]); //6  dependencies ensure filtering happens dynamically




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
              {row[column.id]}
            </TableCell>
          ))}
        </TableRow>
      ))
  )}
</TableBody>

            {/* <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => (
                  <TableRow hover role="checkbox" key={idx}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {row[column.id]}
                      </TableCell> // add img src in particular row
                    ))}
                  </TableRow>
                ))}
            </TableBody> */}
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
            ? "Create New CourseList"
            : viewShow
            ? "View CourseList"
            : editShow
            ? "Edit CourseList"
            : deleteShow
            ? "Delete CourseList"
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
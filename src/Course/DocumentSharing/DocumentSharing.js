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

import CommonDialog from "../../Component/CommonDialog/CommonDialog";
import Search from "../../Search/Search";
import CreateDocumentSharing from "./Create/Create";
import ViewDocumentSharing from "./View/View";
import EditDocumentSharing from "./Edit/Edit";
import DeleteDocumentSharing from "./Delete/Delete";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DocumentSharing=()=>
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
//     id: 'coursetitle',
//     label: 'Course Title',
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
//     id: 'teacher',
//     label: 'Teacher ',
//     flex:1,
//     align: 'center',
//   },
//   {
//     id: 'document',
//     label: 'Document ',
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

// function createData(si,coursetitle,coursedescription,teacher,document, ) {
//   return { si,coursetitle,coursedescription,teacher,document , action: (
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
//   createData('1', 'UG', 'Bachelor Of Computer Application', 'Ravish Sir','Schedule')
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
//       {/* <Box>Document-Sharing</Box> */}
//       <Search onAddClick={onAddClick } buttonText=' Add New Document'/>
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
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
//          {openData? "Document Sharing" : viewData ? "View Document Sharing Details ": editData?"Edit Document Sharing Details":deleteData?"Delete Document Sharing Details":null}
//       </>}
      
//       dialogContent = {
//          openData ? <CreateDocumentSharing handleSubmit={handleSubmit} handleClose={handleClose} /> :
//           viewData ? <ViewDocumentSharing  /> : 
//          editData ? <EditDocumentSharing handleUpdate={handleUpdate} handleClose={handleClose} /> : 
//          deleteData? <DeleteDocumentSharing handleDelete={handleDelete} handleClose={handleClose} />:null
        
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
  { id: "courseTitle", label: "Course Title", flex: 1, align: "center" },
  { id: "courseDescription", label: "Course Description", flex: 1, align: "center" },
  { id: "teacher", label: "Teacher", flex: 1, align: "center" },
  { id: "document", label: "Document", flex: 1, align: "center" },
  { id: "status", label: "Status", flex: 1, align: "center" },
  { id: "action", label: "Action", flex: 1, align: "center" },
];

useEffect(() => {
  const fetchDocumentSharingData = async () => {
    try {
      const response = await fetch(`${Base_url}/documentsharing`, {        method: "GET",
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
            item.courseTitle,
            item.courseDescription,
            item.teacher,
            item.document,
            item.status
          )
        );
        setRows(formattedData);
        setFilteredRows(formattedData);//4 initialize filterRows with all data
      }
    } catch (error) {
      console.error("Error fetching documentsharing  data:", error);
    }
  };

  if (loading) {
    fetchDocumentSharingData();
  }
}, [loading]);

const createData = (si, row, courseTitle,courseDescription,teacher,document, status) => ({
  si,
  row,
  courseTitle,
  courseDescription,
  teacher,
  document,
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
      row.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    
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
        toast.success("Document deleted successfully!");
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
      onAddClick={onAddClick} buttonText="Add Document" />
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
            ? "Create New Document"
            : viewShow
            ? "View Document"
            : editShow
            ? "Edit Document"
            : deleteShow
            ? "Delete Document"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateDocumentSharing handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <ViewDocumentSharing viewData={viewData} />
          ) : editShow ? (
            <EditDocumentSharing
              editData={editData}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          ) : deleteShow ? (
            <DeleteDocumentSharing
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

export default DocumentSharing;
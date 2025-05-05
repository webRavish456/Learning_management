import { Box, Button, CircularProgress } from "@mui/material";
import React from "react"

const DeleteFaculty = ({handleClose, isDeleting, handleDelete}) =>
{
     return (
     <>
           <Box sx={{ width: '400px', bgcolor: 'background.paper',textAlign:'flex-end' }}>
             Are you sure want to delete?
           </Box>
           <Box className="submit" sx={{ display: "flex", gap: 1, marginTop: 2, justifyContent: "flex-end", width: 500, margin: '20px 0px 0px'}}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleDelete} className="delete_button" >
            {isDeleting ? ( <>
            <CircularProgress
            size={18}
            style={{ marginRight: 8, color: "#fff" }}
             /> 
              Deleting
             </> 
            )   : 
               "Delete"
           }
            </Button>
            </Box>
     </>
     )
}

export default DeleteFaculty;
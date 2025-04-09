import { Box, Button } from "@mui/material";
import React from "react"

const DeleteResult = ({handleClose, handleDelete}) =>
{
     return (
     <>
           <Box>
             Are you sure want to delete?
           </Box>
           <Box className="submit" sx={{ display: "flex", gap: 1, marginTop: 2, justifyContent: "flex-end", width: 500 }}>
            <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
            <Button onClick={handleDelete} className="delete_button" >
              Delete
            </Button>
            </Box>
     </>
     )
}

export default DeleteResult;
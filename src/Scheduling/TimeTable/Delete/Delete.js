import { Box, Button } from "@mui/material";
import React from "react"

const DeleteTimeTable = ({ handleClose, handleDelete }) => {
    return (
        <>
            <Box sx={{ height: '40px', width: '500px' }}>
                Are you sure want to delete?
            </Box>
            <Box className="submit" sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', margin: '20px' }}>
                <Button onClick={handleClose} className="secondary_button" >Cancel</Button>
                <Button onClick={handleDelete} style={{ color: "white", background: "red" }}>
                    Delete
                </Button>
            </Box>
        </>
    )
}

export default DeleteTimeTable;
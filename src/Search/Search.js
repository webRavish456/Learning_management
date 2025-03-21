import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Search = ({ searchTerm, setSearchTerm, onAddClick }) => {
<<<<<<< HEAD
  return (

    <Box
      style={{ display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "center",
        gridColumnGap: "20px", marginBottom: "10px"}}

    >
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon style={{ marginRight: 0 }}/>,
        }}
        className="search"
      />
      <Box className="buttonContainer">
        <Button variant="contained" color="primary" className="primary_button"><AddIcon/>
        Add New
        </Button>
      </Box>
    </Box>

  );
=======
    return (

        <Box

            style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                alignItems: "center",
                gridColumnGap: "20px", marginBottom: "10px"
            }}

        >

            <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    endAdornment: <SearchIcon style={{ marginRight: 0 }} />,
                }}
                className="search"
            />
            <Box className="buttonContainer">
                <Button variant="contained" color="primary" className="primary_button" startIcon={<AddIcon />} onClick={onAddClick}>
                    Add New
                </Button>
            </Box>
        </Box>

    );
>>>>>>> 658a5d86fb9b60f4b37251412fc13d448935d523
};

export default Search;
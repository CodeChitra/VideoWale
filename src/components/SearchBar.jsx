import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`search/${searchTerm}`);
        setSearchTerm("");
    }
    return (
        <Paper
            component={"form"}
            elevation={0}
            sx={{ pl: "20px", borderRadius: "20px", mr: { sm: 5 } }}
            onSubmit={handleSubmit}
        >
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search A Video...' style={{ border: "none", outline: "none" }} value={searchTerm} />
            <IconButton type="submit" sx={{ padding: "10px", color: "red" }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar

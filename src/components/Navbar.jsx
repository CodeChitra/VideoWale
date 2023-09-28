import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => {
    return (
        <Stack
            direction="row"
            p={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ backgroundColor: "#000", color: "#fff", position: "sticky", top: "0px", zIndex: 1 }}
        >
            <Link to="/" style={{ display: "flex", alignItems: "center", color: "#fff" }}>
                <img src={logo} alt="logo" height={45} />
                <Typography variant='h6' sx={{ ml: 1, display: { xs: "none", sm: "block" } }}>Video<span>Wale</span></Typography>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar

import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '../components/';
import { fetchData } from '../utils/fetchData';

const SearchFeed = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchData(`search?part=snippet&q=${searchTerm}`)
            .then(data => setVideos(data.items))
            .catch(err => console.log("ERROR AA GYI HAI!", err));
    }, [searchTerm])
    return (
        <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                Search Results For: <span style={{ color: "#FC1503" }}>{searchTerm}</span>
            </Typography>

            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed

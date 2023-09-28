import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Sidebar, Videos } from '../components/';
import { fetchData } from '../utils/fetchData';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchData(`search?part=snippet&q=${selectedCategory}`)
            .then(data => setVideos(data.items))
            .catch(err => console.log(err));
    }, [selectedCategory])
    return (
        <Stack
            sx={{ flexDirection: { sx: "column", md: "row" } }}
        >
            <Box
                sx={{ height: { sx: "auto", md: "90vh" }, borderRight: "2px solid red", px: { sx: 0, md: 2 } }}
            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography
                    className='copyright'
                    variant='body2'
                >
                    Copyright to codechitra pvt ltd
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    New <span style={{ color: "#FC1503" }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed

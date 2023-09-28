import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from "./components";
import { Feed, ChannelDetail, VideoDetail, SearchFeed } from "./pages";
import { Box } from '@mui/material'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Feed />} />
          <Route path='video/:id' element={<VideoDetail />} />
          <Route path='channel/:id' element={<ChannelDetail />} />
          <Route path='search/:searchTerm' element={<SearchFeed />} />
        </Route>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App

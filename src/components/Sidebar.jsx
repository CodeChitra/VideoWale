import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {


    return (
        <Stack direction={"row"} sx={{ flexDirection: { md: "column" }, overflow: 'auto', height: { sx: "auto", md: "95%" } }}>
            {categories.map(cat => {
                return <button onClick={() => setSelectedCategory(cat.name)} key={cat.name} type='button' className='category-btn' style={{ color: "#fff" }}>
                    <span style={{ color: cat.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{cat.icon}</span>
                    <span style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}>{cat.name}</span>
                </button>
            })}
        </Stack >
    )
}

export default Sidebar

import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { api } from '../utils/api'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(() => {
        api(`searcj?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [])

    return (
        <Box p={2} sx={{
            overflowY : 'auto',
            height: '90vh',
            flex: 2
        }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{
                color: 'white'
            }}>
                {selectedCategory} <span style={{
                    color: '#F31503'
                }}>
                    videos
                </span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default Feed
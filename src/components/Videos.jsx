import React from 'react'
import { Stack, Box } from '@mui/material'

const Videos = ({ videos }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justify-content="start" gap={2}>
            {videos.map((item, i) => {
                <Box key={i}>
                    {item.i.videoId && <VideoCard video={item} />}
                    {item.i.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            })}
        </Stack>
    )
}

export default Videos
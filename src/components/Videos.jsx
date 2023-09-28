import { Stack, Box } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
    return (
        <Stack direction={direction || "row"} gap={2} flexWrap={"wrap"} justifyContent={"start"}>
            {videos.map((video, idx) => {
                return <Box key={idx}>
                    {video.id.videoId && <VideoCard video={video} />}
                    {video.id.channelId && <ChannelCard channelDetail={video} />}
                </Box>
            })}
        </Stack>
    )
}

export default Videos

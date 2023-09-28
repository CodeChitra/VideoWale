import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from 'react'
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, borderRadius: "0" }}>
            <Link to={`/video/${video?.id?.videoId}`}>
                <CardMedia
                    component="img"
                    height="180"
                    image={video.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt="green iguana"
                />
            </Link>
            <CardContent sx={{ height: 110, backgroundColor: "#1E1E1E" }}>
                <Link to={`/video/${video?.id?.videoId || demoVideoUrl}`}>
                    <Typography gutterBottom variant="subtitle1" fontWeight={"bold"} color="#FFF">
                        {video.snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
                    </Typography>
                </Link>
                <Link to={`/channel/${video?.snippet?.channelId || demoChannelUrl}`}>
                    <Typography variant="subtitle2" color="grey">
                        {video?.snippet?.channelTitle?.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard

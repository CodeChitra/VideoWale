import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchData'
import ReactPlayer from 'react-player'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos } from "../components"

const VideoDetail = () => {
    const { id } = useParams()
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);
    useEffect(() => {

        async function getData() {
            const [videoDetailData, relatedVideosData] = await Promise.all([
                fetchData(`videos?part=snippet,statistics&id=${id}`),
                fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            ])

            setVideoDetail(videoDetailData.items[0]);
            setRelatedVideos(relatedVideosData.items);
        }
        getData();
    }, [id])

    if (!videoDetail?.snippet) {
        return <Stack sx={{ minHeight: "95vh" }} justifyContent={"center"} alignItems={"center"}>
            <Typography variant='h2' color={"grey"}>
                Loading...
            </Typography>
        </Stack>
    }
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
    return (
        <Box sx={{ minHeight: "95vh" }}>
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                                    {channelTitle}
                                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                    <Videos videos={relatedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail

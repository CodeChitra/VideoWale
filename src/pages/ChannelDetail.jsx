import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from "../utils/fetchData";
import { Videos, ChannelCard } from "../components/";
const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);



    useEffect(() => {

        async function getData() {
            const [channelDetailData, videosData] = await Promise.all([
                fetchData(`channels?part=snippet&id=${id}`),
                fetchData(`search?part=snippet&channelId=${id}&order=date`)
            ])

            setChannelDetail(channelDetailData.items[0]);
            setVideos(videosData.items);
        }
        getData();

    }, [id])
    return (
        <Box minHeight={"95vh"}>
            <Box>
                <ChannelCard channelDetail={channelDetail} />
            </Box>
            <Box sx={{ width: { sx: "100%", sm: "80%" }, margin: "auto" }}>
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import{ Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  console.log( id ,'id')
  const [channeDetail, setChanneDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChanneDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items) )
  },[id])
  return (
    <Box minHeight='95vh' >
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(4,1,38,1) 0%, rgba(53,124,128,1) 56%, rgba(1,122,163,1) 100%)',
        zIndex: 10,
        height: '250px'
        }}/>
          <ChannelCard channelDetail={channeDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{ mr: { sm: "100px" }}}/>
        <Videos  videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail


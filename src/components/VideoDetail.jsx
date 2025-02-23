import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiData } from '../css/fetchApi';
import { Box, Stack, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ReactPlayer from 'react-player';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Video from './Video';
import Loading from './Loading';

export default function VideoDetail() {

      const { id } = useParams();
      const [ApiData, setApiData] = useState(null);
      const [video, setVideo] = useState(null);


      useEffect(() => {
            fetchApiData(`videos?part=snippet,statistics&id=${id}`).then((data) => setApiData(data.items[0]));
            fetchApiData(`search?part=snippet&relatedToVideoId=${id}&type=video}`).then((data) => setVideo(data.items));
      }, [id]);

      if (!ApiData || !video) {
            return <Loading />
      }

      const title = ApiData?.snippet?.title;
      let newTitle = "";
      let count = 0;

      for (const latter in title) {
            if (count < 65) {
                  newTitle = newTitle + title[latter];
            }
            count++;
      }

      return <>
            <Stack direction={{ sm: "row", xs: "column" }} gap={3} p={{ sm: "20px", xs: "10px" }}>
                  <Box sx={{ width: { sm: "70%", xs: "100%" } }}>
                        <Box className="videoDetailBox" sx={{ height: "75vh", width: "100%", position: "sticky", top: "100px" }}>
                              <ReactPlayer width={"100%"} height={"85%"} url={`https://www.youtube.com/watch?v=${id}`} controls />
                              <Typography className='videoTitle' variant='h5' sx={{ mt: "10px", p: "10px" }}>
                                    {`${newTitle}...`}
                              </Typography>
                              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography sx={{ padding: "0px 10px", opacity: "80%" }} className='cardTitle'>
                                          {ApiData?.snippet?.channelTitle}
                                          <VerifiedIcon fontSize={'small'} />
                                    </Typography>
                                    <Stack direction={"row"} justifyContent={"center"} gap={3} alignItems={"center"}>
                                          <Typography className='cardDe' sx={{ padding: "0px 10px", display: "flex", gap: "10px" }}>
                                                {ApiData?.statistics?.viewCount} <RemoveRedEyeIcon className='cardIcon' />
                                          </Typography>
                                          <Typography className='cardDe' sx={{ padding: "0px 10px", display: "flex", gap: "10px" }}>
                                                {ApiData?.statistics?.likeCount} <FavoriteIcon className='cardIcon' />
                                          </Typography>
                                    </Stack>
                              </Stack>
                        </Box>
                  </Box>

                  <Box sx={{ width: { sm: "30%", xs: "100%" }, marginTop: { sm: "0", xs: "30px" } }}>
                        <Video videos={video} width="100%" />
                  </Box>
            </Stack>
      </>
}

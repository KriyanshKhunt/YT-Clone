import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';

export default function Video({ videos, width }) {

      return <>
            <Stack direction={"row"} justifyContent={"center"} flexWrap={"wrap"} gap={"20px"}>
                  {
                        videos.map((video, idx) => {
                              return <Box key={idx} sx={{ width: { xl: `${width ? width : "23%"}`, lg: `${width ? width : "31%"}`, md: `${width ? width : "47%"}`, sm: `${width ? width : "47%"}`, xs: `${width ? width : "100%"}` } }}>
                                    <Link style={{ textDecoration: "none" }} to={`/video/${video.id.videoId}`}>
                                          <Card sx={{ backgroundColor: "black", color: "#efefef", height: "100%" }}>
                                                <CardActionArea>
                                                      <Box className="imgContainerForCard">
                                                            <CardMedia
                                                                  className='cardImg'
                                                                  component="img"
                                                                  height="200"
                                                                  image={video?.snippet?.thumbnails?.high?.url}
                                                                  alt="green iguana"
                                                            />
                                                      </Box>
                                                      <CardContent className='cardBody'>
                                                            <Stack>
                                                                  <Typography className='cardTitle2' gutterBottom variant="h5" component="div" sx={{ fontSize: "1.3rem" }}>
                                                                        {video?.snippet?.title}
                                                                  </Typography>
                                                                  <Typography variant="body2" sx={{ color: '#efefef90' }} className='cardTitle'>
                                                                        {video?.snippet?.channelTitle}
                                                                        <VerifiedIcon fontSize={'small'} />
                                                                  </Typography>
                                                            </Stack>
                                                      </CardContent>

                                                </CardActionArea>
                                          </Card>
                                    </Link>
                              </Box>
                        })
                  }
            </Stack>
      </>
}

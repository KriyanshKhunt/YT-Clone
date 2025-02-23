import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { categories } from '../utils/content';
import Video from './Video';
import { fetchApiData } from '../css/fetchApi';
import Loading from './Loading';

export default function Feed() {

      const [sideBtn, setSideBtn] = useState("New");
      const [ApiData, setApiData] = useState(null);

      const handleFeedCast = (name) => {
            setSideBtn(name);
      }

      useEffect(() => {
            fetchApiData(`search?part=snippet&q=${sideBtn}`).then((data) => setApiData(data.items));
      }, [sideBtn]);

      if (!ApiData) {
            return <Loading />
      }

      return <>
            <Box component="section">
                  <Stack direction={{sm: "row", xs: "column"}} justifyContent="space-between" alignItems="stretch">
                        <Box className="sideBar" width="18%" sx={{ borderRight: "1px solid #3d3d3d" }}>
                              <Stack className='scrollBar' direction={{sm: "column", xs: "row"}} justifyContent="flex-start" alignItems="start" gap="10px" p="20px 20px" sx={{ overflowY: "auto", position: "sticky", top: "78px", height: "85vh" }}>
                                    {
                                          categories.map((btn, idx) => {
                                                return <Button onClick={() => handleFeedCast(btn.name)} className={`sidebarBtn ${sideBtn === btn.name ? 'activeSiebarBtn' : ''}`} key={btn.name} p="5px 10px">
                                                      <Stack className={`sideBarIcon  ${sideBtn === btn.name ? 'activeSiebarIcon' : ''}`} sx={{ color: "red" }}>
                                                            {btn.icon}
                                                      </Stack>
                                                      <Typography className='btnName' sx={{width: idx == 1 ? {sm: "auto", xs: "80px"} : "auto"}}>{btn.name}</Typography>
                                                </Button>
                                          })
                                    }
                              </Stack>
                        </Box>

                        <Box className="feedVideo" width="81.5%" sx={{ overflowY: "auto" }}>
                              <Box className="feedTitle" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", padding: "15px", fontSize: "35px" }}>
                                    {sideBtn} <Box className="feedTitle" color='red' sx={{ fontSize: "35px" }}>Videos</Box>
                              </Box>
                              <Box className="feedVideoBox" p={"20px"}>
                                    <Video videos={ApiData} />
                              </Box>
                        </Box>
                  </Stack>
            </Box>
      </>
}

import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Video from './Video';
import { fetchApiData } from '../css/fetchApi';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

export default function SearchTerm() {

      const [ApiData, setApiData] = useState(null);
      const { term } = useParams();

      useEffect(() => {
            fetchApiData(`search?part=snippet&q=${term}`).then((data) => setApiData(data.items));
      }, [term]);

      if (!ApiData) {
            return <Loading />
      }

      return <>
            <Box sx={{ overflowY: "auto" }}>
                  <Box sx={{ display: {sm: "flex", xs: "none"}, justifyContent: "center", alignItems: "center", gap: "10px", padding: "15px", marginBottom: "10px", fontSize: "35px" }}>
                        Search Results For <Box color='red' sx={{ fontSize: "35px" }}>{term}</Box> Videos
                  </Box>
                  <Box p={"20px"}>
                        <Video videos={ApiData} />
                  </Box>
            </Box>
      </>
}

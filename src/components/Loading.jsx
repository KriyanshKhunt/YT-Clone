import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

export default function Loading() {

      return <>
            <Stack justifyContent={"center"} alignItems={"center"} width={"100%"} height={"85vh"}>
                  <CircularProgress sx={{ 'svg circle': { stroke: "red" } }} />
            </Stack>
      </>
}

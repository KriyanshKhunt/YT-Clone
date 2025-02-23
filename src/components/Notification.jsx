import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Notification() {

      const notifications = [
            {
                  avatar: 'not (1).jpg',
                  message: 'Thapa Technical Uploaded: 🚨 ChatGPT COPIED DeepSeek? "Reason" Feature Compared & EXPOSED!',
                  time: '18 minutes ago'
            },
            {
                  avatar: 'not (2).jpg',
                  message: 'For You: Indian Cinema',
                  time: '37 minutes ago'
            },
            {
                  avatar: 'not (3).jpg',
                  message: 'Run DeepSeek AI Locally Without Internet! Full Offline Setup Guide 🚀',
                  time: '56 minutes ago'
            },
            {
                  avatar: 'not (4).jpg',
                  message: 'Coding Career in Danger? ChatGPT vs DeepSeek – Is AI Taking Over🔥',
                  time: '1 hour ago'
            },
            {
                  avatar: 'not (5).jpg',
                  message: 'For You: CodeWithHarry',
                  time: '1 hour ago'
            },
            {
                  avatar: 'not (1).png',
                  message: 'Mongoose Middleware Explained with Real Example 👍',
                  time: '3 hour ago'
            },
            {
                  avatar: 'not (3).jpg',
                  message: 'Run DeepSeek AI Locally Without Internet! Full Offline Setup Guide 🚀',
                  time: '2 weeks ago'
            },
            {
                  avatar: 'not (2).jpg',
                  message: 'For You: Indian Cinema',
                  time: '1 months ago'
            },
            {
                  avatar: 'not (1).jpg',
                  message: 'Thapa Technical Uploaded: 🚨 ChatGPT COPIED DeepSeek? "Reason" Feature Compared & EXPOSED!',
                  time: '2 months ago'
            },
      ]

      return <>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"flex-start"} gap={"20px"} sx={{ overflowY: "auto", height: "65vh", paddingTop: "15px" }}>
                  {
                        notifications.map((notification, idx) => {
                              return <Stack key={idx} direction={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={"10px"}>
                                    <Avatar sx={{ cursor: "pointer" }} alt="Remy Sharp" src={notification.avatar} />
                                    <Box>
                                          <Typography sx={{ color: "#efefef", textAlign: "start", fontSize: "15px" }}>
                                                {notification.message}
                                          </Typography>
                                          <Typography textAlign={"start"} sx={{ opacity: "80%", color: "#efefef", fontSize: "12px" }}>
                                                {notification.time}
                                          </Typography>
                                    </Box>
                              </Stack>
                        })
                  }
            </Stack>
      </>
}

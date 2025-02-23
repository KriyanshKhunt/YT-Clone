import { Avatar, Badge, Box, Divider, IconButton, Paper, Stack, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../css/style.css';
import logo from '../../public/logo2.png';
import minLogo from '../../public/logo3.png';
import Search from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import Notification from './Notification';

export default function Navbar() {

      const StyledBadge = styled(Badge)(({ theme }) => ({
            '& .MuiBadge-badge': {
                  right: 3,
                  top: 3,
                  border: `2px solid transparent`,
                  backgroundColor: "red",
                  padding: '0 4px',
            },
      }));

      const [log, setLog] = useState(logo);

      useEffect(() => {
            if(window.innerWidth <=600) {
                  setLog(minLogo);
            }
      })

      const [search, setSearch] = useState("");
      const navigate = useNavigate();

      const handleClick = (e) => {
            if (e.key === "Enter") {
                  if (search) {
                        navigate(`/search/${search}`);
                  }
            }
      }

      const [show, setShow] = useState(false);
      const handleNotification = (e) => {
            e.stopPropagation();
            setShow(!show);
      }

      const hideNotification = (e) => {
            e.stopPropagation();
            setShow(false);
      }

      return <>
            <Box className='navBar' onClick={hideNotification} component="header" sx={{ padding: "10px 30px", backgroundColor: "black", position: "sticky", top: "0px", zIndex: "100" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box className="logoBox" width="14%" sx={{ cursor: "pointer" }}>
                              <Link to="/" style={{ display: "flex" }} >
                                    <img className='logoImg' src={log} alt="YT FEEDS" />
                              </Link>
                        </Box>

                        <Box className="inputContainer" sx={{ width: "40%" }}>
                              <Paper sx={{ borderRadius: "20px" }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                          <input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => handleClick(e)} className='inputBox' type="text" placeholder='Search...' />
                                          <Search className='searchIcon' fontSize='medium' sx={{ marginRight: "10px", marginBottom: "2px" }} />
                                    </Stack>
                              </Paper>
                        </Box>

                        <Box>
                              <Stack className='notifyBox' direction="row" gap="15px" justifyContent="center" alignItems="center">
                                    <IconButton onClick={handleNotification} aria-label="cart" sx={{ position: "relative" }}>
                                          <StyledBadge badgeContent={4} sx={{ color: "white" }}>
                                                <NotificationsIcon className='notifyIcon' sx={{ color: "#efefef" }} />
                                          </StyledBadge>

                                          <Box sx={{ position: "absolute", top: "40px", right: {sm: "0px", xs: "-45px"}, width: {sm: "400px", xs: "95vw"}, backgroundColor: "#000", padding: "15px", borderRadius: "15px", boxShadow: "0px 0px 10px 1px rgba(239, 239, 239, 0.27)", display: show ? "block" : "none" }}>

                                                <Typography sx={{ padding: "0px 0px 10px 10px", fontSize: "20px", color: "#efefef" }} textAlign={"start"}>
                                                      Notifications
                                                </Typography>

                                                <Divider />

                                                <Notification />

                                          </Box>

                                    </IconButton>
                                    <Avatar className='profilPic' sx={{ cursor: "pointer" }} alt="Remy Sharp" src="p3.jpeg" />
                              </Stack>
                        </Box>
                  </Stack>
            </Box>
            <Box onClick={hideNotification} sx={{ position: "fixed", width: "100%", height: "100vh", backgroundColor: "transparent", top: "0", left: "0", display: show ? "block" : "none", zIndex: 99 }} />
      </>
}

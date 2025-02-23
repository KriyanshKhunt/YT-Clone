import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import "./css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchTerm from './components/SearchTerm';

export default function App() {
      return <>
            <BrowserRouter>
                  <Box>
                        <Navbar />
                        <Routes>
                              <Route path='/' element={<Feed />} />
                              <Route path='/video/:id' element={<VideoDetail />} />
                              <Route path='/channel/:id' element={<ChannelDetail />} />
                              <Route path='/search/:term' element={<SearchTerm />} />
                        </Routes>
                  </Box>
            </BrowserRouter>
      </>
}

import { Box, IconButton, InputBase, Button, Avatar, Tooltip } from '@mui/material';
import React from 'react';
import logo from '../assets/logo.svg';
// Icon
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const NavBar = ({ isCollapsed, setIsCollapsed }) => {
     const handleToggle = () => {
          setIsCollapsed(!isCollapsed);
     };
     return (
          <Box
               position='static'
               component="header"
               display="flex"
               justifyContent="space-between"
               alignItems="center"
               sx={{ height: '60px', width: '100%', px: 2 }}
          >
               {/* Right */}
               <Box
                    display="flex"
                    alignItems="center"
                    sx={{ height: '100%' }}
               >
                    <IconButton
                         title="Menu"
                         sx={{ padding: '8px' }}
                         onClick={handleToggle}
                    >
                         <MenuIcon />
                    </IconButton>
                    <Box
                         sx={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0 14px'
                         }}
                    >
                         <img src={logo} alt="YouTube" style={{ height: '24px' }} />
                         <Box
                              component="span"
                              sx={{
                                   position: 'absolute',
                                   right: '-8px',
                                   top: '-12px',
                                   fontSize: '12px',
                              }}
                         >
                              VN
                         </Box>
                    </Box>
               </Box>
               {/* Center */}
               <Box
                    display="flex"
                    alignItems="center"

                    sx={{ height: '40px', width: '632px', ml: '40px' }}
               >
                    <Box
                         component="form"
                         display="flex"
                         alignItems="center"
                         sx={{
                              height: '100%',
                              width: '568px',
                              border: '1px solid #cccccc',
                              padding: '0px 4px 0px 16px',
                              borderRadius: '40px',
                              '&:focus-within': {
                                   borderColor: '#4285f4',
                              },
                         }}
                    >
                         <InputBase
                              sx={{ width: '100%', padding: '0px 0px 0px 12px' }}
                              placeholder="Tìm kiếm..."
                         />
                         <Box component="span">
                              <Button
                                   disableRipple
                                   title='keyboard'
                                   sx={{
                                        '&:hover': {
                                             backgroundColor: 'transparent'
                                        }
                                   }}
                              >
                                   <KeyboardAltOutlinedIcon
                                        sx={{
                                             color: "#666666"
                                        }} />
                              </Button>
                         </Box>
                         <Box
                              sx={{
                                   borderLeft: '1px solid #cccccc',
                              }}

                         >
                              <Tooltip title="Tìm kiếm">
                                   <Button
                                        disableRipple
                                        sx={{
                                             '&:hover': {
                                                  backgroundColor: 'transparent'
                                             }
                                        }}
                                   >
                                        <SearchOutlinedIcon sx={{
                                             color: '#666666'
                                        }} />
                                   </Button>
                              </Tooltip>
                         </Box>
                    </Box>
                    <Box component='div' ml={2}>
                         <Tooltip title="Tìm kiếm bằng giọng nói">
                              <IconButton
                                   sx={{
                                        backgroundColor: '#f2f2f2'
                                   }}>
                                   <MicOutlinedIcon />
                              </IconButton>
                         </Tooltip>
                    </Box>
               </Box>
               <Box
                    display='flex'
                    justifyContent='space-around'
                    alignItems='center'
               >
                    <Tooltip title='Tạo'>
                         <IconButton sx={{ mx: 1 }}>
                              <VideoCallOutlinedIcon />
                         </IconButton >
                    </Tooltip>
                    <Tooltip title="Thông báo">
                         <IconButton sx={{ mx: 1 }}>
                              <NotificationsOutlinedIcon />
                         </IconButton>
                    </Tooltip>
                    <IconButton sx={{ mx: 1 }}>
                         <Avatar

                              alt='TamAnh'
                              src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/428597223_2549573108536381_8232707623193844159_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RzSKAGfCdRwQ7kNvgF2B0hs&_nc_ht=scontent.fsgn5-3.fna&oh=00_AYCmmGOrlAXqI8seHNdVzXdvA4Ssjm2PlR65TvDvqju9yg&oe=664F61D5'
                         />
                    </IconButton>
               </Box>
          </Box >
     );
};

export default NavBar;

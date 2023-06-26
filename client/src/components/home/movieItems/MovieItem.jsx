import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material';

const MovieName = styled(Typography)`
  margin-top: 1px;
  margin-left: 5px;
  font-weight: 700;
  color: #000;
  &:hover {
    color: rgb(1, 180, 228);
  }
`;


const MovieItem = ({movie}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <Box style={{ position: 'relative', width: 150, marginLeft:'20px', cursor :'pointer'}} >
      <img src={movie.imageSrc}alt="Movie Poster" style={{ height: '225px', width: '150px', borderRadius:'10px' }} />

      <IconButton
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 5,
          right: 5,
          p: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <Box style={{
            position: 'absolute',
            top:195,
            left:5,
            padding:3,
            background:'rgb(3 14 59)',
            borderRadius:'15px'
       }}>
      <Typography style={{color: 'rgb(0 255 135)',fontSize:'1em',}}>{movie.rating}</Typography>
       </Box>
      <MovieName   >{movie.movieName}  </MovieName>
      <Typography variant="body2" color="textSecondary" style={{marginLeft:'5px'}} >{movie.releaseDate}</Typography>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
      </Menu>
    </Box>
  );
};

export default MovieItem ;
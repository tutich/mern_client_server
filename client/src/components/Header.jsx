import  { Typography, Box, useTheme } from "@mui/material";

import React from 'react'


const Header = ({title, subTitle}) => {
    const theme = useTheme();
    return (
      <Box>
        <Typography sx={{ mb: "5px"}} fontWeight="bold"  variant="h2" color={theme.palette.secondary[100]}>{title}</Typography>
        <Typography sx={{ mb: "5px"}}  variant="h5" color={theme.palette.secondary[300]}>{subTitle}</Typography>
      </Box>
    )
  }
  
  export default Header;
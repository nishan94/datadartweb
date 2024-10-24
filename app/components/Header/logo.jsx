import { Box, Typography } from "@mui/material"; 
import React from "react"; 
// import tsecondLogoGradientRgb1 from "./tsecond-logo-gradient-RGB-1.svg"; 

const Logo = () => { 
  return ( 
    <Box display="flex" alignItems="center" width="201px" position="relative"> 
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="flex-start" 
        justifyContent="center" 
      > 
        <Box 
          display="flex" 
          flexDirection="column" 
          width="115px" 
          height="29px" 
          alignItems="flex-start" 
          paddingBottom="10.45px" 
        > 
          <Box 
            width="115px" 
            height="28.92px" 
            marginBottom="-10.37px" 
            sx={{ 
              backgroundImage: "url(/assets/clip-path-group.png)", 
              backgroundSize: "100% 100%", 
            }} 
          /> 
        </Box> 
        <img 
          width="47px" 
          height="14.92px" 
          alt="Tsecond logo" 
          src={"/assets/frame-2018777514.svg"} 
        /> 
      </Box> 
      <Box 
        display="flex" 
        alignItems="flex-end" 
        paddingBottom="4px" 
        marginRight="-20px" 
      > 
        <Typography 
          width="106px" 
          marginTop="-0.91px" 
          fontFamily="'Poppins-ExtraBold', Helvetica" 
          fontWeight="normal" 
          color="#1f76f8" 
          fontSize="21.9px" 
        > 
          <span style={{ fontWeight: "extrabold" }}>&nbsp;</span> 
          <span 
            style={{ 
              fontFamily: "'Poppins-Regular', Helvetica", 
              fontSize: "14.6px", 
            }} 
          > 
            Administrator 
          </span> 
        </Typography> 
      </Box> 
    </Box> 
  ); 
}; 

export default Logo; 

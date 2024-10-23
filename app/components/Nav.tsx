// components/Nav.tsx

"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React from "react";

export const Nav = () => {
  return (
    <Box
      display="flex"
      width="100%" 
      height="50px"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top={0} 
      bgcolor="white" 
      zIndex={1000} // Ensures it stays above other components
    >
      <Box display="flex" width="201px" alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="start" justifyContent="center">
          {/* Optional logo or branding can go here */}
        </Box>
        <Box display="flex" alignItems="end" justifyContent="center" ml="-20px">
          <Typography
            variant="h6"
            color="#1f76f8"
            fontFamily="'Poppins-ExtraBold', Helvetica"
            fontSize="21.9px"
          >
            <span>&nbsp;</span>
            <Typography component="span" fontFamily="'Poppins-Regular', Helvetica" fontSize="14.6px">
              Administrator
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box display="flex" width="1102px" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" bgcolor="white">
          {[
            "Orders",
            "Subscription",
            "Shipping Center",
            "Cloud End Point",
            "Engineers",
          ].map((text, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="end"
              px={2}
              py={2}
              borderBottom={text === "Shipping Center" ? "3px solid #008dff" : "none"}
            >
              <Typography
                variant="body2"
                fontFamily="'Poppins-Medium', Helvetica"
                fontSize="14px"
                color={text === "Shipping Center" ? "#008dff" : "textSecondary"}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 226,
              height: 40,
              bgcolor: "#f1f4f7",
              borderRadius: 1,
              px: 1,
            }}
          >
            <SearchIcon />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Here.."
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>

          <Box display="flex" alignItems="center" gap={2}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

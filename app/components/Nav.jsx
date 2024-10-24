// components/Nav.tsx

"use client"
import Image from "next/image"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SearchIcon from "@mui/icons-material/Search"
import SettingsIcon from "@mui/icons-material/Settings"
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material"
import React from "react"
import { usePathname } from 'next/navigation';
import Link from "next/link"

export const Nav = () => {
  const pathname = usePathname();

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
      zIndex={1000}
    >
      <Box display="flex" width="201px" alignItems="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
        >
          {/* Optional logo or branding can go here */}
        </Box>
        <Box display="flex" alignItems="end" justifyContent="center" ml="-20px">
          <Typography
            variant="h6"
            color="#1f76f8"
            fontFamily="'Poppins-ExtraBold', Helvetica"
            fontSize="21.9px"
          >
            <Image src={"/assets/frame-2018777514.svg"} alt="Frame" width="64" height="64" unoptimized /> 
            <span>&nbsp;</span>
            <Typography
              component="span"
              fontFamily="'Poppins-Regular', Helvetica"
              fontSize="14.6px"
            >
              Administrator
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        width="1102px"
        alignItems="center"
        justifyContent= {pathname === "/"? "end":"space-between"}
      >

        {pathname !== "/" ? <Box display="flex" alignItems="center" bgcolor="white">
          {[
            { name: "Orders", value: "/orders" },
            { name: "Subscription", value: "/subscription" },
            { name: "Shipping Center", value: "/shippingcenter" },
            { name: "Cloud End Point", value: "/cloudendpoint" },
            { name: "Engineers", value: "/engineers" }
          ].map((text, index) => (
            <Box
              key={`${text.value}-${text.value === pathname}`}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="end"
              px={2}
              py={2}
              borderBottom={
                text.value === pathname ? "3px solid #008dff" : "none"
              }
            >
              <Link
                key={`link-${index}`}
                href={text.value}
                style={{
                  color: text.value === pathname ? "#008dff" : "textSecondary",
                  fontFamily: "'Poppins-Medium', Helvetica",
                  fontSize: "14px"
                }}
              >
                {text.name}
              </Link>
            </Box>
          ))}
        </Box> : null}


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
              px: 1
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
  )
}

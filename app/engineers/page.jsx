"use client"

import { Add, CalendarToday, FilterList } from "@mui/icons-material"

import { Box, Button } from "@mui/material"

import React, { useState } from "react"

import SearchInput from "../components/SearchInput"
import StyledTable from "../components/StyledTable"
import PageHeader from "../components/PageHeader"
import Pagination from "../components/Pagination"
import DrawerComponent from "../components/DrawerComponent"

export const Engineers = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedData, setSelectedData] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const itemsPerPage = 5
  const totalItems = 14 // This could be dynamic based on filtered data

  const columns = [
    { header: "SI.NO", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Mail Id", accessor: "mail" },
    { header: "No. of Center Assigned ", accessor: "noOfCenterAssigned" },
    { header: "Contact Number", accessor: "contact" },
    { header: "Region", accessor: "region" },
    { header: "Status", accessor: "status" }
  ]

  const data = Array.from({ length: totalItems }, (_, index) => ({
    id: String(index + 1).padStart(2, "0"),
    name: "Regular text column",
    mail: "test@mail.com",
    noOfCenterAssigned: "6",
    contact: "+919999999999",
    region: "Display City",
    status: index % 2 === 0 ? "Active" : "Inactive" // Alternates between Active and Inactive
  }))

  // Filter data based on search query
  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.noOfCenterAssigned.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Calculate the number of items and data for pagination
  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handleOpenDrawer = data => {
    setSelectedData(data)
    setDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setDrawerOpen(false)
    setSelectedData(null) // Clear the selected data
  }

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        p: 2,
        minHeight: "100vh",
        width: "100%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "24px",
          marginTop: "28px"
        }}
      >
        <PageHeader text="Engineers" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchInput
            placeholder="Search Engineers"
            textColor=""
            width={378}
            height={40}
            // Control the SearchInput
            value={searchQuery}
            // Update the state on change
            onChange={e => setSearchQuery(e.target.value)}
          />
          <Button
            variant="outlined"
            startIcon={<CalendarToday />}
            sx={{
              height: 40,
              bgcolor: "#f1f4f7",
              borderColor: "#dce4eb",
              color: "#4e5a6a",
              borderRadius: 1
            }}
          >
            Jan 5 - Jul 5
          </Button>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{
              height: 40,
              borderColor: "#dde4eb",
              color: "#4e5a6a",
              borderRadius: 1
            }}
          >
            Filters
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              height: 40,
              bgcolor: "black",
              color: "white",
              borderRadius: 1
            }}
          >
            Add
          </Button>
        </Box>
      </Box>

      {/* Container for Table and Pagination */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%" // Stretch full width
        }}
      >
        <StyledTable
          columns={columns}
          data={paginatedData}
          onRowClick={handleOpenDrawer}
        />

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          // Update totalItems based on filtered data
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
        <DrawerComponent
          open={drawerOpen}
          onClose={handleCloseDrawer}
          data={selectedData}
        />
      </Box>
    </Box>
  )
}

export default Engineers

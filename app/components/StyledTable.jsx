"use client"
import React, { useState, useEffect } from "react"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Typography,
  IconButton
} from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

const StyledTable = ({ columns, data, onSelectionChange, onRowClick }) => {
  const [selectedRows, setSelectedRows] = useState(
    Array(data.length).fill(false)
  )
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" })

  // Update selected data whenever selection changes
  useEffect(() => {
    if (onSelectionChange) {
      const selectedData = data.filter((_, index) => selectedRows[index])
      onSelectionChange(selectedData)
    }
  }, [selectedRows, data, onSelectionChange])

  // Sorting data based on sortConfig
  const sortedData = React.useMemo(() => {
    let sortableItems = [...data]
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [data, sortConfig])

  // Toggle selection of all checkboxes
  const handleSelectAll = event => {
    const newSelected = data.map(() => event.target.checked)
    setSelectedRows(newSelected)
  }

  // Toggle selection of specific checkbox
  const handleRowSelect = index => {
    const newSelected = [...selectedRows]
    newSelected[index] = !newSelected[index]
    setSelectedRows(newSelected)
  }

  // Render Status Badge
  const renderStatusBadge = status => {
    const isActive = status === "Active" // Check if the status is active
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "2px 11px",
          borderRadius: "17px",
          border: `1px solid ${isActive ? "#B4E2C6" : "#FFC7C7"}`,
          background: isActive ? "#EBFFF4" : "#FDD4D4",
          color: isActive ? "#319a31" : "#F42829" // Adjust text color based on status
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif" }}>
          {status}
        </Typography>
      </Box>
    )
  }

  // Sort handling
  const handleSort = accessor => {
    let direction = "asc"
    if (sortConfig.key === accessor && sortConfig.direction === "asc") {
      direction = "desc" // Change direction if the same column is clicked
    }
    setSortConfig({ key: accessor, direction })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" sx={{ bgcolor: "#f1f4f7" }}>
              <Checkbox
                checked={selectedRows.every(value => value)}
                onChange={handleSelectAll}
              />
            </TableCell>
            {columns.map(column => (
              <TableCell
                key={column.header}
                sx={{ bgcolor: "#f1f4f7", cursor: "pointer" }}
                onClick={() => handleSort(column.accessor)}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Poppins, sans-serif", color: "#4E5A6A" }}
                  >
                    {column.header}
                  </Typography>
                  {/* Sort Indicator */}
                  {sortConfig.key === column.accessor ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUpwardIcon
                        sx={{
                          fontSize: "16px"
                        }}
                      />
                    ) : (
                      <ArrowDownwardIcon
                        sx={{
                          fontSize: "16px"
                        }}
                      />
                    )
                  ) : null}
                </Box>
              </TableCell>
            ))}
            <TableCell sx={{ bgcolor: "#f1f4f7" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows[rowIndex]}
                  onChange={() => handleRowSelect(rowIndex)}
                />
              </TableCell>
              {columns.map(column => (
                <TableCell
                  sx={{ fontFamily: "Poppins, sans-serif", color: "#4E5A6A" }}
                  key={column.accessor}
                >
                  {column.accessor === "status"
                    ? renderStatusBadge(row[column.accessor])
                    : row[column.accessor]}
                </TableCell>
              ))}
              <TableCell>
                <IconButton
                  aria-label="more options"
                  onClick={() => onRowClick?.(row)}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StyledTable

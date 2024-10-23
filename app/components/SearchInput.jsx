import SearchIcon from "@mui/icons-material/Search"
import { InputBase, Paper } from "@mui/material"
import React from "react"

export const SearchInput = ({
  placeholder = "Search...",
  backgroundColor = "#f1f4f7",
  textColor = "white",
  icon = <SearchIcon />,
  width = 378,
  height = 40,
  value = "",
  onChange,
  onSearch
}) => {
  // Trigger search on pressing "Enter"
  const handleKeyPress = event => {
    if (event.key === "Enter" && onSearch) {
      onSearch()
    }
  }

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        width: width,
        height: height,
        padding: "8px 15px",
        backgroundColor: backgroundColor,
        borderRadius: 1
      }}
    >
      {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
      <InputBase
        placeholder={placeholder}
        sx={{ flex: 1, color: textColor }}
        value={value}
        onChange={onChange}
      />
    </Paper>
  )
}

export default SearchInput

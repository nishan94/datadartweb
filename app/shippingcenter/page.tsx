import {
    Add,
    ArrowDropDown,
    ArrowLeft,
    ArrowRight,
    CalendarToday,
    FilterList,
    Search,
} from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import SearchInput from "../components/SearchInput";

export const ShippingCenter = (): JSX.Element => {
    return (
        <Box
            sx={{
                width: "1440px",
                height: "900px",
                bgcolor: "white",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "1395px",
                    position: "absolute",
                    top: 101,
                    left: 6,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: "Poppins, Helvetica",
                        fontWeight: 500,
                        color: "#0f1728",
                        fontSize: "22px",
                        lineHeight: "28px",
                        whiteSpace: "nowrap",
                    }}
                >
                    Shipping centres
                </Typography>

                <SearchInput
                    placeholder="Search centres"
                    textColor=""
                    width={378}
                    height={40}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<CalendarToday />}
                        sx={{
                            height: 40,
                            bgcolor: "#f1f4f7",
                            borderColor: "#dce4eb",
                            color: "#4e5a6a",
                            borderRadius: 1,
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
                            borderRadius: 1,
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
                            borderRadius: 1,
                        }}
                    >
                        Add Center
                    </Button>
                </Box>
            </Box>

            {/* Container for Table and Pagination */}
            <Box
                sx={{
                    position: "absolute",
                    top: 165,
                    left: 6,
                    width: "1393px",
                    display: "flex",
                    flexDirection: "column", // Ensures vertical stacking of table and pagination
                    gap: 2, // Adds space between table and pagination
                }}
            >
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Box
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            bgcolor: "#f1f4f7",
                                            border: "1px solid #cfd3da",
                                        }}
                                    />
                                </TableCell>
                                {[
                                    "SI.NO",
                                    "Name of Center",
                                    "Address",
                                    "Pin-code",
                                    "County",
                                    "State",
                                    "City",
                                    "Status",
                                ].map((header) => (
                                    <TableCell
                                        key={header}
                                        sx={{ bgcolor: "#f1f4f7", border: "1px solid #cfd3da" }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontFamily: "Poppins-Medium", color: "#1c1c1c" }}
                                            >
                                                {header}
                                            </Typography>
                                            <ArrowDropDown />
                                        </Box>
                                    </TableCell>
                                ))}
                                <TableCell
                                    sx={{ bgcolor: "#f1f4f7", border: "1px solid #cfd3da" }}
                                />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.from({ length: 14 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell padding="checkbox">
                                        <Box
                                            sx={{ width: 24, height: 24, border: "1px solid #eaecf0" }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontFamily: "Poppins-Regular", color: "#4e5a6a" }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </Typography>
                                    </TableCell>
                                    {[
                                        "Regular text column",
                                        "Regular text column",
                                        "673006",
                                        "Display Country",
                                        "Display State",
                                        "Display City",
                                    ].map((text, idx) => (
                                        <TableCell key={idx}>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontFamily: "Poppins-Regular", color: "#4e5a6a" }}
                                            >
                                                {text}
                                            </Typography>
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 2,
                                                border: "1px solid",
                                                borderColor: index % 2 === 0 ? "#ffc7c7" : "#b4e2c6",
                                                bgcolor: index % 2 === 0 ? "#fdd4d4" : "#ebfff4",
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    fontFamily: "Poppins-Regular",
                                                    color: index % 2 === 0 ? "#f42829" : "#319a31",
                                                }}
                                            >
                                                {index % 2 === 0 ? "Inactive" : "Active"}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{ width: 24, height: 24, border: "1px solid #eaecf0" }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Pagination Box */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <IconButton>
                        <ArrowLeft />
                    </IconButton>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            sx={{
                                minWidth: 28,
                                height: 28,
                                borderRadius: 1,
                                bgcolor: index === 0 ? "#f1f4f7" : "transparent",
                                color: index === 0 ? "#1c1c1c" : "#808285",
                                borderColor: index === 0 ? "#d0d3db" : "transparent",
                            }}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <IconButton>
                        <ArrowRight />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ShippingCenter;

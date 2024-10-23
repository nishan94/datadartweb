"use client"

import {
    Add,
    ArrowLeft,
    ArrowRight,
    CalendarToday,
    FilterList,
} from "@mui/icons-material";

import {
    Box,
    Button,
    IconButton,
} from "@mui/material";

import React, { useState } from "react";

import SearchInput from "../components/SearchInput";
import StyledTable from "../components/StyledTable";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/Pagination";
import DrawerComponent from "../components/DrawerComponent";

export const ShippingCenter = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedData, setSelectedData] = useState<Record<string, any> | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);



    const itemsPerPage = 5;
    const totalItems = 14; // This could be dynamic based on filtered data

    const columns = [
        { header: "SI.NO", accessor: "id" },
        { header: "Order ID", accessor: "orderId" },
        { header: "Order Place", accessor: "orderPlace" },
        { header: "Pin-code", accessor: "pinCode" },
        { header: "County", accessor: "county" },
        { header: "State", accessor: "state" },
        { header: "City", accessor: "city" },
        { header: "Status", accessor: "status" },
    ];

    const data = Array.from({ length: totalItems }, (_, index) => ({
        id: String(index + 1).padStart(2, "0"),
        orderId: "Order ID " + (index + 1), // Sample Order ID
        orderPlace: "Regular text column",
        pinCode: "673006",
        county: "Display Country",
        state: "Display State",
        city: "Display City",
        status: index % 2 === 0 ? "Active" : "Inactive", // Alternates between Active and Inactive
    }));

    // Filter data based on search query
    const filteredData = data.filter(item =>
        item.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.orderPlace.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the number of items and data for pagination
    const paginatedData = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleOpenDrawer = (data: Record<string, any>) => {
        setSelectedData(data);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setSelectedData(null); // Clear the selected data
    };

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
                <PageHeader text="Shipping centres" />
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <SearchInput
                        placeholder="Search centres"
                        textColor=""
                        width={378}
                        height={40}
                        value={searchQuery} // Control the SearchInput
                        onChange={(e) => setSearchQuery(e.target.value)} // Update the state on change
                    />
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
                    display: "flex",
                    flexDirection: "column",
                    width: "100%", // Stretch full width
                }}
            >
                <StyledTable columns={columns} data={paginatedData} onRowClick={handleOpenDrawer} />

                {/* Pagination Component */}
                <Pagination
                    currentPage={currentPage}
                    totalItems={filteredData.length} // Update totalItems based on filtered data
                    itemsPerPage={itemsPerPage}
                    onPageChange={(page: number) => setCurrentPage(page)}
                />
                <DrawerComponent
                    open={drawerOpen}
                    onClose={handleCloseDrawer}
                    data={selectedData}
                />
            </Box>
        </Box>
    );
};

export default ShippingCenter;

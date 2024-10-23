import React from "react";
import {
  Drawer, Box, IconButton, Divider,
  Button,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  Autocomplete,
  TextField,
  ListItemIcon
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DrawerComponent = ({ open, onClose, data }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box display="flex" flexDirection="column" width="100%">
        <Box
          display="flex"
          alignItems="center"
          p={2}
          bgcolor="white"
          borderBottom={1}
          borderColor="#e1e6ea"
        >
          <Box flex={1}>
            <Typography variant="h6" fontWeight="bold">
              Shipping Center Name
            </Typography>
            <Box display="flex" alignItems="center" mt={0.5}>
              <Typography variant="body2" color="textSecondary">
                Shipping123AH
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                bgcolor="#ebfff4"
                border={1}
                borderColor="#b4e2c6"
                borderRadius={2}
                px={1.5}
                ml={1.5}
              >
                <Typography variant="caption" color="primary">
                  Active
                </Typography>
              </Box>
              <ToggleOnIcon color="success" />
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{ borderColor: "#dde4eb", color: "#4e5a6a" }}
          >
            Edit
          </Button>
          <IconButton onClick={()=>onClose()}>
            <CloseIcon  />
          </IconButton>
        </Box>

        <Box sx={{ backgroundColor: "#F1F3F6", padding: "8px" }}>
          <Box display="flex" gap={2} mt={2}>
            <Box flex={1}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Basic Info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Site Name
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Display Name
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Status
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Active
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1} >
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Active From
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        25/08/2024
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Contact
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Contact Person
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Rayan
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Contact Number
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        +91 8740394785
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1}  >
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Optional Number
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        +91 8740394785
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Address Information
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Address
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        2nd floor KCT Tower, Building No. 17 Street No. 821, Doha
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Country
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Qatar
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1} borderBottom={1} borderColor="grey.300">
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        State
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Doha
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} py={1} >
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        Pincode
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" width={220}>
                        435267
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
            </Box>

            <Box flex={1} display="flex" flexDirection="column">
              <Tabs value={0} indicatorColor="primary" textColor="primary">
                <Tab label="Order" />
                <Tab label="Subscription" />
                <Tab label="Hardware" />
              </Tabs>
              <Box flex={1} overflow="auto" mt={2}>
                <Paper >
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="ORDER # 404-3602975-1614756"
                        secondary="New"
                        secondaryTypographyProps={{ color: "secondary" }}
                      />
                      <ListItemIcon>
                        <ExpandMoreIcon />
                      </ListItemIcon>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Order Placed"
                        secondary="5 August 2024"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Capacity" secondary="254TB" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Type" secondary="File System" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Ship From"
                        secondary="Los Angeles, CA, USA"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Ship To"
                        secondary="Las Vegas, NV, USA"
                      />
                    </ListItem>
                  </List>
                </Paper>

                <Box mt={2}>
                  <Autocomplete
                    options={[]}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Hardware" variant="outlined" />
                    )}
                  />
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Find an item"
                      InputProps={{
                        endAdornment: <ArrowDropDownIcon />,
                      }}
                    />
                  </Box>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      fullWidth
                    >
                      Add New
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;

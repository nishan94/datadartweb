import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
  data?: Record<string, any> | null; 
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, onClose, data }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 350, padding: 2 }}
        role="presentation"
      >
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">{data?.name || "Shipping Center"}</Typography>
        <Divider />
        
        {/* Basic Info Section */}
        <Typography variant="subtitle1">Basic Info</Typography>
        <Typography>Name: {data?.name}</Typography>
        <Typography>Status: {data?.status}</Typography>
        <Typography>Active From: {data?.activeFrom}</Typography>
        
        {/* Additional Sections */}
        <Divider />
        <Typography variant="subtitle1">Contact</Typography>
        <Typography>Contact Person: {data?.contactPerson}</Typography>
        <Typography>Contact Number: {data?.contactNumber}</Typography>
        
        <Divider />
        <Typography variant="subtitle1">Address Information</Typography>
        <Typography>Address: {data?.address}</Typography>
        <Typography>Country: {data?.country}</Typography>
        <Typography>State: {data?.state}</Typography>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;

// Pagination.tsx
import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      justifyContent: "flex-end",
      mt: 2,
    }}>
      <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
        <ArrowLeft />
      </IconButton>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant={index === currentPage ? "contained" : "outlined"}
          sx={{
            minWidth: 28,
            height: 28,
            bgcolor: index === currentPage ? "#f1f4f7" : "transparent",
            color: index === currentPage ? "#1c1c1c" : "#808285",
          }}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </Button>
      ))}
      <IconButton onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
        <ArrowRight />
      </IconButton>
    </Box>
  );
};

export default Pagination;

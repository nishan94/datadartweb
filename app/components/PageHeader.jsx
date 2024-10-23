

import { Typography } from '@mui/material'
import React from 'react'

const PageHeader = ({text}) => {
    return (
        <Typography
            variant="h6"
            sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                color: "#101828",
                fontSize: "22px",
                lineHeight: "28px",
                whiteSpace: "nowrap",
            }}
        >
            {text}
        </Typography>
    )
}

export default PageHeader
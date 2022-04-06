import React from 'react'
import { Box } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';

function ProgressBar() {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress/>
        </Box>
    )
}

export default ProgressBar
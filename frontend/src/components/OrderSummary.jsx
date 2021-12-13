import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function OrderSummary() {
    return(
        <>
         <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
        <Typography variant="h6" gutterBottom>
            Order Summary
        </Typography>
        </Paper>
        </>
    )
}
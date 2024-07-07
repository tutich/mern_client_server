import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from 'components/OverviewChart';
import React, { useState } from 'react'

const Overview = () => {
    const [view, sertView ] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
        <Header titl="OVERVIEW" subTitle="Overview of General Revenue and Profit" />
        <Box height="75vh">
            <FormControl sx={{mt: "1rem"}}>
                <InputLabel>View</InputLabel>
                <Select value={view} label="View" onChange={(e) => sertView(e.target.value)}>
                    <MenuItem value="sales">Sales</MenuItem>
                    <MenuItem value="units">Units</MenuItem>
                </Select>
            </FormControl>
            <OverviewChart view={view} />
        </Box>
    </Box>
  )
}

export default Overview
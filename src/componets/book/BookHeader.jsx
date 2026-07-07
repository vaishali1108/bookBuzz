import React from 'react';

import {
    Box,
    Typography,
    Button,
    Select,
    MenuItem,
} from "@mui/material";

function BookHeader(props) {
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pt={0}
                mt={0}
                mb={2}
            >
                <Typography variant="h3" fontWeight="bold">
                    Explore Books
                </Typography>

                <Box display="flex" gap={2}>
                    <Button variant="outlined">Grid</Button>

                    <Button variant="outlined">List</Button>

                    <Select size="small" defaultValue="Newest">
                        <MenuItem value="Newest">Newest</MenuItem>
                        <MenuItem value="Oldest">Oldest</MenuItem>
                    </Select>
                </Box>
            </Box>

        </>
    );
}

export default BookHeader;


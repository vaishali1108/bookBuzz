import React from 'react';
import {
    Box,
    TextField,
    MenuItem,
    Button,
    Stack
} from "@mui/material";


function BookFilter(props) {
    return (
        <>
            <Box
                sx={{
                    mb: 4,
                    p: 2,
                    borderRadius: 3,
                    background: "#fff",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                }}
            >


                <Stack
                    direction={{
                        xs: "column",
                        md: "row"
                    }}
                    spacing={2}
                >
                    <TextField
                        fullWidth
                        placeholder="Search book name..."
                    />
                    <TextField
                        select
                        label="Category"
                        sx={{ minWidth: 180 }}
                    >

                        <MenuItem value="all">
                            All Categories
                        </MenuItem>

                        <MenuItem value="fiction">
                            Fiction
                        </MenuItem>

                        <MenuItem value="technology">
                            Technology
                        </MenuItem>

                        <MenuItem value="history">
                            History
                        </MenuItem>
                    </TextField>

                    <TextField
                        select
                        label="Availability"
                        sx={{ minWidth: 180 }}
                    >

                        <MenuItem value="all">
                            All
                        </MenuItem>

                        <MenuItem value="available">
                            In Stock
                        </MenuItem>

                        <MenuItem value="out">
                            Out of Stock
                        </MenuItem>

                    </TextField>
                    <TextField
                        select
                        label="Sort"
                        sx={{ minWidth: 150 }}
                    >

                        <MenuItem value="new">
                            Newest
                        </MenuItem>

                        <MenuItem value="az">
                            A-Z
                        </MenuItem>
                    </TextField>

                    <Button
                        variant="outlined"
                    >
                        Reset
                    </Button>
                </Stack>
            </Box>

        </>
    );
}

export default BookFilter;



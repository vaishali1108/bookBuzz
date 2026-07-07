import { Box, TextField } from '@mui/material';
import React from 'react';

function Search({shadow}) {
    return (
        <>
            <Box>
                <TextField
                    fullWidth
                    placeholder={shadow}
                    sx={{
                        mt:3,
                        mb:3,
                        backgroundColor: "#fff",
                    }}
                />
            </Box>
        </>
    );
}

export default Search;
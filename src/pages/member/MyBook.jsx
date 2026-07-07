import React from 'react';
import { Box, Toolbar } from "@mui/material";
import BookHeader from '../../componets/book/BookHeader';
import BookFilter from '../../componets/book/BookFilter';
import BookGrid from '../../componets/book/BookGrid';
import Header from '../../componets/member/Header';

function MyBook(props) {

    return (
        <>
            <Box>
                {/* Top Header */}
                <Header />

                {/* Page Content */}

                <Box sx={{ flex: 1 }}>

                    <Toolbar />

                    <Box sx={{ p: 4 }}>
                        <BookHeader />
                        <BookGrid />
                    </Box>

                </Box>
            </Box>
        </>
    );
}

export default MyBook;

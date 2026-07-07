import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import BookCard from './BookCard';
import BookFilter from './BookFilter';

function BookGrid(props) {

    const books = [
        {
            title: "Atomic Habits",
            author: "James Clear",
            isbn: "123456",
            status: "Available",
            image: "https://picsum.photos/200/300?1",
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            isbn: "123457",
            status: "Reserved",
            image: "https://picsum.photos/200/300?2",
        },
        {
            title: "Clean Code",
            author: "Robert Martin",
            isbn: "123458",
            status: "Available",
            image: "https://picsum.photos/200/300?3",
        },
    ];
    return (
        <>
            <Box>
                
                <BookFilter />
                <Grid container spacing={3}>

                    {
                        books.map(book => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={book.id}
                            >

                                <BookCard book={book} />

                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
}

export default BookGrid;

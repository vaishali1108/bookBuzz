import React from 'react';

    import {
        Dialog,
        DialogContent,
        Typography,
        Box,
        Button,
        Chip,
        Stack
    } from "@mui/material";

function BookDetails(props) {
    const BookDetailsModal = ({
        open,
        handleClose,
        book
    }) => {
        return (
            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="sm"
                    fullWidth
                >


                    <DialogContent>


                        <Box
                            display="flex"
                            gap={3}
                        >


                            <img
                                src={book.image}
                                width="180"
                                height="250"
                                style={{
                                    borderRadius: "12px",
                                    objectFit: "cover"
                                }}
                            />



                            <Box>


                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                >
                                    {book.title}
                                </Typography>


                                <Typography
                                    mt={1}
                                    color="text.secondary"
                                >
                                    By {book.author}
                                </Typography>



                                <Chip
                                    sx={{ mt: 2 }}
                                    label={
                                        book.quantity > 0
                                            ? "Available"
                                            : "Not Available"
                                    }
                                    color={
                                        book.quantity > 0
                                            ? "success"
                                            : "error"
                                    }
                                />


                                <Typography mt={2}>
                                    Category : {book.category}
                                </Typography>


                                <Typography>
                                    ISBN : {book.isbn}
                                </Typography>


                                <Typography>
                                    Available Copies : {book.quantity}
                                </Typography>


                            </Box>


                        </Box>


                        <Typography mt={3}>
                            {book.description}
                        </Typography>



                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            mt={3}
                        >

                            <Button
                                variant="contained"
                                disabled={book.quantity === 0}
                            >
                                Issue Book
                            </Button>

                        </Stack>



                    </DialogContent>


                </Dialog>

            </>
        );
    }
}

    export default BookDetails;

   
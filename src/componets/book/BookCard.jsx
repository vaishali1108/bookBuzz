import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
    Chip,
    Box,
    Button
} from "@mui/material";

import {BOOK_FIELDS,BOOK_STATUS } from "../../constents/bookConstent";
import VisibilityIcon from "@mui/icons-material/Visibility";

function BookCard({ book }) {
    const getStatus = () => {

        if (book[BOOK_FIELDS.STATUS] === BOOK_STATUS.RESERVED) {
            return BOOK_STATUS.RESERVED;
        }

        if (book[BOOK_FIELDS.QUANTITY] > 0) {
            return BOOK_STATUS.IN_STOCK;
        }

        return BOOK_STATUS.OUT_OF_STOCK;
    };



    const status = getStatus();
    return (
        <>
            <Card
                sx={{
                    width: 300,
                    height: 430,
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    transition: "0.3s",

                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 12px 35px rgba(0,0,0,0.25)"
                    }
                }}
            >


                <Box sx={{ position: "relative" }}>


                    <CardMedia
                        component="img"
                        height="250"
                        image={book[BOOK_FIELDS.IMAGE]}
                        alt={book[BOOK_FIELDS.TITLE]}
                    />


                    <Chip
                        label={status}
                        color={
                            status === BOOK_STATUS.IN_STOCK
                                ? "success"
                                :
                                status === BOOK_STATUS.RESERVED
                                    ? "warning"
                                    :
                                    "error"
                        }
                        sx={{
                            position: "absolute",
                            top: 12,
                            right: 12
                        }}
                    />

                </Box>

                <CardContent>


                    <Typography
                        variant="h6"
                        fontWeight={700}
                    >
                        {book[BOOK_FIELDS.TITLE]}
                    </Typography>

                    <Typography
                        color="text.secondary"
                    >
                        By {book[BOOK_FIELDS.AUTHOR]}
                    </Typography>

                    <Typography
                        mt={1}
                        fontSize={14}
                    >
                        Available Copies : {book[BOOK_FIELDS.QUANTITY]}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        mt={2}
                    >
                        <Button
                            variant="contained"
                            size="small"
                            disabled={
                                status === BOOK_STATUS.OUT_OF_STOCK ||
                                status === BOOK_STATUS.RESERVED
                            }
                        >
                            Issue
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            disabled={
                                status === BOOK_STATUS.IN_STOCK
                            }
                        >
                            Request
                        </Button>
                    </Stack>
                </CardContent>


            </Card>
        </>
    );
}

export default BookCard;





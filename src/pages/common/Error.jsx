import React from "react";
import {
    Box,
    Typography,
    Button,
    Stack
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";

function Error(props) {
    const navigate = useNavigate();

    return (

        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f7f8fc"
            }}
        >

            <Stack
                spacing={2}
                alignItems="center"
                textAlign="center"
            >


                <MenuBookIcon
                    sx={{
                        fontSize: 100,
                        color: "#f7c600"
                    }}
                />


                <Typography
                    variant="h2"
                    fontWeight={800}
                >
                    404
                </Typography>



                <Typography
                    variant="h5"
                    fontWeight={700}
                >
                    Page Not Found
                </Typography>



                <Typography
                    color="text.secondary"
                >
                    <b>Looks like you opened a chapter that doesn't exist.</b>
                    <br />
                    Let's get you back to the right chapter.
                </Typography>



                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 2,
                        borderRadius: 3,
                        textTransform: "none",
                        px: 4,
                        bgcolor: "#f7c600",
                        color: "#000",

                        "&:hover": {
                            bgcolor: "#e5b500"
                        }
                    }}
                    onClick={() => navigate("/")}
                >
                    Back To Library
                </Button>
            </Stack>
        </Box>
    );
}

export default Error;
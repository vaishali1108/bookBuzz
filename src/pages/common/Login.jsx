import React from 'react';
import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
    Link,
} from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

function Login(props) {
    return (
        <>
            <Box
                sx={{
                   // minHeight: "100vh",
                    bgcolor: "#f5f7fb",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 5,
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        elevation={5}
                        sx={{
                            p: 5,
                            borderRadius: 4,
                        }}
                    >
                        <Stack spacing={3}>
                            {/* Logo */}

                            <Box textAlign="center">
                                <MenuBookRoundedIcon
                                    sx={{
                                        fontSize: 60,
                                        color: "#f7c600",
                                    }}
                                />

                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    mt={1}
                                >
                                    Welcome Back
                                </Typography>

                                <Typography color="text.secondary">
                                    Login to your Library Account
                                </Typography>
                            </Box>

                            {/* Email */}

                            <TextField
                                label="Email Address"
                                fullWidth
                                type="email"
                            />

                            {/* Password */}

                            <TextField
                                label="Password"
                                fullWidth
                                type="password"
                            />

                            {/* Remember Me */}

                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                               
                                <Link
                                    href="#"
                                    underline="hover"
                                    color="warning.main"
                                >
                                    Forgot Password?
                                </Link>
                            </Stack>

                            {/* Login Button */}

                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "#f7c600",
                                    color: "#000",
                                    fontWeight: "bold",
                                    py: 1.5,

                                    "&:hover": {
                                        bgcolor: "#e6b800",
                                    },
                                }}
                            >
                                Login
                            </Button>

                            {/* Register */}

                            <Typography
                                textAlign="center"
                                color="text.secondary"
                            >
                                Don't have an account?{" "}
                                <Link
                                    href="/register"
                                    underline="hover"
                                    color="warning.main"
                                    fontWeight="bold"
                                >
                                    Register
                                </Link>
                            </Typography>
                        </Stack>
                    </Paper>
                </Container>
            </Box>

        </>
    );
}

export default Login;


import React from "react";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    const navItems = [
        { name: "HOME", id: "home" },
        { name: "ABOUT", id: "about" },
        { name: "EVENTS", id: "events" },
        { name: "CONTACT", id: "contact" },
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(8px)",
                boxShadow: "none",

            }}

        >
            <Container maxWidth="xl">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 1,
                    }}
                >
                    {/* Logo */}

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            color="white"
                        >
                        </Typography>

                        <Typography
                            variant="h6"
                            fontWeight="bold"
                        > <MenuBookRoundedIcon
                                sx={{ color: "#f4b400", fontSize: 35 }}
                            />
                            Book Buzz
                        </Typography>
                    </Stack>

                    {/* Menu */}

                    <Stack
                        direction="row"
                        spacing={5}
                        alignItems="center"
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                onClick={() =>
                                    document.getElementById(item.id)?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    })
                                }
                                sx={{
                                    color: "white",
                                    fontWeight: 500,
                                    "&:hover": {
                                        color: "#f7c600",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <Button
                        component={Link}
                        to="/books"
                        sx={{
                            color: "white",
                            fontWeight: 500,
                            "&:hover": {
                                color: "#f7c600",
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        BOOKS
                    </Button>
                    </Stack>

                    <Button
                        component={Link}
                        to="/login"
                        sx={{
                            bgcolor: "#f7c600",
                        }} variant="contained">
                        Login
                    </Button>

                    


                    {/* Profile */}
                    {/* 
          <Avatar
            src="/profile.jpg"
            sx={{
              width: 55,
              height: 55,
              border: "3px solid white",
            }}
          /> */}

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
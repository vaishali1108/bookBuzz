import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Link,
    IconButton,
    Divider,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
    return (
        <Box
            sx={{
                bgcolor: "#002000",
                color: "white",
                pt: 8,
                pb: 2,
                mt: 10,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {/* Library Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <MenuBookRoundedIcon
                                sx={{ color: "#f4b400", fontSize: 35 }}
                            />
                            <Typography variant="h5" fontWeight="bold">
                                Book Buzz
                            </Typography>
                        </Stack>

                        <Typography
                            sx={{
                                mt: 2,
                                color: "#d1d5db",
                                lineHeight: 1.8,
                            }}
                        >
                            A welcoming place for readers, students, and lifelong
                            learners. Discover thousands of books in a peaceful
                            environment designed to inspire knowledge.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Quick Links
                        </Typography>

                        <Stack spacing={1.5}>
                            <Link href="#" underline="none" color="inherit">
                                Home
                            </Link>
                            <Link href="#" underline="none" color="inherit">
                                About
                            </Link>
                            <Link href="#" underline="none" color="inherit">
                                Events
                            </Link>
                            <Link href="#" underline="none" color="inherit">
                                Books
                            </Link>
                            <Link href="#" underline="none" color="inherit">
                                Contact
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Opening Hours */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Opening Hours
                        </Typography>

                        <Typography>Monday - Friday</Typography>
                        <Typography color="grey.400">
                            9:00 AM - 8:00 PM
                        </Typography>

                        <Typography mt={2}>Saturday</Typography>
                        <Typography color="grey.400">
                            10:00 AM - 6:00 PM
                        </Typography>

                        <Typography mt={2}>Sunday</Typography>
                        <Typography color="grey.400">
                            Closed
                        </Typography>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Contact Us
                        </Typography>

                        <Stack spacing={2}>
                            <Stack direction="row" spacing={1}>
                                <LocationOnRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography color="grey.300">
                                    123 Library Street,
                                    Surat, Gujarat
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1}>
                                <CallRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography color="grey.300">
                                    +91 98765 43210
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1}>
                                <EmailRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography color="grey.300">
                                    info@bookbuzz.com
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack direction="row" spacing={1} mt={3}>
                            <IconButton sx={{ color: "white" }}>
                                <FacebookRoundedIcon />
                            </IconButton>

                            <IconButton sx={{ color: "white" }}>
                                <InstagramIcon />
                            </IconButton>

                            <IconButton sx={{ color: "white" }}>
                                <XIcon />
                            </IconButton>

                            <IconButton sx={{ color: "white" }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        bgcolor: "grey.700",
                        my: 4,
                    }}
                />

                <Typography
                    textAlign="center"
                >© 2026 Book Buzz. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;



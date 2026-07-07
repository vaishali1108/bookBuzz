import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
} from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const events = [
    {
        id: 1,
        title: "Summer Reading Club",
        image: "/assets/images/summer_reading.jpeg",
        date: "15 July 2026",
        time: "10:00 AM",
        location: "Main Reading Hall",
        description:
            "Join fellow readers and explore exciting books together in our weekly reading club.",
    },
    {
        id: 2,
        title: "Storytelling for Kids",
        image: "/assets/images/story_telling",
        date: "20 July 2026",
        time: "4:00 PM",
        location: "Kids Corner",
        description:
            "Interactive storytelling sessions filled with fun, imagination, and learning.",
    },
    {
        id: 3,
        title: "Meet the Author",
        image: "/assets/images/author_meetup.png",
        date: "28 July 2026",
        time: "11:00 AM",
        location: "Conference Hall",
        description:
            "Meet a renowned author, hear their inspiring journey, and ask your questions.",
    },
];

function Event(props) {
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">

                {/* Heading */}

                <Typography
                    color="warning.main"
                    fontWeight="bold"
                    textAlign="center"
                >
                    OUR EVENTS
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    mt={2}
                >
                    Explore Upcoming Library Events
                </Typography>

                <Typography
                    textAlign="center"
                    color="text.secondary"
                    mt={2}
                    mb={6}
                >
                    Join exciting events designed to inspire reading,
                    creativity, and lifelong learning.
                </Typography>

                {/* Cards */}

                <Grid container spacing={4}>
                    {events.map((event) => (
                        <Grid size={{ xs: 12, md: 4 }} key={event.id}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    transition: ".3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 8,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={event.image}
                                    alt={event.title}
                                />

                                <CardContent>

                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {event.title}
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        mt={2}
                                    >
                                        <CalendarMonthRoundedIcon
                                            sx={{ color: '#f7c600' }}
                                        />
                                        <Typography>
                                            {event.date}
                                        </Typography>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        mt={1}
                                    >
                                        <AccessTimeRoundedIcon
                                            sx={{ color: '#f7c600' }}
                                        />
                                        <Typography>
                                            {event.time}
                                        </Typography>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        mt={1}
                                    >
                                        <LocationOnRoundedIcon
                                            sx={{ color: '#f7c600' }}
                                        />
                                        <Typography>
                                            {event.location}
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        color="text.secondary"
                                        mt={2}
                                    >
                                        {event.description}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={{ mt: 3,
                                            bgcolor:'#f7c600'
                                        }}
                                    >
                                        Learn More
                                    </Button>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}

export default Event;


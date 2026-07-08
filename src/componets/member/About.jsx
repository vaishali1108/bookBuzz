import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Button,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function About(props) {
    return (
        <Box sx={{
            py: 11,
            mx: 10
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">

                    {/* Left Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <img
                            src="/assets/images/about.png"
                            alt="Library"
                            style={{
                                width: "100%",
                                borderRadius: "15px",
                            }}
                        />
                    </Grid>

                    {/* Right Content */}
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            color="#f7c600"
                            fontWeight="bold"
                        >
                            ABOUT US
                        </Typography>

                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            mt={2}
                        >
                            A Place Where Every Book Finds Its Reader
                        </Typography>

                        <Typography
                            mt={3}
                            color="text.secondary"
                        >
                            Our library offers a welcoming environment with
                            thousands of books, comfortable reading spaces,
                            and an easy borrowing process for readers of all ages.
                        </Typography>

                        <Stack spacing={2} mt={4}>

                            <Stack direction="row" spacing={2}>
                                <MenuBookRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography>
                                    20,000+ Books Available
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <GroupsRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography>
                                    Friendly Staff & Members
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <AutoStoriesRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography>
                                    Comfortable Reading Area
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <CheckCircleRoundedIcon sx={{ color: '#f7c600' }} />
                                <Typography>
                                    Easy Membership & Borrowing
                                </Typography>
                            </Stack>

                        </Stack>

                        <Button
                            variant="contained"

                            sx={{
                                mt: 4,
                                bgcolor: '#f7c600'
                            }}
                        >
                            Learn More
                        </Button>

                    </Grid>

                </Grid>
            </Container>
        </Box>

    );
}

export default About;
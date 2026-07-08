import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Hero.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider(props) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Box
            sx={{
                p: 0,
                m: 0,
            }}
        >
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src="/assets/images/images_1.png" alt="libray" style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                }} /></SwiperSlide>
                <SwiperSlide><img src="/assets/images/images_2.png" alt="libray" style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                }} /></SwiperSlide>
                <SwiperSlide><img src="/assets/images/image_3.png" alt="libray" style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                }} /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <Box className="hero-content">
                <Typography variant="h2" fontWeight="bold">
                    A Place Where Every Book Finds a Reader
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    Borrow books, discover new authors, and enjoy a quiet place to read and learn. Our shelves are filled with stories waiting to be explored.
                </Typography>

                <Button sx={{
                    bgcolor: "#f7c600",
                }} variant="contained">
                    Explore Books
                </Button>
            </Box>
        </Box>
    );
}

export default Slider;
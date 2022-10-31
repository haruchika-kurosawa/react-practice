import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Box = styled.div`
	width: 100%;
	height: 200px;
	background: #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Slider() {
	return (
		<Swiper
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={50}
		slidesPerView={3}
		navigation
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	  >
		<SwiperSlide><Box>Slide 1</Box></SwiperSlide>
		<SwiperSlide><Box>Slide 2</Box></SwiperSlide>
		<SwiperSlide><Box>Slide 3</Box></SwiperSlide>
		<SwiperSlide><Box>Slide 4</Box></SwiperSlide>
	  </Swiper>
	);
}
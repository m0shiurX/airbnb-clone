import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider({ gallery }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			className='h-full bg-slate-300'
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
		>
			{gallery.map((image, index) => (
				<SwiperSlide className='bg-slate-400' key={'x' + index}>
					<Image className='w-full h-full object-cover object-bottom' layout='fill' alt='' src={image?.src} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

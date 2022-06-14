import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.scss';

interface SliderProps {
	images: Array<any>;
}

export const Slider: FC<SliderProps> = ({ images }) => {
	return (
		<div className={styles.slider}>
			<Swiper
				className='slider-container'
				spaceBetween={10}
				slidesPerView={1}
				lazy={false}
				preloadImages={false}
				navigation
				grabCursor>
				{images.length > 0 &&
					images.map((image: any, key: number) => {
						return (
							<SwiperSlide key={key}>
								<div className={styles['image-container']}>
									<Image
										src={image.src}
										alt={image.alt}
										placeholder='blur'
										blurDataURL={image.src}
										layout='fill'
									/>
								</div>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};

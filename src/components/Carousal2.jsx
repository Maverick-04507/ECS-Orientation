import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const Carousal2 = () => {
    const events_data = [
        { 'name': 'ORIENTATION', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355785/Orientation2_hpanff.jpg' },
        { 'name': 'FRESHERS', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355786/Freshers2_cypjde.jpg' },
        { 'name': 'DEHLEEZ', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724356477/Dehleez2_1_t2ujvu.jpg' },
        { 'name': 'SPECTRE', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355785/Event_ob89wa.jpg' },
        { 'name': 'ORIENTATION', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355786/Orientation_tmwhim.jpg'},
        { 'name': 'FRESHERS', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355786/Freshers_rosq4b.jpg' },
        { 'name': 'SPEAKER SESSION', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355786/Speakersess_lmlwvl.jpg' },
        { 'name': 'EIC', 'image': 'https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355556/EIC_irzhje.jpg' },
    ];
   
    return (
        <div className='max-w-screen-xl flex justify-center items-center overflow-hidden mt-12'>
            <Swiper
                autoplay={{ delay: 4000 }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 200,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full h-full md:scale-100 scale-50"
            >
                {events_data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover rounded-lg"
                            style={{width:'35vw', height:'50vh' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousal2;

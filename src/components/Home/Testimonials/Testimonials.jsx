import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import Image1 from "../../../assets/imgTwo/3781958_m.jpg";
import Image2 from "../../../assets/image1.jpg";
import Image4 from "../../../assets/image3.jpg";
import Image5 from "../../../assets/image5.jpg";
import Image6 from "../../../assets/image6.jpg";
import Image7 from "../../../assets/imgTwo/1005546_m.JPG";
import Image8 from "../../../assets/image4.jpg";
import Image9 from "../../../assets/imgFile/2084745_m.jpg";
import Image10 from "../../../assets/imgFile/1288878_m.jpg";

const Testimonials = () => {
    const sliderRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        if (isMobile) {
            setSlidesToShow(1);
        } else {
            setSlidesToShow(3);
        }
    }, [isMobile]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
        }
    }, []);

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: slidesToShow,
        arrows: true,
        dots: false,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        slidesPerRow: 1,
        rows: 1,
        vertical: false,
    };

    const items = [
        { id: 1, image: Image1 },
        { id: 2, image: Image2 },
        { id: 4, image: Image4 },
        { id: 5, image: Image5 },
        { id: 6, image: Image6 },
        { id: 7, image: Image7 },
        { id: 8, image: Image8 },
        { id: 9, image: Image9 },
        { id: 10, image: Image10 },
    ];

    return (
        <div className='Testimonials-Ato'>
            <div className='mt-16 text-center Testimonials'>
                <h1 data-aos="fade-up" data-aos-delay="200">Khám phá dịch vụ bảo dưỡng sơn ô tô cao cấp tại Garage Trần Hưng Autopaint</h1>
            </div>
            <div className='Testimonials-slider mt-16'>
                <Slider ref={sliderRef} {...settings}>
                    {items.map((item, index) => (
                        <div key={index} className="grid__colum-2-3">
                            <div className="home-Explore-item">
                                <div className='home-Explore-item-top'>
                                    <img src={item.image} alt="bannercenter" className="home-Explore-item-img" style={{ borderRadius: '15px' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='Testimonials-thanks-text mt-12 text-center'>
                <h2 className='mb-5' data-aos="fade-up" data-aos-delay="200">Cảm ơn Quý khách đã tin tưởng và lựa chọn dịch vụ của <br /> Garage Trần Hưng Autopaint.</h2>
                <div data-aos="fade-up" data-aos-delay="800">
                    <span className='mb-5' >
                        Chúng tôi luôn nỗ lực mang đến sự hài lòng cao nhất cho Quý khách hàng thông qua chất lượng dịch vụ
                        vượt trội và sự chuyên nghiệp tận tâm. Nếu Quý khách có bất kỳ đề xuất hay góp ý nào để chúng tôi hoàn
                        thiện hơn, xin đừng ngần ngại chia sẻ. Sự đóng góp của Quý khách chính là động lực để chúng tôi ngày
                        càng phát triển và phục vụ tốt hơn. </span>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

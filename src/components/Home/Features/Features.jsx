import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from "../../../assets/imgTwo/slider1.jpg";
import Image2 from "../../../assets/imgTwo/slider2.jpeg";
import Image3 from "../../../assets/imgTwo/A-Guide1.jpeg";
import Image4 from "../../../assets/imgTwo/A-Guide2.jpg";
import Image5 from "../../../assets/imgTwo/slider3.jpg";
import Image6 from "../../../assets/imgTwo/slider4.webp";
import Image7 from "../../../assets/imgTwo/1005546_m.JPG";

const Features = () => {
    const features = [
        {
            title: "Ngăn hư hỏng sớm với làm đẹp xe",
            description: "Trong quá trình bảo dưỡng, chúng tôi sử dụng các kỹ thuật tiên tiến để phát hiện và ngăn chặn các hư hỏng tiềm ẩn sớm. Dịch vụ làm đẹp xe tại Garage Trần Hưng Autopaint giúp bảo trì hiệu quả các vấn đề có thể xảy ra, giữ cho xe của bạn luôn ở trạng thái hoàn hảo và giảm thiểu nguy cơ hư hỏng lớn.",
            className: "",
            aosDelayfeA: "200",
        },
        {
            title: "Tiết kiệm sửa chữa qua sơn tỉa",
            description: "Dịch vụ sơn tỉa tại Garage Trần Hưng Autopaint giúp duy trì bề mặt xe trong tình trạng tốt nhất. Bằng cách xử lý kịp thời các vết trầy xước và vết nứt nhỏ, bạn có thể tiết kiệm chi phí sửa chữa lớn trong tương lai. Đội ngũ kỹ thuật viên của chúng tôi cam kết mang đến kết quả chất lượng và bảo vệ xe lâu dài.",
            className: "",
            aosDelayfeA: "600",
        },
        {
            title: "Sơn quây xe đảm bảo vận hành an toàn",
            description: "Sơn quây xe là một phần quan trọng trong việc bảo dưỡng toàn diện, giúp cải thiện cả tính thẩm mỹ và độ bền của xe. Tại Garage Trần Hưng Autopaint, dịch vụ sơn quây xe không chỉ mang lại vẻ ngoài mới mẻ mà còn đảm bảo xe vận hành an toàn và ổn định, giảm nguy cơ xảy ra sự cố trong quá trình sử dụng.",
            className: "mt-4",
            aosDelayfeA: "1000",
        },
        {
            title: "Giữ xe luôn mới với đánh bóng",
            description: "Đánh bóng xe là dịch vụ thiết yếu để duy trì vẻ đẹp và giá trị của xe. Garage Trần Hưng Autopaint cung cấp dịch vụ đánh bóng chuyên nghiệp, giúp khôi phục sự bóng bẩy và làm mới ngoại thất xe. Dịch vụ của chúng tôi không chỉ nâng cao vẻ ngoài của xe mà còn bảo vệ bề mặt khỏi các yếu tố môi trường, giữ xe của bạn luôn như mới.",
            className: "mt-4",
            aosDelayfeA: "1400",
        }
    ];

    const sliderRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        if (isMobile) {
            setSlidesToShow(1);
        } else {
            setSlidesToShow(4);
        }
    }, [isMobile]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
        }
    }, []);

    const items = [
        {
            image: Image1,
            classA: "ItemsA-One",
            title: "Sơn - Gò - Hàn để khôi phục và làm mới xe",
            description: "Dịch vụ sơn giúp cải thiện vẻ ngoài của xe, mang lại lớp sơn mới mẻ.",
            aosDelayEx: "0",
        },
        {
            image: Image2,
            classA: "ItemsA-Two",
            title: "Sơn tỉa và dặm vá cho bề mặt xe mịn màng",
            description: "Mang đến cho bạn một chiếc xe có bề mặt hoàn hảo như mới.",
            aosDelayEx: "200",
        },
        {
            image: Image3,
            classA: "ItemsA-Three",
            title: "Sơn quây xe và đổi màu tạo diện mạo mới lạ",
            description: "Tạo cho xe của bạn một phong cách độc đáo và ấn tượng.",
            aosDelayEx: "400",
        },
        {
            image: Image4,
            classA: "ItemsA-Four ItemsB-Four",
            title: "Đánh bóng xe để duy trì vẻ đẹp và bảo vệ lớp sơn",
            description: "Đánh bóng giúp loại bỏ các vết xước nhỏ và làm sáng bề mặt xe.",
            aosDelayEx: "600",
        },
        {
            image: Image5,
            classA: "ItemsA-Five",
            title: "Sơn xe máy mang đến diện mạo mới cho xe",
            description: "Sơn mới giúp xe máy trông như mới và tạo điểm nhấn cá nhân.",
            aosDelayEx: "800",
        },
        {
            image: Image6,
            classA: "ItemsA-Six",
            title: "Làm mới đồ nội thất để tăng tính thẩm mỹ và tiện nghi",
            description: "Tạo cho chiếc xe của bạn một không gian nội thất hiện đại và thoải mái.",
            aosDelayEx: "1000",
        },
        {
            image: Image7,
            classA: "ItemsA-Seven",
            title: "Kiểm tra và xử lý chuyên sâu mọi hư hỏng xe",
            description: "Đảm bảo rằng xe của bạn sẽ trở về trạng thái tối ưu nhất sau khi sửa chữa.",
            aosDelayEx: "1400",
        },
    ];


    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        vertical: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesPerRow: 1,
        rows: 1,

    };

    return (
        <>
            <div className='Features mt-16'>
                <div className='Features-textOne text-center'>
                    <h1 data-aos="fade-up" data-aos-delay="400">Lợi ích từ dịch vụ sơn và phục hồi xe</h1>
                    <div data-aos="zoom-in" data-aos-delay="800">
                        <span>Bảo dưỡng xe ô tô đúng cách giúp phòng tránh sự cố tiềm ẩn. Khám phá những lợi
                            ích từ dịch vụ sơn - gò - hàn, sơn tỉa, sơn dặm <br /> vá, sơn quây xe, sơn đổi màu, đánh
                            bóng xe, sơn xe máy và đồ nội thất:
                        </span>
                    </div>
                </div>

                <div className='Features-textTwo flex'>
                    {features.map((feature, index) => (
                        <div key={index} data-aos="zoom-in" data-aos-delay={feature.aosDelayfeA} className={`textTwo-Texts text-center mt-2 ${feature.className}`}>
                            <h2>{feature.title}</h2>
                            <span>{feature.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='Features-fileOne text-center mt-12'>
                <h1 data-aos="fade-up" data-aos-delay="200">Danh sách các dịch vụ sơn, sửa và làm mới</h1>
                <div className='Features-fileOne-slider mt-5'>
                    <Slider ref={sliderRef} {...settings}>
                        {items.map((item, index) => (
                            <div key={index} className="grid__colum-2-4">
                                <div className="home-Explore-item relative" data-aos="slide-up" data-aos-delay={item.aosDelayEx}>
                                    <div className='home-Explore-item-top'>
                                        <img src={item.image} alt="bannercenter" className="home-Explore-item-img" />
                                        <div className='home-Explore-text'></div>
                                    </div>
                                    <div className='home-Explore-textOne absolute z-10'>
                                        <h3 className={`${item.classA}`}>{item.title}</h3>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Features
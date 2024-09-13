import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image1 from "../../../assets/imgTwo/A-Guide1.jpeg";
import Image2 from "../../../assets/imgTwo/A-Guide2.jpg";
import Image3 from "../../../assets/imgTwo/A-Guide3.jpg";

import { LuPhoneCall } from "react-icons/lu";
import GeneralAbout from './GeneralAbout';


const Hero = () => {

    const ImageList = [
        {
            img: Image3,
            title: "Tân trang thân xe đẹp bền như mới",
            description:
                `Tại <span>Garage Trần Hưng Autopaint</span>, chúng tôi chuyên cung cấp dịch vụ tân trang và phục hồi thân xe, mang lại cho chiếc xe của bạn vẻ đẹp bền lâu như mới. Với đội ngũ kỹ thuật viên chuyên nghiệp và công nghệ tiên tiến, chúng tôi cam kết mang đến sự hoàn hảo trong từng chi tiết.`,
            aosDelayImg: "400",
            aosDelayA: "800",
            aosDelayB: "1200",
            aosDelayC: "1800",
            aosDelayD: "2200",
        },
        {
            img: Image2,
            title: "Làm mới thân vỏ, đẹp bền lâu dài",
            description:
                `Dịch vụ sửa chữa và làm mới ngoại thất của <span>Garage Trần Hưng Autopaint</span> không chỉ cải thiện vẻ ngoài của xe mà còn đảm bảo độ bền lâu dài. Chúng tôi sử dụng công nghệ hiện đại để làm mới mọi phần thân xe, giúp chiếc xe của bạn luôn nổi bật và bền bỉ theo thời gian.`,
            aosDelayImg: "400",
            aosDelayA: "800",
            aosDelayB: "1200",
            aosDelayC: "1800",
            aosDelayD: "2200",
        },
        {
            img: Image1,
            title: "Khôi phục và làm đẹp thân xe luôn mới",
            description:
                `Với dịch vụ làm đẹp và khôi phục thân xe tại <span>Garage Trần Hưng Autopaint</span>, chúng tôi chăm sóc toàn diện cho ngoại thất xe của bạn. Dịch vụ của chúng tôi giúp giữ cho chiếc xe của bạn luôn mới mẻ và tinh tế, từ sửa chữa đến làm đẹp, đảm bảo chất lượng và sự hài lòng lâu dài.`,
            aosDelayImg: "400",
            aosDelayA: "800",
            aosDelayB: "1200",
            aosDelayC: "1800",
            aosDelayD: "2200",
        },
    ];

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className='mt-28'>
            <Slider {...settings}>
                {ImageList.map((data, index) => (
                    <div key={index}>
                        <div className='relative' >
                            <div data-aos="zoom-in" data-aos-delay={data.aosDelayImg} className='image-container'>
                                <img
                                    src={data.img}
                                    alt=""
                                    style={{ height: '480px', width: '100%', borderRadius: '30px' }}
                                    className='object-cover overflow-hidden object-center'
                                />
                            </div>
                            <div className='Hero-title absolute z-10 top-28 text-center'>
                                <h1 data-aos="fade-up" data-aos-delay={data.aosDelayA}>{data.title}</h1>
                                <p data-aos="fade-up" data-aos-delay={data.aosDelayB} dangerouslySetInnerHTML={{ __html: data.description }} />
                                <h2 data-aos="fade-up" data-aos-delay={data.aosDelayC}>Đặt lịch sửa chữa !</h2>
                                <div data-aos="fade-up" data-aos-delay={data.aosDelayD} className='hotline-hero flex items-center'>
                                    <LuPhoneCall className='text-white text-xl hotline-LuPhone' />
                                    <h3 className='flex'><span className='mr-1 text-2xl' style={{ color: 'red', fontSize: "1.8rem" }}>HOTLINE:</span> 0346142183 - 0945176580</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
            <GeneralAbout />

        </div>
    )
}

export default Hero
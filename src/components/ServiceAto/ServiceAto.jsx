import React from 'react'
import Footer from '../Home/Footer/Footer'
import Image1 from "../../assets/imgFile/22842094.png";
import Image2 from "../../assets/image6.jpg";
import Image5 from "../../assets/imgTwo/3781958_m.jpg";
import Image6 from "../../assets/imgFile/2084745_m.jpg";
import ThankYouA from '../AboutUs/ThankYouA';
const ServiceAto = () => {

    const services = [
        {
            id: 1,
            image: Image2,
            title: 'Đồng sơn ô tô (gò, hàn, cắt vá)',
            description: 'Dịch vụ đồng sơn ô tô của chúng tôi, bao gồm gò, hàn, và vá, giúp khôi phục hoàn hảo ngoại hình xe sau va chạm.',
            aosDelaySer: "0",
        },
        {
            id: 4,
            image: Image5,
            title: 'Lắp đặt phụ kiện và đồ chơi nâng cấp cho xe ô tô',
            description: 'Chúng tôi chuyên lắp đặt phụ kiện và đồ chơi ô tô, giúp xe của bạn trở nên nổi bật và tiện nghi hơn.',
            aosDelaySer: "600",
        },
        {
            id: 5,
            image: Image6,
            title: 'Đánh bóng xe theo quy trình 3 bước Sonax',
            description: 'Dịch vụ đánh bóng xe của chúng tôi theo quy trình 3 bước chuẩn Sonax giúp mang lại vẻ bóng sáng hoàn hảo và bảo vệ lớp sơn xe.',
            aosDelaySer: "800",
        },
    ];

    return (
        <div className='ServiceAto'>
            <div className='relative ServiceAtoA-Ato'>
                <div className='ServiceAto-img' data-aos="zoom-in" data-aos-delay="2sss00">
                    <img src={Image1} alt="" />
                </div>
                <h1 data-aos="fade-up" data-aos-delay="600" className='absolute top-40 ml-64 z-10'>DỊCH VỤ SỬA CHỮA</h1>
            </div>
            <div className='mt-7 ServiceAto-text'>
                <h1 data-aos="fade-up" data-aos-delay="600">Danh sách các dịch vụ bảo dưỡng và sửa chữa ô tô <br /> nhanh chóng, chuyên nghiệp</h1>

                <div className='ServiceAto-textA-Ato pt-3 pb-3 pl-6 flex mt-7'>
                    {services.map(service => (
                        <div className='ServiceAto-item' key={service.id} data-aos="fade-up" data-aos-delay={service.aosDelaySer}>
                            <div className='ServiceAto-item-Ato'>
                                <img src={service.image} alt={service.title} />
                                <div className='ServiceAto-item-Ato-text mt-3'>
                                    <h5>{service.title}</h5>
                                    <span>{service.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ThankYouA />
            <Footer />
        </div>
    )
}

export default ServiceAto
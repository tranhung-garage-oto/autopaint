import React from 'react'
import Image3 from "../../assets/imgFile/2605655.png";
const ThankYouA = () => {
    return (
        <div className='mt-5 ml-10 AboutUs-ServiceC'>
            <div data-aos="fade-up" data-aos-delay="200">
                <span>Khi sử dụng bất kỳ dịch vụ nào tại<span style={{ color: 'red' }}> Garage ô tô Trần Hưng Autopaint</span>, quý khách sẽ luôn được phục vụ với sự tận tâm,
                    nhanh chóng và hiệu quả. Chúng tôi luôn đồng hành cùng khách hàng bằng những chính sách ưu đãi về giá cả hợp lý và các
                    chương trình chăm sóc xe miễn phí hàng quý, hàng năm nhằm tri ân khách hàng thân thiết. Đến với <span style={{ color: 'red' }}>Garage ô tô Trần Hưng
                        Autopaint</span>, quý khách có thể hoàn toàn yên tâm vì chúng tôi cam kết mang đến những sản phẩm và dịch vụ đạt chất lượng
                    cao nhất. Với phương châm <span className='mobi-siteAS' style={{ color: 'red', fontWeight: '700' }}>&quot;CHÚNG TÔI CAM KẾT HƯỚNG TỚI SỰ HÀI LÒNG CỦA QUÝ KHÁCH &quot; </span> , chúng tôi luôn nỗ lực để vượt qua mong đợi của bạn.
                </span>
            </div>
            <div className='flex ml-32 mobi-thankYouA'>
                <img src={Image3} alt="" data-aos="fade-left" data-aos-delay="800" className='mobiNo' />
                <img src={Image3} alt="" data-aos="zoom-in" data-aos-delay="800" className='thankYouA-mobiASX hidden' />
                <h1 data-aos="fade-left" data-aos-delay="1400" className='mobiNo text-center mt-24 ml-5'>Chúc Quý khách Thượng lộ Bình An!</h1>
            </div>
            <div className='hidden mobi-hidden thankYouA-mobiASX'>
                <h1 data-aos="zoom-in" data-aos-delay="1200" className='text-center mt-24 ml-5'>Chúc Quý khách Thượng lộ Bình An!</h1>
            </div>



        </div>
    )
}

export default ThankYouA
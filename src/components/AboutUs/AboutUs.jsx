import React from 'react'
import Footer from '../Home/Footer/Footer'
import GeneralAbout from '../Home/Hero/GeneralAbout'
import Image1 from "../../assets/imgFile/1458718.png";
import Image2 from "../../assets/imgFile/623653.png";
import ThankYouA from './ThankYouA';

const AboutUs = () => {
    return (
        <div className='AboutUsA'>
            <div className='relative AboutUs-Car' >
                <div className='AboutUs-imgCar' data-aos="zoom-in" data-aos-delay="200">
                    <img src={Image1} alt="" />
                </div>
                <h1 data-aos="fade-up" data-aos-delay="600" className='absolute top-56 left-96 z-10'>VỀ CHÚNG TÔI Hung Autopaint</h1>
            </div>
            <GeneralAbout />
            <div className='mt-24 AboutUs-Car-text' data-aos="zoom-in" data-aos-delay="100">
                <div data-aos="fade-up" data-aos-delay="200">
                    <span className='mb-10'>Hiện nay, nền kinh tế Việt Nam đang phát triển mạnh mẽ và nhu cầu sở hữu ô tô ngày càng gia
                        tăng, việc tìm kiếm một gara uy tín để chăm sóc và bảo dưỡng xe là rất quan trọng. Các dịch vụ cần thiết bao gồm
                        sơn, gò, hàn, sơn tỉa, dặm vá, sơn quây xe, đổi màu xe, đánh bóng toàn bộ xe, sơn xe máy và làm mới nội thất.
                        Với sự đa dạng của hàng trăm gara trên thị trường, việc chọn được một địa chỉ tin cậy, chất lượng và minh bạch
                        là một thách thức lớn cho các chủ xe.
                    </span><br /> <br />
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <span> <span className='mobi-siteBG' style={{ color: 'red', fontWeight: '700', fontSize: '19px' }}>Với hơn 12 năm kinh nghiệm</span>,
                        và sự tận tâm trong ngành sửa chữa ô tô, Garage Trần Hưng đã khẳng định được uy tín và sự tin cậy tại Hải Lý - Hải Hậu - Nam Định.
                        Chúng tôi cung cấp đầy đủ các dịch vụ từ sơn, gò, hàn, sơn tỉa, dặm vá, sơn quây xe, đổi màu xe, đánh bóng toàn bộ xe, sơn xe máy
                        đến làm mới nội thất. Với quy trình làm việc chuyên nghiệp và chất lượng dịch vụ hàng đầu, chúng tôi luôn đáp ứng tốt nhất nhu cầu
                        của khách hàng, bất kể là xe phổ thông hay cao cấp.
                    </span><br /> <br />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <span> <span className='mobi-siteBG' style={{ color: 'red', fontWeight: '1000', fontSize: '19px' }}>Garage ô tô Trần Hưng Autopaint </span>
                        là địa chỉ đáng tin cậy trong việc cung cấp dịch vụ sửa chữa và sơn ô tô với không gian nhà xưởng rộng rãi và trang thiết bị hiện đại. Với
                        đội ngũ chuyên nghiệp và dày dạn kinh nghiệm, chúng tôi chuyên cung cấp các dịch vụ từ sơn, gò, hàn, sơn tỉa, dặm vá, sơn quây và đổi màu xe,
                        đến đánh bóng toàn bộ xe, sơn xe máy và làm mới nội thất. Garage Trần Hưng ngày càng khẳng định được vị thế của mình và được đánh giá là một
                        trong những trung tâm bảo dưỡng và sửa chữa ô tô hàng đầu tại Hải Lý - Hải Hậu, luôn đảm bảo sự hài lòng và tin tưởng của khách hàng.
                    </span><br /> <br />
                </div>
                <div data-aos="fade-up" data-aos-delay="1400">
                    <span><span className='mobi-siteBG' style={{ color: 'red', fontWeight: '700', fontSize: '19px' }}>Garage ô tô Trần Hưng Autopaint</span> cam kết mang đến những dịch vụ
                        <span className='mobi-siteBG' style={{ color: 'red', fontWeight: '700', fontSize: '19px' }}> &quot;Chăm sóc xe toàn diện&quot; </span>
                        trở thành lựa chọn đáng tin cậy cho bảo trì, bảo dưỡng, sơn và sửa chữa ô tô. Chúng tôi không chỉ cung cấp dịch vụ sơn và sửa chữa chất
                        lượng cao mà còn biến garage thành một &quot;spa&quot; hiện đại cho xe của bạn. Tại đây, khách hàng có thể yên tâm với các phụ tùng và thiết bị
                        chính hãng, cùng các dịch vụ từ sơn, gò, hàn, sơn tỉa, dặm vá, sơn quây xe, đổi màu xe, đánh bóng toàn bộ xe, sơn xe máy đến làm mới
                        nội thất. Chúng tôi luôn lắng nghe nhu cầu của bạn, đưa ra giải pháp hiệu quả và không ngừng cải thiện chất lượng dịch vụ.
                    </span>
                </div>
                <div className='AboutUs-Car-text mobi-carAS mt-8' data-aos="zoom-in" data-aos-delay="600">
                    <img src={Image2} style={{ height: '434px', width: '85%' }} alt="" className=' ml-20 object-cover overflow-hidden object-center cursor-pointer' />
                </div>
            </div>
            <div className='AboutUs-Car-ServiceA mt-12'>
                <h2 className='text-center' data-aos="fade-up" data-aos-delay="200">DỊCH VỤ CỦA CHÚNG TÔI</h2>
                <div className='mt-8 ml-10 AboutUs-ServiceB'>
                    <h3 data-aos="fade-right" data-aos-delay="200" className='flex'><p>I.</p>SƠN, GÒ , HÀN</h3>
                    <li data-aos="fade-up" data-aos-delay="400" className='ml-8' >Đảm bảo phục hồi và làm mới xe bị hư hỏng.</li>
                </div>
                <div className='mt-8 ml-10 AboutUs-ServiceB'>
                    <h3 data-aos="fade-right" data-aos-delay="400" className='flex'><p>II.</p>SƠN TỈA VÀ DẶM VÁ</h3>
                    <li data-aos="fade-up" data-aos-delay="600" className='ml-8'>Đem lại bề mặt xe mịn màng và hoàn hảo.</li>
                </div>
                <div className='mt-8 ml-10 AboutUs-ServiceB'>
                    <h3 data-aos="fade-right" data-aos-delay="600" className='flex'><p>III.</p>SƠN QUÂY VÀ ĐỔI MÀU XE</h3>
                    <li data-aos="fade-up" data-aos-delay="200" className='ml-8'>Tạo diện mạo mới cho xe của bạn.</li>
                </div>
                <div className='mt-8 ml-10 AboutUs-ServiceB'>
                    <h3 data-aos="fade-right" data-aos-delay="800" className='flex'><p>IV.</p>ĐÁNH BÓNG TOÀN BỘ XE</h3>
                    <li data-aos="fade-up" data-aos-delay="200" className='ml-8'>Cung cấp lớp bảo vệ và làm mới bề mặt xe.</li>
                </div>
                <div className='mt-8 ml-10 AboutUs-ServiceB'>
                    <h3 data-aos="fade-right" data-aos-delay="1000" className='flex'><p>V.</p>SƠN XE MÁY</h3>
                    <li data-aos="fade-up" data-aos-delay="200" className='ml-8'>Đem đến vẻ đẹp mới cho xe máy.</li>
                </div>
                <div className='mt-8 ml-10 AboutUs-ServiceB'>
                    <h3 data-aos="fade-right" data-aos-delay="1000" className='flex'><p>VI.</p>SƠN NỘI THẤT</h3>
                    <li data-aos="fade-up" data-aos-delay="200" className='ml-8'>Làm mới và cải thiện nội thất xe.</li>
                </div>
                <ThankYouA />

            </div>
            <Footer />

        </div>
    )
}

export default AboutUs
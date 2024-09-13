import React from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Image4 from "../../../assets/imgTwo/30787101_m.jpg";

const GeneralAbout = () => {
    return (
        <div className='flex introduction mt-16 mobi-AbouAS'>
            <div className='introduction-about'>
                <h4 data-aos="fade-right" data-aos-delay="200">GIỚI THIỆU CHUNG VỀ</h4>
                <h1 data-aos="fade-up" data-aos-delay="600" className='flex'>Garage <p className='ml-2 mr-2' style={{ color: 'red' }}>Trần Hưng</p> <p style={{ color: '#fce84e' }}>Autopaint</p></h1>
                <div data-aos="fade-up" data-aos-delay="800">
                    <span >Tại <span style={{ color: 'red', fontSize: '19px' }}> Garage Trần Hưng Autopaint</span>, chúng tôi tự hào cung cấp dịch vụ Sơn - Gò - Hàn
                        chuyên nghiệp, chất lượng vượt trội. Chúng tôi chuyên thực hiện các công việc sơn tỉa, sơn dặm vá, và sơn quây xe để làm mới vẻ ngoài của chiếc xe của bạn.
                        Ngoài ra, dịch vụ sơn đổi màu, đánh bóng toàn bộ xe, sơn xe máy và đồ nội thất chúng tôi cũng mang lại kết quả ấn tượng, giữ cho xe luôn như mới. Đội ngũ kỹ thuật
                        viên giàu kinh nghiệm của chúng tôi cam kết mang lại sự hoàn hảo trong từng chi tiết, giúp chiếc xe của bạn bền đẹp theo thời gian.
                        Tại Garage Trần Hưng, sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi, và chúng tôi luôn nỗ lực để mang
                        đến dịch vụ tận tâm và chất lượng nhất. Hãy đến với chúng tôi để cảm nhận sự khác biệt và nâng tầm vẻ đẹp cho chiếc xe của bạn!
                    </span>
                </div>
                <div className='flex mt-10 ml-8 mobi-GeneA '>
                    <div className='icon-div' data-aos="fade-up" data-aos-delay="800">
                        <GiSteeringWheel />
                        <div className='icon-div-text'>
                            <span>12+ <br />NĂM KINH NGHIỆM</span>
                        </div>

                    </div>
                    <div className='icon-div-two ml-16' data-aos="fade-up" data-aos-delay="800">
                        <HiOutlineWrenchScrewdriver />
                        <div className='icon-div-text'>
                            <span>2000+ <br />KHÁCH HÀNG</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='introduction-text ml-6'>
                <img data-aos="fade-up" data-aos-delay="800"
                    src={Image4}
                    alt=""
                    style={{ height: '100%', width: '100%', borderRadius: '30px' }}
                    className='object-cover overflow-hidden object-center'
                />
            </div>
        </div>
    )
}

export default GeneralAbout
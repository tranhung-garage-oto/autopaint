import React from 'react'
import Svgautopaint from '../../Pagejsx/Svgautopaint'
import { SlEarphonesAlt } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { GrMap } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import facebook from "../../../assets/imgOne/facebook.png";
import messenger from "../../../assets/imgOne/messenger.jfif";
import zalo from "../../../assets/imgOne/zalo.webp";
import QRzalo from "../../../assets/imgOne/zaloA.jpg";
import youtube from "../../../assets/imgOne/youtube.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer mt-10 '>
            <div className='Footer-autopaint'>
                <Link to="/"> <Svgautopaint /> </Link>
                <div className='flex mt-6 Footer-autopaintMobi'>
                    <div className='Footer-autopaint-text'>
                        <h2 data-aos="fade-up" data-aos-delay="800">Garage Ô Tô Trần Hưng Autopaint</h2>
                        <div data-aos="fade-up" data-aos-delay="1200">
                            <span> Là điểm đến lý tưởng cho những người yêu xe, nơi bạn sẽ được trải nghiệm dịch vụ Sơn - Gò
                                - Hàn, sơn tỉa, dặm vá, sơn quây và đổi màu xe, đánh bóng toàn bộ xe, sơn xe máy và làm mới nội thất.
                                Chúng tôi cam kết mang lại sự hài lòng tối ưu với chất lượng dịch vụ xuất sắc.
                            </span>
                        </div>
                        <h3 data-aos="fade-up" data-aos-delay="1600" className='flex text-center items-center mt-5'><GrMap /> Xóm C, Hải Lý, Hải Hậu, Nam Định - Nay ( Thị Trấn Cồn )</h3>
                        <h4 data-aos="fade-up" data-aos-delay="2000" className='flex text-center items-center'><MdOutlineEmail /> tranhung.garage.oto@gmail.com</h4>
                        <h5 data-aos="fade-up" data-aos-delay="2400" className='flex text-center items-center'> <SlEarphonesAlt /> 0346142183 - 0945176580</h5>
                    </div>
                    <div className='Footer-autopaint-text mobi-mtAto ml-10 text-center'>
                        <h2 data-aos="fade-up" data-aos-delay="2800">mạng xã hội</h2>

                        <div className='flex ml-20 Footer-autopaint-text-A'>
                            <Link target='_blank' to="https://www.facebook.com/profile.php?id=100048518692993&mibextid=ZbWKwL"> <img data-aos="fade-up" data-aos-delay="3200" src={facebook} style={{ height: '60%', width: '60%', borderRadius: '30px' }} alt="" className='object-cover overflow-hidden object-center cursor-pointer' /></Link>
                            <Link target='_blank' to="https://www.messenger.com/t/100048518692993"> <img data-aos="fade-up" data-aos-delay="3600" src={messenger} style={{ height: '60%', width: '60%', borderRadius: '30px' }} alt="" className='object-cover overflow-hidden object-center cursor-pointer' /></Link>
                            <Link target='_blank' to="https://zaloapp.com/qr/p/zwu5l75cluz1"> <img data-aos="fade-up" data-aos-delay="4000" src={zalo} style={{ height: '60%', width: '60%', borderRadius: '30px' }} alt="" className='object-cover overflow-hidden object-center cursor-pointer' /></Link>
                            <Link target='_blank' to="#"> <img data-aos="fade-up" data-aos-delay="4400" src={youtube} style={{ height: '65%', width: '65%', borderRadius: '30px' }} alt="" className='object-cover overflow-hidden object-center cursor-pointer' /></Link>
                        </div>
                        <div className='mobiA-ZaloAS '>
                            <Link target='_blank' to="https://zaloapp.com/qr/p/zwu5l75cluz1"> <img data-aos="zoom-in" data-aos-delay="4400" src={QRzalo} style={{ height: '40%', width: '60%', borderRadius: '30px' }} alt="" className='object-cover ml-16 overflow-hidden object-center cursor-pointer' /></Link>
                        </div>
                    </div>
                    <div className='Footer-autopaint-text mobi-mtAto ml-10'>
                        <h2 className='text-center' data-aos="fade-up" data-aos-delay="4800">đặt lịch online</h2>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <span>Để không phải chờ đợi, hãy liên hệ đặt lịch trước với Garage Trần Hưng Autopaint để được giữ chỗ không phải chờ đợi.</span>
                        </div>
                        {/* Yeeu cầu khi tôi bấm vào để gọi ở trên bản mobi thì chuyển qua gọi sang sim luôn */}
                        <div className='flex Footer-hostline mt-6 ml-2'>
                            <a href="tel:0346142183" data-aos="fade-up" data-aos-delay="1000" className='Footer-hostline-btn flex mr-10 hostline-mobiAS'><LuPhoneCall />0346142183</a>
                            <a href="tel:0945176580" data-aos="fade-up" data-aos-delay="1400" className='Footer-hostline-btn flex'><LuPhoneCall />0945176580</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Footer-FooterA text-center mt-8'>
                <div className='Footer-FooterB mb-2'></div>
                <h3> Bản quyền thuộc về huong.fullstack@gmail.com </h3>
                <p><span style={{ color: 'red' }}> Garage Ô Tô Trần Hưng Autopaint </span> &copy; hân hạnh được phục vụ Quý Khách - More information, please visit my faceboook. <a target='_blank' style={{ color: '#0866ff' }} href="https://www.facebook.com/profile.php?id=100013025299135&locale=vi_VN"> Click here</a></p>
            </div>
        </div>
    )
}

export default Footer
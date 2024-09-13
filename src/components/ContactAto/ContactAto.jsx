import React from 'react'
import Footer from '../Home/Footer/Footer'
import Image1 from "../../assets/imgFile/1457158.png";
import Image2 from "../../assets/imgFile/821368.png";
import { MdOutlineEmail } from "react-icons/md";
import { GrMap } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import MapsContact from './MapsContact';
const ContactAto = () => {
    return (
        <div className='ContactAto mt-10'>
            <div className='relative ContactAtoA-Ato'>
                <div className='ContactAto-img' data-aos="zoom-in" data-aos-delay="200">
                    <img src={Image1} alt="" />
                </div>
                <h1 data-aos="fade-up" data-aos-delay="600" className='absolute top-24 ml-52 z-10'>LIÊN HỆ VỚI CHÚNG TÔI</h1>
            </div>
            <div className='flex information mt-16'>
                <div className='information-text pl-8'>
                    <h2 data-aos="fade-right" data-aos-delay="200">Garage Ô Tô Trần Hưng Autopaint</h2>
                    <h3 data-aos="fade-up" data-aos-delay="400" className='flex text-center items-center mt-5'><GrMap /> Xóm C, Hải Lý, Hải Hậu, Nam Định - Nay ( Thị Trấn Cồn )</h3>
                    <h4 data-aos="fade-up" data-aos-delay="600" className='flex text-center items-center mt-3'><MdOutlineEmail /> tranhung.garage.oto@gmail.com</h4>
                    <div className='flex Footer-hostline mt-5'>
                        <a href="tel:0346142183" data-aos="fade-up" data-aos-delay="800" className='Footer-hostline-btn hostline-mr-Ato flex mr-10'><LuPhoneCall />0346142183</a>
                        <a href="tel:0945176580" data-aos="fade-up" data-aos-delay="1000" className='Footer-hostline-btn flex'><LuPhoneCall />0945176580</a>
                    </div>
                </div>
                <div className='information-img'>
                    <img src={Image2} alt="" data-aos="zoom-in" data-aos-delay="400" />
                </div>

            </div>
            <div className='mt-10 information-maps' data-aos="zoom-in" data-aos-delay="800">
                <MapsContact />
            </div>
            <Footer />
        </div>
    )
}

export default ContactAto
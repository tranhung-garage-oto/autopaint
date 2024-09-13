import React, { useEffect, useState } from 'react';
import SvgOne from '../Pagejsx/SvgOne';
import { LuPhoneCall } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái để kiểm soát menu di động

    useEffect(() => {
        setActiveLink(location.pathname);
        window.scrollTo(0, 0);
        setIsMenuOpen(false);  // Đóng menu khi thay đổi đường dẫn
    }, [location]);

    // Xử lý sự kiện nhấp bên ngoài menu di động để đóng menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobi-block')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const Menu = [
        { id: 1, name: "TRANG CHỦ", link: "/", aosDelay: "0" },
        { id: 2, name: "GIỚI THIỆU", link: "/gioi-thieu", aosDelay: "200" },
        { id: 3, name: "PHỤ TÙNG Ô TÔ", link: "/phu-tung-o-to", aosDelay: "400" },
        { id: 4, name: "DỊCH VỤ", link: "/dich-vu", aosDelay: "600" },
        { id: 5, name: "LIÊN HỆ", link: "/lien-he", aosDelay: "800" },
    ];

    return (
        <div className='fixed top-0 MobiB-AutoB' style={{ width: '1250px', zIndex: '10000' }}>
            <div className='bg-red-500 h-24 flex'>
                <div className='logo-autopain ml-4 mt-2'>
                    <Link to="/"><SvgOne /></Link>
                </div>
                <div className='flex justify-center ml-7 mobiNo'>
                    <ul className="sm:flex hidden items-center gap-4">
                        {Menu.map((data) => (
                            <li key={data.id} data-aos="fade-down" data-aos-delay={data.aosDelay} className='cursor-pointer inline-block font-bold px-3 duration-200'>
                                <Link
                                    to={data.link}
                                    className={`navbar-link ${location.pathname === data.link ? 'text-yellow-400 underline' : 'text-white'
                                        } hover:underline`}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className='sm:flex items-center ml-6 cursor-pointer'>
                        <li className='flex items-center' data-aos="fade-down" data-aos-delay="1000">
                            <LuPhoneCall className='text-white text-xl' />
                            <span className='ml-3 font-bold text-white'>HOTLINE:</span>
                        </li>
                        <li className='ml-4 font-bold text-white' data-aos="fade-down" data-aos-delay="1400">
                            <span className='text-lg'>0346142183</span>
                            <span className='block text-lg'>0945176580</span>
                        </li>
                    </ul>
                </div>
                {/* Nút menu di động */}
                <button className='mobi-block' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoMenu />
                </button>
            </div>

            {/* Menu di động */}
            {isMenuOpen && (
                <div className='mobile-menu flex bg-white absolute pl-8 top-24 left-0 w-full p-4 shadow-lg z-50'>
                    <ul className='flex mobi-liMenuA flex-col items-start'>
                        {Menu.map((data) => (
                            <li key={data.id} className='py-2 mobi-liMenu'>
                                <Link
                                    to={data.link}
                                    className={`block ${location.pathname === data.link ? 'text-yellow-400 underline' : 'text-black'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className='mobiAto-liMenuB ml-3 text-center'>
                        <div className='flex mt-8 text-center items-center'>
                            <li><LuPhoneCall className='ml-4' style={{ fontSize: "30px", color: "red" }} /></li>
                            <span className='ml-2 font-bold' style={{ fontSize: "20px", color: "red", fontFamily: "Trip Sans" }}>HOTLINE:</span>
                        </div>
                        <li className='mobi-liMenuB-span ml-2 mt-3  font-bold text-gray-950'>
                            <span className='text-lg'>0346142183</span>
                            <span className='block text-lg'>0945176580</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;

import React, { useState } from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import zalo from "../../assets/imgOne/zalo.webp";
import facebook from "../../assets/imgOne/facebook.png";
import messenger from "../../assets/imgOne/messenger.jfif";
import { Link } from 'react-router-dom';
import ModalPhoneOnline from './ModalPhoneOnline';
const OnlinePhone = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="phone-button-container">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <button className="phone-button" onClick={openModal} >
                    <GiRotaryPhone style={{ fontSize: "36px" }} />
                </button>
            </div>
            <div className="fabook-button-container">
                <div className="circle fabook-circle"></div>
                <div className="circle fabook-circle"></div>
                <div className="circle fabook-circle"></div>
                <button className="fabook-button">
                    <Link target='_blank' to="https://www.facebook.com/profile.php?id=100048518692993&mibextid=ZbWKwL">
                        <img src={facebook} alt="" style={{ height: '100%', width: '100%', borderRadius: '30px' }} className='object-cover overflow-hidden object-center cursor-pointer' />
                    </Link>
                </button>
            </div>
            <div className="Mess-button-container">
                <div className="circle Mess-circle"></div>
                <div className="circle Mess-circle"></div>
                <div className="circle Mess-circle"></div>
                <button className="Mess-button">
                    <Link target='_blank' to="https://www.messenger.com/t/100048518692993">
                        <img src={messenger} alt="" style={{ height: '95%', width: '95%', borderRadius: '30px' }} className='pl-0.5 object-cover overflow-hidden object-center cursor-pointer' />
                    </Link>
                </button>
            </div>
            <div className="Zalo-button-container">
                <div className="circle Zalo-circle"></div>
                <div className="circle Zalo-circle"></div>
                <div className="circle Zalo-circle"></div>
                <button className="Zalo-button">
                    <Link target='_blank' to="https://zaloapp.com/qr/p/zwu5l75cluz1">
                        <img src={zalo} alt="" style={{ height: '100%', width: '100%', borderRadius: '30px' }} className='object-cover overflow-hidden object-center cursor-pointer' />
                    </Link>
                </button>
            </div>
            <ModalPhoneOnline
                show={isModalOpen}
                handleClose={closeModal}
            />
        </>
    )
}

export default OnlinePhone
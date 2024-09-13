import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Svgautopaint from './Svgautopaint';
import { LuPhoneCall } from "react-icons/lu";
const ModalPhoneOnline = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className='ModalPhoneOnline'>
                        <Svgautopaint />
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='Footer-hostline Modal-Phone-OnlineBtn ml-10 flex'>
                    <a href="tel:0346142183" data-aos="fade-up" data-aos-delay="200" className='Footer-hostline-btn Modal-PhoneBtn flex mr-10 hostline-mobiAS'><LuPhoneCall />0346142183</a>
                    <a href="tel:0945176580" data-aos="fade-up" data-aos-delay="400" className='Footer-hostline-btn flex'><LuPhoneCall />0945176580</a>

                </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalPhoneOnline
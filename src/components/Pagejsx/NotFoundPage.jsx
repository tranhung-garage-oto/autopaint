import React from 'react'
import './NotFoundPage.css';
import NotFoundImage from '../../assets/imgOne/404.png';
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img src={NotFoundImage} alt="Not Found" />
    </div>
  )
}

export default NotFoundPage
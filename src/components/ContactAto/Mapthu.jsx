import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, LayersControl, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { GrDirections } from 'react-icons/gr';

const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="43" viewBox="0 0 25 41">
  <path d="M12.5 0c-6.9 0-12.5 5.6-12.5 12.5 0 7.5 12.5 28.5 12.5 28.5s12.5-21 12.5-28.5C25 5.6 19.4 0 12.5 0zM12.5 21.5c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" fill="red"/>
</svg>
`;
const redIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgIcon),
    iconSize: [29, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const CustomControlContent = () => {
    return (
        <div className='noreferrer-Ato' style={{ background: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
            <div className='flex'>
                <div className=''>
                    <strong style={{ color: 'red', fontSize: '14px' }}>Hưng Autopaint</strong>
                    <h3 style={{ fontSize: '13px' }}>Hải Lý, Hải Hậu, Nam Định</h3>
                </div>
                <div className='ml-4'>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=20.124361,106.298556" target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '13px' }}>
                        <GrDirections className='ml-5' style={{ marginRight: '5px', fontSize: '24px' }} />
                        Chỉ đường
                    </a>
                </div>
            </div>
            <a href="https://maps.app.goo.gl/Z2MHeVyHA3dxVbm66" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px' }}>Xem bản đồ lớn hơn</a><br />
        </div>
    );
};

const CustomControl = () => {
    const map = useMap();

    useEffect(() => {
        const control = L.control({ position: 'topleft' });

        control.onAdd = () => {
            const container = L.DomUtil.create('div');
            const placeholder = L.DomUtil.create('div', '', container);
            const root = ReactDOM.createRoot(placeholder);
            root.render(<CustomControlContent />);
            return container;
        };

        control.addTo(map);

        return () => {
            map.removeControl(control);
        };
    }, [map]);

    return null;
};

const ControlWithWheelAndMouse = () => {
    const map = useMap();
    const [showMessage, setShowMessage] = useState(false);
    const [showTouchMessage, setShowTouchMessage] = useState(false);

    useEffect(() => {
        const mapContainer = map.getContainer();

        const showZoomMessage = () => {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 2000);
        };

        const showTouchMessageFunc = () => {
            setShowTouchMessage(true);
            setTimeout(() => setShowTouchMessage(false), 2000);
        };

        const hideZoomMessage = () => {
            setShowMessage(false);
        };

        const enableScrollZoom = (e) => {
            if (e.ctrlKey || e.buttons === 1) {
                map.scrollWheelZoom.enable();
                hideZoomMessage();
            } else {
                map.scrollWheelZoom.disable();
                showZoomMessage();
            }
        };

        const handleTouch = (e) => {
            if (e.touches.length === 1) {
                map.scrollWheelZoom.disable();
                showTouchMessageFunc();
            } else if (e.touches.length > 1) {
                map.scrollWheelZoom.enable();
                hideZoomMessage();
            }
        };

        map.scrollWheelZoom.disable();


        mapContainer.addEventListener('wheel', enableScrollZoom, { passive: false });
        mapContainer.addEventListener('mousedown', enableScrollZoom);
        mapContainer.addEventListener('touchstart', handleTouch, { passive: false });
        mapContainer.addEventListener('touchmove', handleTouch, { passive: false });

        return () => {
            mapContainer.removeEventListener('wheel', enableScrollZoom);
            mapContainer.removeEventListener('mousedown', enableScrollZoom);
            mapContainer.removeEventListener('touchstart', handleTouch);
            mapContainer.removeEventListener('touchmove', handleTouch);
        };
    }, [map]);

    return (
        <>
            {showMessage && (
                <div className='showMessage-web absolute'>
                    <h1>Sử dụng Ctrl + cuộn hoặc nhấn giữ chuột trái để thu phóng bản đồ</h1>
                </div>
            )}
            {showTouchMessage && (
                <div className='showTouchMessage-web absolute'>
                    <h1>Sử dụng hai ngón tay để di chuyển bản đồ</h1>
                </div>
            )}
        </>
    );
};

const MapsContact = () => {
    const center = [20.124361, 106.298556];
    const zoom = 16;

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
        >
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Bản đồ">
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                        maxZoom={20}
                        attribution="&copy; <a href='https://www.google.com/maps'>Google Maps</a> contributors"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="Vệ tinh">
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                        maxZoom={30}
                        attribution="&copy; <a href='https://www.google.com/maps'>Google Maps</a> contributors"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>

            <Marker position={center} icon={redIcon} />

            <CustomControl />
            <ControlWithWheelAndMouse />
        </MapContainer>
    );
};

export default MapsContact;

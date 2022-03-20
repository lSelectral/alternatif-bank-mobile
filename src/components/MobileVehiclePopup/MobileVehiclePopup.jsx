import './MobileVehiclePopup.scss';
import { Home, InfoOutlined} from '@material-ui/icons';
import { useState } from 'react';
import CarCall from '../../resource/car_call.png'

const MobileVehiclePopup = ({closePopup}) => {

    const handleClose = (e) => {
        e.preventDefault();
        closePopup(false);
    }

    return (
        <div className="popup">
            <div className="popup-container">
                <div className="popup-left">
                    <Home className="popup-icons"/>
                    <span className="popup-text">EV</span>
                </div>
                <div className="popup-right">
                    <span className="address">
                        Yedi Eylül Mah. 1200. Sokak No:4 Efeler/Aydın
                    </span>
                </div>
            </div>
            <div className="popup-info">
                <div className="info-container">
                    <InfoOutlined className='info-icon'/>
                    <span className="info-icon-text">HATIRLATMA</span>
                </div>
                <span className="info-text">
                    Mobil Şube her ay ayın <b>15. günü</b> evinize otomatik gelecektir.
                    Eve mobil şube servisini <b>bu ay 3</b> kere daha çağırabilirsiniz.
                </span>
            </div>

            <img src={CarCall} alt="Araba Çağırma" className="vehicle-img" />
            
            <button className="call-service button">
                ŞİMDİ ÇAĞIR
            </button>
            <button className="call-help button">
                YARDIM ÇAĞIR
            </button>
            <button onClick={handleClose} className='close-button button'>
                ÇIKIŞ YAP
            </button>
        </div>
    )
}

export default MobileVehiclePopup
import './AlternativeLogin.scss';
import TopBar from '../../components/TopBar/TopBar';
import RegisterBottom from '../../components/RegisterBottom/RegisterBottom';
import { DescriptionOutlined, DirectionsCarOutlined, ImportExportOutlined,
LocalAtmOutlined,
MicOutlined} 
from '@material-ui/icons';
// import useSpeechToText from 'react-hook-speech-to-text';
import MobileVehiclePopup from '../../components/MobileVehiclePopup/MobileVehiclePopup';
import PayBillPopup from '../../components/PayBillPopup/PayBillPopup';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import GlobalSpeechRecognizer from '../../components/GlobalSpeechRecognizer/GlobalSpeechRecognizer';
// import { useSpeechSynthesis } from "react-speech-kit";

const AlternativeLogin = () => {
    const navigate = useNavigate();
    // const { speak } = useSpeechSynthesis();
    const [mobileVehiclePopupVisibility, setmobileVehiclePopupVisibility] = useState(false);
    const [payBillPopupVisibility, setPayBillPopupVisibility] = useState(false);

    return (
        <div className='login'>
            <TopBar isLogin={true}/>
            <div className="background"/>
            <div className='background-shape'/>
            <GlobalSpeechRecognizer setMobileVehiclePopupVisibility={setmobileVehiclePopupVisibility} payBillPopupVisibility={payBillPopupVisibility}
            setPayBillPopupVisibility={setPayBillPopupVisibility} mobileVehiclePopupVisibility={mobileVehiclePopupVisibility}/>
            <div className='center'>
                <span className="welcomeText">Hoş geldiniz</span>
                <span className="nameText">Recep Çiftçi</span>
                <span className="change-account-text">Hesap değiştir</span>
                <button className="login-button"
                onClick={() => navigate("/")}>
                    Giriş Yap
                </button>
                <div className='forget-password-container'>
                    <div/>
                    <span className="forget-passoword-text">Şifremi Unuttum</span>
                </div>
            </div>

            <div className="mic-container">
                <div className="mic-background">
                    <MicOutlined className="mic-icon"/>
                </div>
            </div>

            <div className='action-bottom'>
                <div className="action-container" onClick={() => setmobileVehiclePopupVisibility(true)}>
                    <DirectionsCarOutlined className='action-icon'/>
                    <span className="action-text">Mobil Araç</span>
                </div>
                <div className="action-container" onClick={() => {setPayBillPopupVisibility(true); 
            // speak({ text: `
            //     3 adet faturanız bulunmaktadır.
            //     Elektrik faturası 1450 TL olup, son ödeme tarihi 27 Marttır.
            //     Su faturası 250 TL olup, son ödeme tarihi 5 Nisandır.
            //     İnternet faturası 170 TL olup, son ödeme tarihi 14 Nisandır.
            // `, lang: "tr-TR"})
                
                }}>
                    <DescriptionOutlined className='action-icon'/>
                    <span className="action-text">Fatura Öde</span>
                </div>
                <div className="action-container">
                    <ImportExportOutlined className='action-icon'/>
                    <span className="action-text">Para Gönder/Al</span>
                </div>
                <div className="action-container">
                    <LocalAtmOutlined className='action-icon'/>
                    <span className="action-text">Para Yatır/Çek</span>
                </div>
            </div>

            {mobileVehiclePopupVisibility ? <MobileVehiclePopup closePopup={setmobileVehiclePopupVisibility}/> : null}
            {payBillPopupVisibility ? <PayBillPopup closePopup={setPayBillPopupVisibility}/> : null}

            <RegisterBottom isLogin={true}/>
        </div>
    )
}

export default AlternativeLogin
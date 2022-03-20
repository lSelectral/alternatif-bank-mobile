import './Card.scss'
import CreditCard from '../../resource/credit_card.png'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import TopBar from '../../components/TopBar/TopBar'
import RegisterBottom from '../../components/RegisterBottom/RegisterBottom'
import { useState } from 'react'
const Card = () => {
    const [collapsablePanel, setCollapsablePanel] = useState(true);

    const handleCollapse = (e) => {
        e.preventDefault();
        setCollapsablePanel(!collapsablePanel);
    }

    return (
        <div className='card'>
        <TopBar isLogin={false}/>
        <div className="card-container">
            <img src={CreditCard} alt="Kredi Kartı" className="credit-card" />
            <span className="card-type">Alternatif Bank Uygun Kart</span>
            <span className="card-number">1111 **** **** 4444</span>
            <span className="card-owner">Şebnem Tan</span>
            <div className="change-card">
            <KeyboardArrowDown className='change-icon'/>
            <span className="change-text">Değiştir</span>
            </div>
        </div>

        <hr className="separator"/>

        <div className="card-limit-info">
            <div className="card-limit">
            <span className="limit-header">Toplam Tutar</span>
            <span className="limit-text">12.000,00 TL</span>
            </div>
            <div className="card-limit">
            <span className="limit-header">Dönem İçi Harcama</span>
            <span className="limit-text">10.000,00 TL</span>
            </div>
            <div className="card-limit">
            <span className="limit-header">Kullanılabilir Limit</span>
            <span className="limit-text">2.250,00 TL</span>
            </div>
        </div>

        <hr className="separator"/>


        <div className="detailed-info-collapse">
            <span className="collapse-text">Detaylı Bilgi</span>
            {collapsablePanel ? <KeyboardArrowUp className='collapse-icon' onClick={handleCollapse}/> 
            : <KeyboardArrowDown className='collapse-icon' onClick={handleCollapse}/>}
        </div>
        {collapsablePanel && 
        <div className="detailed-info-panel">
            <div className="detailed-info">
                <span className="info-header">Kart Limiti:</span>
                <span className="info-text">50.000,00 TL</span>
            </div>
            <hr className='info-seperator'/>
            <div className="detailed-info">
                <span className="info-header">Bonus:</span>
                <span className="info-text">1.000,00 TL</span>
            </div>
            <hr className='info-seperator'/>
            <div className="detailed-info">
                <span className="info-header">Nakit Avans Limit:</span>
                <span className="info-text">10.000,00 TL</span>
            </div>
            <hr className='info-seperator'/>
            <div className="detailed-info">
                <span className="info-header">Kullanılabilir Nakit Avans Limiti:</span>
                <span className="info-text">10.000,00 TL</span>
            </div>
            <hr className='info-seperator'/>
            <div className="detailed-info">
                <span className="info-header">Kart Sahibi:</span>
                <span className="info-text">Şebnem Tan</span>
            </div>
        </div>}

        <RegisterBottom isLogin={false}/>
        </div>
    )
}

export default Card
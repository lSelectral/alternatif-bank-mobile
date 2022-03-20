import './PayBillPopup.scss';
import {FlashOnOutlined} from '@material-ui/icons';
import {billData} from '../../data'
const PayBillPopup = ({closePopup}) => {

    const handleClose = (e) => {
        e.preventDefault();
        closePopup(false);
    }

    return (
        <div className="popup-blocker">
            <div className='bill-popup'>
                <span className="header">FATURALAR</span>

                <div className="bills-container">

                    {
                        billData.map((bill) => (
                            <div key={bill.id} className="bill-container">
                                <div className="bill-top-container">
                                    <div className="bill-icon-container">
                                        {bill.icon}
                                    </div>
                                    <div className="top-text-container">
                                        <span className="bill-name bill-text">{bill.title}</span>
                                        <span  className="bill-text">Ad Soyad: {bill.name}</span>
                                        <span className="bill-text">Fatura Tutarı: {bill.amount}</span>
                                        <span className="bill-text">Son Ödeme Tarihi: {bill.dueData}</span>
                                    </div>
                                </div>
                                <div className="bill-bottom-container">
                                    <button className="show-bill bill-button ripple">FATURAYI GÖRÜNTÜLE</button>
                                    <button className="pay-bill bill-button ripple">FATURAYI ÖDE</button>
                                </div>
                            </div>
                        ))
                    }



                </div>

                <button onClick={handleClose} className='close-button button'>
                    ÇIKIŞ YAP
                </button>
            </div>
        </div>
    )
}

export default PayBillPopup
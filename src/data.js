import {Assignment, 
FormatListNumberedTwoTone, 
PermIdentity, 
PhoneEnabledOutlined, 
ImportExport,
PhoneInTalkOutlined,
Menu,
CreditCardOutlined,
HomeOutlined,
RouterOutlined,
OpacityOutlined,
FlashOnOutlined,
AccountCircleOutlined} 
from '@material-ui/icons';
import Logo from './resource/logo_white.png';
import {Link} from 'react-router-dom';

export const balanceData = [
    {
        "id": 1,
        "title": "FONLAR",
        "subtitle": "Fonlar (TRY) Bakiye",
        "value": "9,92 TL"
    },
    {   "id": 2,
        "title": "VADESİZ HESAPLAR",
        "subtitle": "Vadesiz Hesaplar (TRY) Bakiye",
        "value": "1.341,78 TL"
    },
    {
        "id": 3,
        "title": "VADELİ HESAPLAR",
        "subtitle": "Vadeli Hesaplar (TRY) Bakiye",
        "value": "2.145,24 TL"
    },
    {
        "id": 4,
        "title": "VADELİ HESAPLAR",
        "subtitle": "Vadeli Hesaplar (TRY) Bakiye",
        "value": "2.145,24 TL"
    }
]
export const loginBottomMenu = [
    {"icon": <FormatListNumberedTwoTone className='bottom-icon'/>, "text": "İŞLEMLER"},
    {"icon": <Assignment className='bottom-icon'/>, "text": "BAŞVURULAR"},
    {"icon": <PhoneEnabledOutlined className='bottom-icon'/>, "text": "DESTEK HATTI"},
];
export const homeBottomMenu = [
    {"icon": <Link to="/"><HomeOutlined className='bottom-icon'/></Link>, "text": "Anasayfa"},
    {"icon": <Link to="/account"><ImportExport className='bottom-icon'/></Link>, "text": "Para Transferi"},
    {"icon": <Link to="/card"><CreditCardOutlined className='bottom-icon'/></Link>, "text": "Ödemeler"},
    {"icon": <Link to="/profile"><PermIdentity className='bottom-icon'/></Link>, "text": "Profil"},
];

export const topBarLoginMenu = {
    "left": <AccountCircleOutlined className='topbar-icon'/>,
    "center": <img src={Logo} alt="Logo" className="logo"/>,
    "right": <span className="top-right-text">EN</span>};

export const topBarHomeMenu = {
    "left": <AccountCircleOutlined className='topbar-icon'/>,
    "center": <img src={Logo} alt="Logo" className="logo"/>,
    "right": <Menu className='topbar-icon'/>};

export const billData = [
    {
        "id": 1,
        "icon": <FlashOnOutlined className='bill-icon'/>,
        "title": "Elektrik Faturası (CK Boğaziçi)",
        "name": "Recep Çiftçi",
        "amount": "1,450.00 TL",
        "dueData": "27.03.2022",
        "address": "İzmir Bulvarı Yedi Eylül Mahallesi 1024. Sokak Efeler/Aydın"
    },
    {
        "id": 2,
        "icon": <OpacityOutlined className='bill-icon'/>,
        "title": "Su Faturası (İSKİ)",
        "name": "Recep Çiftçi",
        "amount": "250.00 TL",
        "dueData": "05.04.2022",
        "address": "İzmir Bulvarı Yedi Eylül Mahallesi 1024. Sokak Efeler/Aydın"
    },
    {
        "id": 3,
        "icon": <RouterOutlined className='bill-icon'/>,
        "title": "İnternet Faturası (Turkcell)",
        "name": "Recep Çiftçi",
        "amount": "170.00 TL",
        "dueData": "14.04.2022",
        "address": "İzmir Bulvarı Yedi Eylül Mahallesi 1024. Sokak Efeler/Aydın"
    },
];
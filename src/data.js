import { AccountBalanceWallet, Assignment, 
CreditCard, 
FormatListNumberedTwoTone, 
History, 
PhoneEnabledOutlined, 
Send,
PhoneInTalkOutlined,
Menu} 
from '@material-ui/icons';
import Logo from './resource/logo.png';

export const balanceData = [
    {
        "title": "FONLAR",
        "subtitle": "Fonlar (TRY) Bakiye",
        "value": "9,92 TL"
    },
    {
        "title": "VADESİZ HESAPLAR",
        "subtitle": "Vadesiz Hesaplar (TRY) Bakiye",
        "value": "1.341,78 TL"
    },
    {
        "title": "VADELİ HESAPLAR",
        "subtitle": "Vadeli Hesaplar (TRY) Bakiye",
        "value": "2.145,24 TL"
    }
]

export const loginMenu = [
    {"icon": <FormatListNumberedTwoTone className='bottom-icon'/>, "text": "İŞLEMLER"},
    {"icon": <Assignment className='bottom-icon'/>, "text": "BAŞVURULAR"},
    {"icon": <PhoneEnabledOutlined className='bottom-icon'/>, "text": "DESTEK HATTI"},
];
export const homeMenu = [
    {"icon": <History className='bottom-icon'/>, "text": "SON İŞLEMLER"},
    {"icon": <AccountBalanceWallet className='bottom-icon'/>, "text": "HESAPLARIM"},
    {"icon": <Send className='bottom-icon'/>, "text": "PARA TRANSFERLERİ"},
    {"icon": <CreditCard className='bottom-icon'/>, "text": "KREDİ KARTLARIM"},
];

export const topBarLoginMenu = {
    "left": <div/>,
    "center": <img src={Logo} alt="Logo" className="logo"/>,
    "right": <span className="top-right-text">EN</span>};

export const topBarHomeMenu = {
    "left": <PhoneInTalkOutlined/>,
    "center": <img src={Logo} alt="Logo" className="logo"/>,
    "right": <Menu/>};
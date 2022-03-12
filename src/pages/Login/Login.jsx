import './Login.scss'
import Lansman from '../../resource/lansman2.jpg'
import RegisterBottom from '../../components/RegisterBottom/RegisterBottom'
import { AccountCircleOutlined, 
FormatListNumberedTwoTone, GroupAddOutlined,  } 
from '@material-ui/icons'
import TopBar from '../../components/TopBar/TopBar.jsx'

const Login = () => {
  return (
    <div className='login'>
        <TopBar isLogin={true}/>
        <div className="center">
            <img src={Lansman} alt="Lansman" className="centerImage" />
            <div className="loginOptions">
                <div className="loginOption">
                    <AccountCircleOutlined className='loginOptionIcon'/>
                    <span className="loginOptionText">
                        KULLANICI ADI İLE GİRİŞ
                    </span>
                </div>

                <hr className='vertical-line'/>

                <div className="loginOption">
                    <FormatListNumberedTwoTone className='loginOptionIcon'/>
                    <span className="loginOptionText">
                        TCKN İLE GİRİŞ
                    </span>
                </div>
            </div>
            <div className="register">
                <div className="empty"></div>
                <span className="register-text">
                    YENİ MÜŞTERİ OL
                </span>
                <GroupAddOutlined className='register-icon'/>
            </div>
        </div>
        <RegisterBottom isLogin={true}/>
    </div>
  )
}

export default Login
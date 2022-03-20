import './RegisterBottom.scss';
import {homeBottomMenu, loginBottomMenu} from '../../data';

const RegisterBottom = ({isLogin}) => {
    let data = isLogin ? loginBottomMenu : homeBottomMenu;
    return (
        <div className="bottom">
            {data.map(item => (
                <div key={item.text} className="bottom-option">
                    {item.icon}
                    <span className='bottomOptionText'>
                        {item.text}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default RegisterBottom
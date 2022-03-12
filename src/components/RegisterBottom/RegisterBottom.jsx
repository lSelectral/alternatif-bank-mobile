import './RegisterBottom.scss';
import {homeMenu, loginMenu} from '../../data';

const RegisterBottom = ({isLogin}) => {
    let data = isLogin ? loginMenu : homeMenu;
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
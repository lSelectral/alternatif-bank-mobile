import './TopBar.scss';
import { topBarHomeMenu, topBarLoginMenu} from '../../data'

const TopBar = ({isLogin}) => {

    const data = isLogin ? topBarLoginMenu : topBarHomeMenu;

    return (
        <div className="top">
            <div className="top-left">
                {data.left}
            </div>
            <div className="logo-container">
                {data.center}
            </div>
            <div className="top-right">
                <span className="top-right-text">
                    {data.right}
                </span>
            </div>
        </div>
    )
}

export default TopBar
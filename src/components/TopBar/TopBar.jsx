import './TopBar.scss';
import { topBarHomeMenu, topBarLoginMenu} from '../../data'
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
const TopBar = ({isLogin}) => {
    const [sidebarState, setSidebarState] = useState(false);
    const data = isLogin ? topBarLoginMenu : topBarHomeMenu;
    
    return (
        <div className="top">
            <Sidebar open={sidebarState} setOpen={setSidebarState}/>
            <div className="top-left">
                {data.left}
            </div>
            <div className="logo-container">
                {data.center}
            </div>
            <div className="top-right" onClick={() => {setSidebarState(true); console.log("recep");}}>
                <span className="top-right-text">
                    {data.right}
                </span>
            </div>
        </div>
    )
}

export default TopBar
import { Avatar, Drawer, Divider } from '@material-ui/core';
import { AccountCircleOutlined,ExitToAppOutlined, Settings } from '@material-ui/icons';
import { useState } from 'react';
import './Sidebar.scss';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({open, setOpen}) => {
  const navigate = useNavigate();

  return (
    <Drawer className='drawer-component' anchor='left' open={open} onClick={() => setOpen(false)}>
        <div className="sidebar" >
          <div className="user-container">
            <Avatar className="user-avatar" src="https://im.haberturk.com/2017/09/20/ver1505895762/1638816_620x410.jpg"/>
            <span className="user-text">
              Kaan Gür
            </span>
          </div>
          <Divider/>
          <div className="list-container">
            <AccountCircleOutlined className='list-icon'/>
            <span className="list-text">Profil</span>
          </div>
          <div className="list-container">
            <Settings className='list-icon'/>
            <span className="list-text">Ayarlar</span>
          </div>
          <div className="list-container" onClick={() => navigate("/login")}>
            <ExitToAppOutlined className='list-icon'/>
            <span className="list-text">Çıkış Yap</span>
          </div>
        </div>
    </Drawer>
  )
}

export default Sidebar
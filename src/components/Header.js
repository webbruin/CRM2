import React from 'react';
import ReactDom from 'react-dom';
import '../vendor/home';

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className="header_logo">
          <a href="javascript:;"><img src="src/images/logo.png" alt=""/></a>
          <span>CRM管理系统</span>
        </div>
        <ul className="header_usn">
          <li className="header_avatar1"><img src="src/images/avatar1.png" alt=""/></li>
          <li><span className="username">Admin</span></li>
          <li className="header_down"><img src="src/images/down2.png" alt=""/></li>
        </ul>

      </header>
    )
  }
}

export default Header;
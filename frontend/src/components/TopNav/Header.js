import React from 'react';
import header from '../../Styles/header.module.css';
import { AiOutlineBell,  AiOutlineSearch,AiOutlineCheckCircle, AiOutlineUser } from 'react-icons/ai';



const Header = () => {
  return (
    <header className={`${header.header}`}>
      
      {/* <div className={`${header.header__left}`}> */}
        <a href="/" className={`${header.header__logo}`}>OptimAI</a>
        <div className={`${header.header__search}`}>
          <input type="text" placeholder="Search" />
          <button type="button">Search</button>
        
      </div>
      <div className={`${header.header__right}`}>
        {/* <ul className={`${header.header__nav}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul> */}
        <ul className={`${header.header__usermenu}`}>
          <li><a href="#"><AiOutlineCheckCircle /></a></li>
          <li><a><AiOutlineBell /></a></li>
          <li><a href="#"><AiOutlineUser /></a></li>
          <li><a href="#">Logout</a></li>
        </ul>
        {/* <ul className={`${header.header__quickaccess}`}>
          <li><a href="#"><i className={`${header.header__icon} fa fa-bell`}></i> Notifications</a></li>
          <li><a href="#"><i className={`${header.header__icon} fa fa-envelope`}></i> Messages</a></li>
        </ul> */}
      </div>
    </header>
  );
}

export default Header;

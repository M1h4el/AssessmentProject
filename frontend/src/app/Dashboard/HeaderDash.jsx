'use client';
import React, { useState } from "react";
import '@/styles/HeaderDash.scss'

// react-icons
import { MdNotificationsActive } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";



function HeaderDash() {

  const [notification, setnotification] = useState("false")

  return (
    <header>
      <div className="logoContainer">Logo</div>
      <div className="menuBar">
        <div><FaUsers /></div>
        <div>{notification ? <AiFillMessage /> : <AiOutlineMessage />}</div>
        <div><MdNotificationsActive /></div>
        <div><FaRegUserCircle /></div>
      </div>
    </header>
  );
}

export default HeaderDash;

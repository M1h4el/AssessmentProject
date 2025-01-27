"use client";
import React, { useState } from "react";
import "@/styles/HeaderDash.scss";

// react-icons
import { MdNotificationsActive } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";


function HeaderDash({ onSelect }) {
  const [activeTab, setActiveTab] = useState(null); // Controla el ícono activo

  const handleIconClick = (tab) => {
    setActiveTab(tab); // Actualiza el ícono activo
    onSelect(tab); // Llama a la función que renderiza contenido en displaySide
  };

  return (
    <header>
      <div className="logoContainer">Logo</div>
      <div className="menuBar">
        <div
          className={activeTab === "messages" ? "active" : ""}
          onClick={() => handleIconClick("messages")}
        >
          <GoProjectSymlink />
        </div>
        <div
          className={activeTab === "users" ? "active" : ""}
          onClick={() => handleIconClick("users")}
        >
          <FaUsers />
        </div>
        <div
          className={activeTab === "notifications" ? "active" : ""}
          onClick={() => handleIconClick("notifications")}
        >
          <MdNotificationsActive />
        </div>
        <div
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => handleIconClick("profile")}
        >
          <FaRegUserCircle />
        </div>
      </div>
    </header>
  );
}

export default HeaderDash;

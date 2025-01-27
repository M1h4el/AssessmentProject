"use client";
import React, { useState } from "react";
import "@/styles/HeaderDash.scss";

// Components
import ProfileContent from './ProfileContent';
import NotificationContent from './NotificationsContent';
import SocialContent from './SocialContent';
import ProjectsContent from './ProjectContent';

// React-icons
import { MdNotificationsActive } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

function HeaderDash({ onSelect }) {
  const [activeTab, setActiveTab] = useState("projects");

  // Manejo de la selección de íconos
  const handleIconClick = (tab) => {
    setActiveTab(tab);
    onSelect(tab); // Llama al callback con el tab seleccionado
  };

  return (
    <header>
      <div className="logoContainer">Logo</div>
      <div className="menuBar">
        <div
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => handleIconClick("projects")}
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

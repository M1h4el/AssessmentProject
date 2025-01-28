"use client";

import { useState } from "react";
import "@/styles/bodyDashboard.scss";
import ProjectsContent from './ProjectContent';
import ProfileContent from './ProfileContent';
import NotificationContent from './NotificationsContent';
import SocialContent from './SocialContent';
import SideMenuContent from "./SideMenuContent";

const BodyDashboard = ({ handleCard, selectedTab }) => {
  const [menuWidth, setMenuWidth] = useState(15);

  const handleTab = (selectedTab) => {
    if (selectedTab === "projects") {
      return <ProjectsContent handleCard={handleCard} />;
    } else if (selectedTab === "social") {
      return <SocialContent />;
    } else if (selectedTab === "notifications") {
      return <NotificationContent />;
    } else if (selectedTab === "profile") {
      return <ProfileContent />;;
    }
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX; 
    const startWidth = menuWidth;

    const onMouseMove = (e) => {
      const diff = e.clientX - startX; 
      let newWidth = startWidth + (diff / window.innerWidth) * 100;
      if (newWidth < 15) newWidth = 15;
      if (newWidth > 22) newWidth = 22;
      
      setMenuWidth(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

 

  return (
    <div className="bodyDashboard">
      <div className="menuSide" style={{ width: `${menuWidth}%` }}>
        {handleCard ? <SideMenuContent tab={selectedTab}/> : <div>Logo</div>}
      </div>
      <div className="resizer" onMouseDown={handleMouseDown}></div>
      <div className="displaySide" style={{ width: `${100 - menuWidth}%` }}>
        {handleTab(selectedTab)}
      </div>
    </div>
  );
};

export default BodyDashboard;

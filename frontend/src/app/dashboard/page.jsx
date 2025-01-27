"use client";
import React, { useState } from "react";
import HeaderDash from "./HeaderDash";

// Components
import ProfileContent from './ProfileContent';
import NotificationContent from './NotificationsContent';
import SocialContent from './SocialContent';
import ProjectsContent from './ProjectContent';
import BodyDashboard from "@/components/BodyDashboard";

const Page = () => {
  const [displayContent, setDisplayContent] = useState(<ProjectsContent />);

  const handleSelection = (tab) => {
    switch (tab) {
      case "projects":
        setDisplayContent(<ProjectsContent />);
        break;
      case "users":
        setDisplayContent(<SocialContent />);
        break;
      case "notifications":
        setDisplayContent(<NotificationContent />);
        break;
      case "profile":
        setDisplayContent(<ProfileContent />);
        break;
      default:
        setDisplayContent(<ProjectsContent />);
        break;
    }
  };

  return (
    <>
      <HeaderDash onSelect={handleSelection} />
      <BodyDashboard displaySideChildren={displayContent}/>
    </>
  );
};

export default Page;


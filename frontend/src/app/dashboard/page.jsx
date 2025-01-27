"use client";

import { useState } from "react";
import HeaderDash from "./HeaderDash";
import BodyDashboard from "@/components/BodyDashboard";

const Page = () => {
  const [displayContent, setDisplayContent] = useState("Seleccione una opción");

  const handleIconSelect = (tab) => {
    switch (tab) {
      case "users":
        setDisplayContent("Gestión de usuarios");
        break;
      case "messages":
        setDisplayContent("Proyectos");
        break;
      case "notifications":
        setDisplayContent("Notificaciones");
        break;
      case "profile":
        setDisplayContent("Perfil de usuario");
        break;
      default:
        setDisplayContent("Seleccione una opción");
    }
  };

  return (
    <>
      <HeaderDash onSelect={handleIconSelect} />
      <BodyDashboard
        menuSideChildren={<div>Contenido del Menú Lateral</div>}
        displaySideChildren={<div>{displayContent}</div>}
      />
    </>
  );
};

export default Page;


"use client";

import { useState } from "react";
import "@/styles/bodyDashboard.scss";

const BodyDashboard = ({ menuSideChildren, displaySideChildren }) => {
  const [menuWidth, setMenuWidth] = useState(15); // Porcentaje inicial de menuSide

  const handleMouseDown = (e) => {
    e.preventDefault(); // Evitar comportamientos predeterminados
    const startX = e.clientX; // Posición inicial del mouse
    const startWidth = menuWidth; // Ancho inicial del menú en porcentaje

    const onMouseMove = (e) => {
      const diff = e.clientX - startX; 
      let newWidth = startWidth + (diff / window.innerWidth) * 100;
      // regula el tamaño del menu lateral
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
        {menuSideChildren}
      </div>
      <div className="resizer" onMouseDown={handleMouseDown}></div>
      <div className="displaySide" style={{ width: `${100 - menuWidth}%` }}>
        {displaySideChildren}
      </div>
    </div>
  );
};

export default BodyDashboard;

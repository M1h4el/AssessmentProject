"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";

function SideMenuContent({ tab }) {
  const router = useRouter();
  const [labels, setLabels] = useState([]);

  const handleTab = (tab) => {
    if (tab === "projects") {
      return ["Editar", "Actividad reciente", "Colaboradores", "Nueva tarea", "Configuración"];
    } else if (tab === "social") {
      return ["Amigos", "Grupos", "Publicaciones", "Configuración"];
    } else if (tab === "notifications") {
      return ["Notificaciones", "Configuración"];
    } else if (tab === "profile") {
      return ["Editar Información", "Configuración", "Cerrar sesión"];
    }
  };

  useEffect(() => {
    setLabels(handleTab(tab));
  }, [tab]);

  const handleClick = (label) => {
    switch (label) {
      case "Editar":
        console.log("Redirigiendo a edición...");
        router.push("/edit"); // Cambia la ruta según tu configuración
        break;
      case "Actividad reciente":
        console.log("Mostrando actividad reciente...");
        break;
      case "Colaboradores":
        console.log("Abriendo lista de colaboradores...");
        break;
      case "Nueva tarea":
        console.log("Creando nueva tarea...");
        break;
      case "Configuración":
        console.log("Redirigiendo a configuración...");
        router.push("/settings");
        break;
      case "Amigos":
        console.log("Mostrando amigos...");
        break;
      case "Cerrar sesión":
        console.log("Cerrando sesión...");
        localStorage.removeItem("jwt");
        router.replace("/");
        break;
      default:
        console.log(`Acción no definida para: ${label}`);
    }
  };

  return (
    <div className="slideMenu">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {labels.map((label, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleClick(label)}>
                  <ListItemIcon>{/* Puedes agregar íconos aquí */}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
}

export default SideMenuContent;
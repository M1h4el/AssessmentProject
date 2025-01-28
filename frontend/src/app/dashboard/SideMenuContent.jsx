import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";

function SideMenuContent({ tab }) {
  const [labels, setLabels] = useState([]);

  const handleTab = (tab) => {
    if (tab === "projects") {
      return ["Editar", "Actividad reciente", "Colaboradores", "Nueva tarea", "Configuración"];
    } else if (tab === "social") {
      return ["Amigos", "Grupos", "Publicaciones", "Configuración"];
    } else if (tab === "notifications") {
      return ["Notificaciones", "Configuración"];
    } else if (tab === "profile") {
      return ["Editar", "Configuración"];
    }
  };

  useEffect(() => {
    setLabels(handleTab(tab));
  }, [tab]);

  return (
    <>
    <div className="slideMenu">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          {labels.map((label, index) => (
            <List key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </nav>
      </Box>
    </div>
    </>
  );
}

export default SideMenuContent;
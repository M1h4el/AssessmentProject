import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, alt }) => {
  return (
    <Card sx={{ maxWidth: 250, height: 350, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent sx={{ minHeight: 100 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard
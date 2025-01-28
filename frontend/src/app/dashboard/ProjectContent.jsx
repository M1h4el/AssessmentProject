import React from "react";
import "@/styles/ProjectContent.scss";
import { Grid2 } from "@mui/material";

//react-icons
import { TbNewSection } from "react-icons/tb";
import { MdEditNote } from "react-icons/md";
import ProjectCard from "@/components/ProjectCard";

const cardData = [
  {
    title: "New Project",
    description: "Here you can start your new project",
    image: "/static/images/cards/contemplative-reptile.jpg",
    alt: "NewProject",
  },
  {
    title: "ProjectCreated",
    description: "Geckos are small, mostly carnivorous lizards.",
    image: "/static/images/cards/contemplative-reptile.jpg",
    alt: "gecko",
  },
  {
    title: "ProjectCreated",
    description: "Chameleons are distinguished by their zygodactylous feet and long, sticky tongues.",
    image: "/static/images/cards/contemplative-reptile.jpg",
    alt: "chameleon",
  },
  {
    title: "ProjectCreated",
    description: "Iguanas are herbivorous lizards native to tropical areas of Central and South America.",
    image: "/static/images/cards/contemplative-reptile.jpg",
    alt: "iguana",
  },
];

function ProjectContent({ children }) {
  return (
    <>
      <section>
        <div className="TitleProjectSection">
          <h1>Proyectos</h1>
          <h4>Crea y planifica tus proyectos</h4>
          <hr />
        </div>
      </section>
      <section>
        <div className="MenuProjectSection">
          {/* <TbNewSection /> */}
          <Grid2 container spacing={2} justifyContent="flex-start" alignItems="center" sx={{ padding: 2 }}>
      {cardData.map((card, index) => (
        <Grid2 xs={12} sm={6} md={6} key={index}>
          <ProjectCard
            title={card.title}
            description={card.description}
            image={card.image}
            alt={card.alt}
          />
        </Grid2>
      ))}
    </Grid2>
        </div>
        {children}
      </section>
    </>
  );
}

export default ProjectContent;

import React from "react";
import "@/styles/ProjectContent.scss";

//react-icons

import ProjectCard from "@/components/ProjectCard";

function ProjectContent({ handleCard }) {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "Description 1",
      image: "image1.jpg",
      alt: "image 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description 2",
      image: "image2.jpg",
      alt: "image 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description 3",
      image: "image3.jpg",
      alt: "image 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description 4",
      image: "image4.jpg",
      alt: "image 4",
    },
  ];

  const handleCreateProject = () => {
    console.log("Create project");
  };

  const staticFirstCard = cardData[0]; // La primera tarjeta será estática
  const rotatedData = [...cardData.slice(1), cardData[0]]; // Rotar el resto de los datos

  function handleCardClick(card) {
    console.log(card, "clicked");
    handleCard(card);
  }
  return (
    <>
      <section>
        <div className="TitleSection">
          <h1>Proyectos</h1>
          <h4>Crea y planifica tus proyectos</h4>
          <hr />
        </div>
      </section>
      <section>
        <div className="MenuProjectSection">
          {/* <TbNewSection /> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "16px",
            }}
          >
            {/* Primera tarjeta con formato especial */}
            <div
              style={{
                flex: "1 1 calc(33.33% - 16px)",
                maxWidth: "calc(33.33% - 16px)",
                minWidth: "250px",
                boxSizing: "border-box",
              }}
              onClick={() => handleCreateProject()}
            >
              <ProjectCard
                title="Nuevo proyecto"
                description="Comienza un nuevo proyecto"
                image={staticFirstCard.image}
                alt={staticFirstCard.alt}
                isFeatured
              />
            </div>

            {/* Renderizar el resto de las tarjetas */}
            {rotatedData.map((card, index) => (
              <div
                key={card.id}
                style={{
                  flex: "1 1 calc(33.33% - 16px)",
                  maxWidth: "calc(33.33% - 16px)",
                  minWidth: "250px",
                  boxSizing: "border-box",
                }}
                onClick={() => handleCardClick(card)}
              >
                <ProjectCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  alt={card.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectContent;

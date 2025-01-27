import React from "react";
import "@/styles/ProjectContent.scss";

//react-icons
import { TbNewSection } from "react-icons/tb";
import { MdEditNote } from "react-icons/md";


function ProjectContent({children}) {
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
        <div className="menuProjectSection">
          
          <TbNewSection />
          
          <MdEditNote />
        </div>
        {children}
      </section>
    </>
  );
}

export default ProjectContent;

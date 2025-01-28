"use client";
import React, { useState } from "react";
import HeaderDash from "./HeaderDash";

// Components
import BodyDashboard from "./BodyDashboard";

const Page = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedTab, setselectedTab] = useState("projects");

  const handleCard = (card) => {
    setSelectedCard(card.id);
    console.log("Datos de la Card ", card);
  }

  const handleSelection = (tab) => {
    setselectedTab(tab);
  };

  return (
    <>
      <HeaderDash onSelect={handleSelection} />
      <BodyDashboard handleCard={handleCard} selectedTab={selectedTab}/>
    </>
  );
};

export default Page;


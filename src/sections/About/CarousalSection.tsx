import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import carousal1 from "@/assets/Carousal1.svg";
import carousal2 from "@/assets/Carousal2.svg";
import carousal3 from "@/assets/Carousal3.svg";
import styled from "styled-components";
import { t } from "i18next";
import HeaderComponent from "@/components/base/Header";

const CarousalSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <img
      src={carousal1}
      onDragStart={handleDragStart}
      role="presentation"
      alt="carousal1"
      style={{ maxWidth: '100%'}}
    />,
    <img
      src={carousal2}
      onDragStart={handleDragStart}
      role="presentation"
      alt="carousal2"
      style={{ maxWidth: '100%'}}
    />,
    <img
      src={carousal3}
      onDragStart={handleDragStart}
      role="presentation"
      alt="carousal3"
      style={{ maxWidth: '100%'}}
    />,
  ];

  let Carousel: any;

  const onSlideChanged = (e: any) => {
    setActiveIndex(e.item)
  }

  const renderThumbs = () => (
    <div style={{ textAlign: "center" }}>
      <StyledUl>
        {[1, 2, 3].map((item, i) => (
          <StyledLI
            key={i}
            className={activeIndex === i ? "active" : ""}
            onClick={() => {
              setActiveIndex(i);
              Carousel._onDotClick(i);
            }}
          ></StyledLI>
        ))}
      </StyledUl>
    </div>
  );

  return (
    <div style={{ textAlign: "center", marginTop: '20px' }}>
      <HeaderComponent variant={"h3"} text={t("pages.about.carousal.title")} />
      {renderThumbs()}
      <AliceCarousel
        activeIndex={activeIndex}
        mouseTracking
        // autoWidth
        disableButtonsControls={true}
        items={items}
        ref={(el: any) => (Carousel = el)}
        onSlideChanged={onSlideChanged}
        disableDotsControls={true}
        responsive={{
          0:{
            items: 1
          }
        }}
      />
    </div>
  );
};

export default CarousalSection;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
`;

const StyledLI = styled.li`
  text-align: center;
  margin-left: 5px;
  width: 30px;
  height: 3px;
  list-style-type: none;
  cursor: pointer;
  border-radius: 2px;
  background-color: #e6e6e6;
  &.active {
    background-color: #ec0000;
  }
`;

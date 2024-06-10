import React from "react";
import ImageComponent from "@/components/base/Image";
import aboutfullImg from "../../assets/aboutfullImg.svg";

const ImageSection = () => {
  return (
    <ImageComponent backgroundUrl={aboutfullImg} style={{ height: "552px" }} />
  );
};

export default ImageSection;

import React from "react";
import styled from "styled-components";
import { IImageProps } from "./interfaces";

const ImageComponent = (props: IImageProps) => {
  return (
    <ImageDiv
      style={{
        backgroundImage: `url(${props.backgroundUrl})`,
        ...props.style,
      }}
    >
    </ImageDiv>
  );
};

export default ImageComponent;

const ImageDiv = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

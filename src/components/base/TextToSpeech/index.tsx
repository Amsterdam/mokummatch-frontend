import React from "react";
import { ISpeechToText } from "./interfaces";
import IconButton from "@mui/material/IconButton";
import SpeakerIcon from "@/assets/SpeakerIcon.svg";
import { useTheme } from "@mui/material/styles";
import useViewport from "@/helpers/useViewport";

const TextToSpeech = ({ text, lang, forcedLargeSize }: ISpeechToText) => {
  const { width } = useViewport();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.values.sm;

  const buttonSizeLarge = 40;
  const buttonIconLarge = 24;
  const buttonSize = forcedLargeSize ? buttonSizeLarge : (width >= breakpoint ? buttonSizeLarge : 24);
  const iconSize = forcedLargeSize ? buttonIconLarge : (width >= breakpoint ? buttonIconLarge : 14);

  const handleClick = () => {
    if ("speechSynthesis" in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = lang;
      window.speechSynthesis.speak(msg);
    } else {
      // Speech Synthesis Not Supported 😣
      alert("Sorry, your browser doesn't support text to speech!");
    }
  };

  return (
    <>
      <IconButton
        sx={{
          border: "2px solid #EC0000",
          borderRadius: "4px",
          width: buttonSize,
          height: buttonSize,
          backgroundColor: "#ffffff",
          color: "#EC0000",
          "&:active": {
            borderRadius: "4px",
            border: "3px solid #B80000",
          },
          "&:hover": {
            backgroundColor: "#ffffff",
          },
          gap: "10px",
        }}
        onClick={handleClick}
      >
        <img
          src={SpeakerIcon}
          style={{ width: iconSize, height: iconSize }}
          alt="speaker"
        />
      </IconButton>
    </>
  );
};

export default TextToSpeech;

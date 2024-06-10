import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { getQuestionnaire } from "@/redux/Questionnaire/questionnaire";
import { IQuestion } from "./interfaces";
import TextToSpeech from "@/components/base/TextToSpeech";

const Speaker = ({ id }: IQuestion) => {

  const questionnaire = useAppSelector(getQuestionnaire);

  return (
    <TextToSpeech
      text={questionnaire[parseInt(id) - 1].question}
      lang={'nl-NL'}
      forcedLargeSize={true}
    />
  );
};

export default Speaker;

import { IAnswerModel } from "@/redux/Questionnaire/interfaces";

export interface IQuestion {
  id?: any;
  [x: string]: boolean;
}
export interface IOptionsProps {
  id: any;
  handleClick: (value: IAnswerModel) => void;
}
// questions data
export enum EAnswer {
  'agree',
  'disagree',
  'neutral',
  'skipped',
}

export interface IAnswerModel {
  id: number;
  answer: EAnswer;
}

export interface IQuestionnaire {
  id: number;
  question: string;
  answer?: IAnswerModel;
}

export interface IInitialState {
  questionnaire: IQuestionnaire[];
  isQuestion?: boolean;
  currentQuestionId?: number;
}

export interface IAnswer {
  questionId: number;
  answer: IAnswerModel;
}

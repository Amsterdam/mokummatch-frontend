import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { questions } from '../../data/questions';
import { IAnswer, IInitialState } from './interfaces';

export const initialState: IInitialState = {
  questionnaire: questions,
  isQuestion: false,
  currentQuestionId: 1
};

export const questionnaireSlice = createSlice({
  name: 'questionnare',
  initialState,
  reducers: {
    storeAnswer: (state, action: PayloadAction<IAnswer>) => {
      const questionIndex = state.questionnaire.findIndex(question => question.id === action.payload.questionId);
      state.questionnaire[questionIndex].answer = action.payload.answer
    },
    setIsQuestion: (state, action: PayloadAction<boolean>) => {
      state.isQuestion = action.payload;
    },
    setQuestionNumber: (state, action: PayloadAction<any>) => {
      state.currentQuestionId = action.payload
    }
  }
})

export const { storeAnswer, setIsQuestion, setQuestionNumber } = questionnaireSlice.actions;

export const getQuestionnaire = (state: RootState) => state.questionnaire.questionnaire;

export const isQuestion = (state: RootState) => state.questionnaire.isQuestion;

export const currentQuestionNumber = (state: RootState) => state.questionnaire.currentQuestionId;

export const totalQuestions = (state: RootState) => state.questionnaire.questionnaire.length;


export default questionnaireSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import instancesReducer from './Instances/instances';
import  questionnaireReducer  from './Questionnaire/questionnaire';
import  navBarReducer  from './Navbar/navbar';

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
    instances: instancesReducer,
    navbar: navBarReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
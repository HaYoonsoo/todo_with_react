import { combineReducers, CombinedState, } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import todo from './todo';

const reducer = (state: any , action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return combineReducers( {
        todo,
      })(state, action);
  }
}

export default reducer;
export type RootState = ReturnType<typeof reducer>;
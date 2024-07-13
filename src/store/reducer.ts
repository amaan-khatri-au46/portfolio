import { combineReducers } from '@reduxjs/toolkit';
import folioDetailReducer from './slices/folioSlice'

export const rootReducer = combineReducers({
  folioDetail: folioDetailReducer,
});
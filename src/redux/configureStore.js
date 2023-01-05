import { configureStore, combineReducers } from '@reduxjs/toolkit';
import financialStatements from './financial-statements/financialStatementSlice';

const rootReducer = combineReducers({ financialStatements });

const store = configureStore({ reducer: rootReducer });

export default store;
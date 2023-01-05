import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://financialmodelingprep.com/api/v3';

const INCOME_STATEMENT_FETCHED = 'companies-financial-statements/financial-statements/INCOME_STATEMENT_FETCHED';
const FINANCIAL_STATEMENT_FETCHED = 'companies-financial-statements/financial-statements/FINANCIAL_STATEMENT_FETCHED';

function filterStrings(arr) {
  return arr.filter((str) => str.match(/^[A-Za-z]+$/)).slice(0, 100);
}

export const fetchFinancialStatements = createAsyncThunk(FINANCIAL_STATEMENT_FETCHED, async () => {
  const res = await axios.get(`${BASE_URL}/financial-statement-symbol-lists?apikey=6fa27f3bc0cb29bdcb06d98d2091d91a`);
  return filterStrings(res.data);
});

function getFinancialData(arr) {
  return arr.map(({ calendarYear, operatingExpenses, operatingIncome }) => ({
    calendarYear,
    operatingExpenses,
    operatingIncome,
  }));
}

export const fetchIncomeStatements = createAsyncThunk(INCOME_STATEMENT_FETCHED, async (symbol) => {
  const res = await axios.get(`${BASE_URL}/income-statement/${symbol}?limit=120&apikey=6fa27f3bc0cb29bdcb06d98d2091d91a`);
  return getFinancialData(res.data);
});

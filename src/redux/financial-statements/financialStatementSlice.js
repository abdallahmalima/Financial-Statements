import { createSlice } from '@reduxjs/toolkit';
import { fetchFinancialStatements, fetchIncomeStatements } from './financialStatementThunk';

export const initialState = {
  financialStatements: [],
  incomeStatements: [],
  incomeStatementsCache: [],
  loading: true,
  error: null,
};

const financialStatementsSlice = createSlice({
  name: 'financialStatements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFinancialStatements.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchFinancialStatements.fulfilled, (state, action) => {
      state.error = null;
      state.financialStatements = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchFinancialStatements.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(fetchIncomeStatements.pending, (state) => {
      state.error = null;
      state.loading = true;
    });

    builder.addCase(fetchIncomeStatements.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(fetchIncomeStatements.fulfilled, (state, action) => {
      const { symbol, incomeStatements } = action.payload;
      state.error = null;
      state.incomeStatements = incomeStatements;
      state.incomeStatementsCache.push(action.payload);
      state.loading = false;
    });
  },
});

export const allStatements = (state) => state.financialStatements;
export default financialStatementsSlice.reducer;
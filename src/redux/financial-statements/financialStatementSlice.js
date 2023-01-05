import { createSlice } from '@reduxjs/toolkit';
import { fetchFinancialStatements, fetchIncomeStatements } from './financialStatementThunk';

const initialState = {
  financialStatements: [],
  incomeStatements: [],
  loading: true,
  error: null,
  deletedError: null,
};

const financialStatementsSlice = createSlice({
  name: 'financialStatements',
  initialState,
  reducers: {
    resetDeletedError(state) {
      state.deletedError = null;
    },
  },
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
      state.error = null;
      state.incomeStatements = action.payload;
      state.loading = false;
    });
  },
});

export const {
  resetDeletedError,
} = financialStatementsSlice.actions;
export default financialStatementsSlice.reducer;
import financialStatementsReducer, { initialState } from '../../redux/financial-statements/financialStatementSlice';
import { fetchFinancialStatements } from '../financial-statements/financialStatementThunk';

describe('financial statements slice', () => {
  it('has the correct initial state', () => {
    expect(initialState).toEqual({
      financialStatements: [],
      incomeStatements: [],
      loading: true,
      error: null,
    });
  });



  it('should handle the fetchFinancialStatements.pending action', () => {
    const state = {
      financialStatements: [],
      incomeStatements: [],
      loading: true,
      error: null,
    };
    const newState = financialStatementsReducer(state, fetchFinancialStatements.pending());
    expect(newState).toEqual(state);
  });

  it('should handle the fetchFinancialStatements.rejected action', () => {
    const state = {
      financialStatements: [],
      incomeStatements: [],
      loading: true,
      error: null,
    };

    const error = new Error('Request failed');
    const newState = financialStatementsReducer(state, fetchFinancialStatements.rejected(error));
    expect(newState).toEqual({
      ...state,
      loading: false,
      error: 'Request failed',
    });
  });

  it('should handle the fetchFinancialStatements.fulfilled action', () => {
    const state = {
      financialStatements: [],
      incomeStatements: [],
      loading: true,
      error: null,
    };

   
    const payload = [{ calendarYear: '2022',operatingExpenses: 10000,operatingIncome: 20000},
                    { calendarYear: '2021',operatingExpenses: 90000,operatingIncome: 30000},
                    { calendarYear: '2020',operatingExpenses: 80000,operatingIncome: 70000},];
    const newState = financialStatementsReducer(state, fetchFinancialStatements.fulfilled(payload));
    expect(newState).toEqual({
      financialStatements: payload,
      incomeStatements: [],
      loading: false,
      error: null,
    });
  });

});

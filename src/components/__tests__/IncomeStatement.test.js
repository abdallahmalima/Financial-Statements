import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import IncomeStatement from '../IncomeStatement';

describe('Test Income Statement Component', () => {
  it('check if component component match the snapshot', () => {
    
   const incomeStatement={
        calendarYear: '2022',
        operatingExpenses: 10000,
        operatingIncome: 20000,
      };

    const incomeStatementRender = render(
        <Router>
          <IncomeStatement incomeStatement={incomeStatement} />
        </Router>
    );

    expect(incomeStatementRender).toMatchSnapshot();
  });


  it('check if component component match the snapshot', () => {
    
    const incomeStatement={
         calendarYear: '2022',
         operatingExpenses: 10000,
         operatingIncome: 20000,
       };
 
     const { getByText } = render(
         <Router>
           <IncomeStatement incomeStatement={incomeStatement} />
         </Router>
     );
 
     expect(getByText('2022')).toBeInTheDocument();
     expect(getByText('Operating Expenses:')).toBeInTheDocument();
     expect(getByText('Operating Income:')).toBeInTheDocument();
   });


});

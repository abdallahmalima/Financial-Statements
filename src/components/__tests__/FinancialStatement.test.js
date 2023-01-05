import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import FinancialStatement from '../FinancialStatement';

describe('Test Financial Statement Component', () => {
  it('check if component component match the snapshot', () => {
    const symbol = 'ABC';

    const financialStatementRender = render(
        <Router>
        <FinancialStatement symbol={symbol} />
        </Router>,
    );

    expect(financialStatementRender).toMatchSnapshot();
  });

  it('renders symbol and button', () => {
    const symbol = 'ABC';
    const { getByText } = render(
      <Router>
       <FinancialStatement symbol={symbol} />
    </Router>,
    );
    const textSymbol = getByText(/ABC/i);
    const buttonElement = getByText(/view more/i);

    expect(buttonElement).toBeInTheDocument();
    expect(textSymbol).toBeInTheDocument();
  });
});

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchIncomeStatements } from '../redux/financial-statements/financialStatementThunk';

const FinancialStatement = ({
  symbol,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showIncomeStatements = () => {
    // dispatch(fetchIncomeStatements(symbol));
    navigate(`/${symbol}`);
  };
  return (
<div className="w-1/2 px-2 mb-4">
      <div className="bg-red-500 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col p-5 items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{symbol}</h3>
          <button onClick={showIncomeStatements} className="px-2 py-2 font-semibold rounded shadow-lg bg-red-700 text-gray-300 text-xl">
  View More
</button>
        </div>
      </div>
    </div>
  );
};

FinancialStatement.propTypes = {
  stringArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FinancialStatement;
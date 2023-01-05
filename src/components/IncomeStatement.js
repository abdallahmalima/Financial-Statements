import PropTypes from 'prop-types';
import currencyFormatter from '../utils/currencyFormatter';

const IncomeStatement = ({
  incomeStatement: { calendarYear, operatingExpenses, operatingIncome },
}) => (
<div className="w-full px-2 mb-4">
      <div className="bg-red-500 rounded-lg shadow-lg overflow-hidden">
        <div className="flex  p-3">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{calendarYear}</h3>
          <div className="flex flex-col p-3 ">
          <h4 className="text-l font-bold text-gray-900 mb-2">Operating Expenses:<span className="px-2 py-1 font-semibold rounded-full bg-red-600 text-white">{currencyFormatter(operatingExpenses)}</span></h4>
          <h4 className="text-l font-bold text-gray-900 mb-2">Operating Income:<span className="px-2 py-1 font-semibold rounded-full bg-red-600 text-white">{currencyFormatter(operatingIncome)}</span></h4>
          </div>

        </div>
      </div>
    </div>
);

IncomeStatement.propTypes = {
  incomeStatement: PropTypes.shape({
    calendarYear: PropTypes.string.isRequired,
    operatingExpenses: PropTypes.number.isRequired,
    operatingIncome: PropTypes.number.isRequired,
  }).isRequired,
};

export default IncomeStatement;
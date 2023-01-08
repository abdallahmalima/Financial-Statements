import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allStatements } from '../redux/financial-statements/financialStatementSlice';
import { fetchIncomeStatements } from '../redux/financial-statements/financialStatementThunk';
import currencyFormatter from '../utils/currencyFormatter';
import IncomeStatement from './IncomeStatement';
import useFilter from './useFilter';

const IncomeStatementList = () => {
  const {
    incomeStatements, incomeStatementsCache, error, loading,
  } = useSelector(allStatements);
  const [filter, setFilter] = useState('');
  const { symbol } = useParams();
  const filteredStatements = useFilter(filter, 'calendarYear');

  const incomeStatementsC = incomeStatementsCache
    .find((incomeStatementC) => incomeStatementC.symbol === symbol);

  const statements = (!incomeStatementsC) ? incomeStatements : incomeStatementsC.incomeStatements;

  const getAvg = (key) => {
    const allfilteredStatements = filteredStatements(statements);
    if (allfilteredStatements.length === 0) return 0;
    return allfilteredStatements
      .reduce((acc, statement) => acc + statement[key], 0) / allfilteredStatements.length;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (!incomeStatementsC) {
      dispatch(fetchIncomeStatements(symbol));
    }
  }, []);

  const debouncedFilter = useDebounce(filter, 500);
  const filteredIncomeStatements = useMemo(() => filteredStatements(statements), [debouncedFilter, statements]);
  console.log(filteredIncomeStatements);

  return <>
   <div className="w-full px-2 mb-4">
      <div className="bg-red-400 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 gap-5 flex flex-col items-center">
        <input type="text" placeholder="Search by Year...!" className="w-full p-4 bg-gray-100 rounded-lg shadow-lg focus:outline-none focus:shadow-outline" value={filter} onChange={(e) => setFilter(e.target.value)} />
           <h1 className='text-7xl font-extrabold text-grey-700'>{symbol}</h1>
           <h4 className="text-l font-bold p-0  text-gray-900 ">Avarage Expenses:<span className="px-2 py-1  text-2xl">{ currencyFormatter(getAvg('operatingExpenses'))}</span></h4>
          <h4 className="text-l font-bold text-gray-900 ">Avarage Income:<span className="px-2 py-1 text-2xl">{ currencyFormatter(getAvg('operatingIncome'))}</span></h4>
        </div>
      </div>
    </div>
  <div className="flex flex-wrap bg-red-400 -mx-2 px-3">
    {loading && <h3 className="bg-red-500 p-7 text-2xl rounded-3xl shadow-lg overflow-hidden m-auto text-center">Loading...</h3>}
    {error && <h3 className="bg-red-500 p-7 w-80 text-2xl rounded-3xl shadow-lg overflow-hidden m-auto text-center">{error}</h3>}
    {!loading && !error && (statements.length === 0) && <h3 className="textError">No Financial Statement Symbol Found</h3>}
    {!loading && !error && filteredStatements(statements)
      .map((incomeStatement, index) => (
       <IncomeStatement key={index} incomeStatement={incomeStatement} />

      ))}
    </div>
    </>;
};

export default IncomeStatementList;
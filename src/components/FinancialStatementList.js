import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFinancialStatements } from '../redux/financial-statements/financialStatementThunk';
import FinancialStatement from './FinancialStatement';
import useFilter from './useFilter';

const FinancialStatementList = () => {
  const { financialStatements, error, loading } = useSelector((state) => state.financialStatements);
  const [filter, setFilter] = useState('');
  const filteredStatements = useFilter(filter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFinancialStatements());
  }, []);

  return <>
   <div className="w-full px-2 mb-4">
      <div className="bg-red-400 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 gap-5 flex flex-col items-center">
        <input type="text" placeholder="Search Symbols....!" className="w-full p-4 bg-gray-100 rounded-lg shadow-lg focus:outline-none focus:shadow-outline" value={filter} onChange={(e) => setFilter(e.target.value)} />
           <img src='/home_pc.png' className="w-1/2 h-1/2 object-cover rounded-t-lg"/>
           <h1 className='text-2xl'><b className='text-3xl'>{filteredStatements(financialStatements).length}</b> Company's Symbols</h1>
        </div>
      </div>
    </div>
  <div className="flex flex-wrap bg-red-400 -mx-2 px-3">
    {loading && <h3 className="bg-red-500 p-7 text-2xl rounded-3xl shadow-lg overflow-hidden m-auto">Loading...</h3>}
    {error && <h3 className="bg-red-500 p-7 w-80 text-2xl rounded-3xl shadow-lg overflow-hidden m-auto">{error}</h3>}
    {!loading && !error && (financialStatements.length === 0) && <h3 className="textError">No Financial Statement Symbol Found</h3>}
    {!loading && !error && filteredStatements(financialStatements)
      .map((symbol, index) => (
      <FinancialStatement key={index} symbol={symbol}/>
      ))}
    </div>
    </>;
};

export default FinancialStatementList;
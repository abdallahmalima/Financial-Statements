import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import IncomeStatementList from './components/IncomeStatementList';
import FinancialStatementList from './components/FinancialStatementList';

const App = () => (<div className="w-full h-full font-montserrat  bg-red-400">
     <NavBar/>
     <Routes>
       <Route path="/" element={<FinancialStatementList />}/>
       <Route path="/:symbol" element={<IncomeStatementList/>}/>
     </Routes>
  </div>);

export default App;

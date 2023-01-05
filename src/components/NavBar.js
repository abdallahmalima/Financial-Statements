import { useLocation, useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
 <header className="flex justify-between bg-red-500  p-6 md:px-24 w-full shadow-lg min-h-24">
    <nav className="flex gap-3 flex-row">
        {(location.pathname !== '/') ? <BsFillArrowLeftCircleFill onClick={() => navigate('/')} className='text-3xl' /> : <img src='/money.png' className='w-1/12'/>}
        <h1 className="text-2xl font-bold text-gray-900  mr-2">
         {(location.pathname !== '/') ? 'Income Statements' : 'Financial Statements'}
        </h1>
    </nav>
  </header>
  );
};

export default NavBar;
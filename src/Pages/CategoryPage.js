import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const status = useSelector((state) => state.categories);
  const handleStatusCheck = () => {
    dispatch(checkStatus());
    setIsChecked(true);
  };

  return <div className='category-page'>
      {!isChecked && <button onClick={handleStatusCheck} >Check Status</button>}
      {isChecked && <h4>{status}</h4>}
      </div>;
};

export default CategoryPage;
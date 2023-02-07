import { Navigate, Outlet } from 'react-router-dom'
import AuthIndex from '../Auth/AuthIndex';

const FilterStudentRoute = () => {

  const { isLogedIn, userIs } = AuthIndex();

  return (
    isLogedIn && userIs === 1 ? <Outlet /> : <Navigate to='/login' />
  )
}

export default FilterStudentRoute;
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from '../pages/public/login';
import { Home } from '../pages/private/home';
import { CreateAccount } from '../pages/public/createAccount';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<CreateAccount />} />
    </Routes>
  );
};

export default AppRoutes;

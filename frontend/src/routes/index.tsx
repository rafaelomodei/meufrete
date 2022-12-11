import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/private/home';
import Login from '../pages/public/login';
import CreateAccount from '../pages/public/createAccount';
import { AddFreight } from '../pages/private/addFreight';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='cadastro' element={<CreateAccount />} />
      <Route path='add-frete' element={<AddFreight />} />
    </Routes>
  );
};

export default AppRoutes;

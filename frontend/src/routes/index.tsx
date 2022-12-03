import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/private/home';
import { CreateAccount } from '../pages/public/createAccount';
import { Loading } from '../components/organisms/loading';
import Login from '../pages/public/login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/loading' element={<Loading />} />
      <Route path='/cadastro' element={<CreateAccount />} />
    </Routes>
  );
};

export default AppRoutes;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/private/home';
import { Loading } from '../components/organisms/loading';
import Login from '../pages/public/login';
import CreateAccount from '../pages/public/createAccount';

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

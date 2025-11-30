  import { Routes, Route } from 'react-router-dom';
  import Product from '../pages/Product';
  import Detalis from '../pages/Detalis';
  import NotFound from '../pages/NotFound';
  import UserDetails from '../pages/UserDetails';
  import UserAccount from '../pages/UserAccount';
  import UserLayout from './UserLayout';

  const Navigator = () => {
    return (
    <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/details/:id" element={<Detalis />} />
        <Route path="user" element={<UserLayout />}>
                <Route path="details" element={<UserDetails />} />
                <Route path="account" element={<UserAccount />} />
            </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
export default Navigator;
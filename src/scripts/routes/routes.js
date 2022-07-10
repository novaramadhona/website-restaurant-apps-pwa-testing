import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;

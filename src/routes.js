import { Switch, Route } from 'react-router-dom';

import App from "./components/App";
import Error404 from "./components/Error/404";
import Books from './components/Books';
import Buy from './components/Buy';
import DetailBook from './components/DetailBook';
import CreateBook from './components/CreateBook/';

const AppRoutes = () => (
  <App>
    <Switch>
      {/* rutas */}
      <Route path="/" exact component={Books}></Route>
      <Route path="/books" exact component={Books}></Route>
      <Route path="/book/:id" exact component={DetailBook}></Route>
      <Route path="/buy/:id" exact component={Buy}></Route>
      <Route path="/newBook" exact component={CreateBook}></Route>
      <Route component={Error404}></Route>

    </Switch>
  </App>
);

export default AppRoutes;


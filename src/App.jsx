import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AuthView from './views/AuthView';
import Header from './views/Header';
import Home from './views/Home';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path={'/login'}>
          <AuthView />
        </Route>
        <PrivateRoute exact path={'/'}>
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AuthView from './views/AuthView';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Switch>
        <Route path={'/login'}>
          <AuthView />
        </Route>
        <PrivateRoute exact path={'/'}>
          <Home />
        </PrivateRoute>
      </Switch>
    </>
  );
}

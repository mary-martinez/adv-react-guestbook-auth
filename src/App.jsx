import { Route, Switch } from 'react-router-dom';
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
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useUserContext();
  console.log('currentUser', currentUser);
  return (
    <Route {...rest}>
      {currentUser.email ? children : <Redirect to="/login" />}
    </Route>
  );
}

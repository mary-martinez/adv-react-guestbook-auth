import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { getUser } from '../services/user';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUser() || { email: null });
  const [userId, setUserId] = useState(getUser());

  return (<UserContext.Provider value={{ currentUser, setCurrentUser, userId, setUserId }}>{children}</UserContext.Provider>);
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be within a user provider');
  }
  return context;
};

export { UserProvider, useUserContext };

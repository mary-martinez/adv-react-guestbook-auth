import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { signOutUser } from '../services/user';

export default function Header() {
  const { setUserId, setCurrentUser, currentUser } = useUserContext();
  const history = useHistory();

  const handleLogout = async () => {
    await signOutUser();
    setCurrentUser({});
    setUserId('');
    history.replace('/login');
  };

  return (
    <>
      <aside>
        <p>Welcome {currentUser.email}</p>
      </aside>
      <section>
        <button onClick={handleLogout}>logout</button>
      </section>
    </>
  );
}

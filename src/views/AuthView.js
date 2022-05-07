import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { signInUser, signUpUser } from '../services/user';

export default function AuthView() {
  const { setCurrentUser, userId, setUserId } = useUserContext();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [authType, setAuthType] = useState('login');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      if (authType === 'login') {
        const data = await signInUser({ email, password });
        setCurrentUser(data);
        setUserId(data.id);
        history.push('/');

      } else {
        const data = await signUpUser({ email, password });
        setCurrentUser(data.email);
        setUserId(data.id);
        history.push('/');

      }
      console.log('why not pushing');
      // history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h3>Log-in or Sign-up</h3>
      <div>
        <label>Log-In
          <input type={'radio'} value={'login'} checked={authType === 'login'} onChange={() => setAuthType('login')} />
        </label>
        <label>
          Sign-Up
          <input type={'radio'} value={'signup'} checked={authType === 'signup'} onChange={() => setAuthType('signup')} />
        </label>
      </div>
      <label>
        Email
        <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={() => handleSubmit()}>Submit</button>
      {error && <p>{error}</p>}
    </>
  );
}

import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextForm from '../components/TextForm';
import { useUserContext } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';
import { getUser, signOutUser } from '../services/user';

export default function Home() {
  const { userId, setUserId, setCurrentUser, currentUser } = useUserContext();
  const [error, setError] = useState('');
  const [tempText, setTempText] = useState();
  const history = useHistory();
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');


  useEffect(() => {
    const getData = async () => {
      const data = await getEntries();
      setEntries(data);
    };
    getData();
  }, []);

  const handleText = async () => {
    try {
      const newEntry = await createEntry({ userId: getUser().id, content: text });
      console.log('newEntry', newEntry);
      console.log('entries', entries);
      setEntries((prev) => [...prev, newEntry]);
      setText('');
    } catch (e) {
      setError(e.message);
    }
  };

  const handleLogout = async () => {
    await signOutUser();
    setCurrentUser({});
    setUserId('');
    history.replace('/login');
  };

  return (
    <>
      <button onClick={handleLogout}>logout</button>
      {error && <p>{error}</p>}
      {/* input for guestbook entries */}
      <TextForm {...{ handleText, setText, text }} />
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.content}</h3>
          <p>from: {currentUser.email}</p>

        </div>
      ))}
      {/* list out whats stored in supabase */}
    </>
  );
}

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextForm from '../components/TextForm';
import { useUserContext } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';
import { signOutUser } from '../services/user';

export default function Home() {
  const { userId, setUserId, currentUser } = useUserContext();
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
      const newEntry = await createEntry({ userId, content: text });
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
        <p key={entry.id}>{entry.content}</p>
      ))}
      {/* list out whats stored in supabase */}
    </>
  );
}

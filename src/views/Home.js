import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextForm from '../components/TextForm';
import { useUserContext } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';
import { getUser, signOutUser } from '../services/user';
import Header from './Header';

export default function Home() {
  const { currentUser } = useUserContext();
  const [error, setError] = useState('');
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



  return (
    <>
      <Header />
      {error && <p>{error}</p>}
      <TextForm {...{ handleText, setText, text }} />
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.content}</h3>
          <p>from: {currentUser.email}</p>
        </div>
      ))}
    </>
  );
}

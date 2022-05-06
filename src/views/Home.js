import React from 'react';
import { useHistory } from 'react-router-dom';
import TextForm from '../components/TextForm';
import { createEntry } from '../services/entries';
import { signOutUser } from '../services/user';

export default function Home() {
  const history = useHistory();
  // const handleText = async(text) => {
  //   try{
  //     await createEntry({userId, content})
  //   }
  // }

  const handleLogout = async () => {
    await signOutUser();
    history.replace('/login');
  };

  return (
    <>
      <button onClick={handleLogout}>logout</button>
      {/* input for guestbook entries */}
      {/* <TextForm handleText={handleText}/> */}
      {/* list out whats stored in supabase */}
    </>
  );
}

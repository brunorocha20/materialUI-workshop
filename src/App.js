import './App.css';
import { Routes, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import Chat from './components/Chat';

import NavBar from './components/NavBar';
import MUI from './components/MUI.jsx';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const auth = firebase.auth();

function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div>
      <NavBar />
      <Routes>
        {/* If there's an user, show the Chat, if there isn't, show the SignIn */}
        <Route path="/" element={user ? <Chat /> : <SignIn />} />
        <Route path="/material-ui" element={<MUI />} />
      </Routes>
    </div>
  );
}

export default App;

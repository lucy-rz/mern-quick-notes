import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-services';
import AuthPage from '../AuthPage/AuthPage';
import WriteNote from '../../pages/WriteNote/WriteNote';
import CheckNotes from '../../pages/CheckNotes/CheckNotes';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
    const[user, setUser] = useState(getUser());
  return (
    <main className="App">
        { user ? 
            <>
                <NavBar user={ user } setUser= { setUser }/>
                <Routes> 
                    <Route path="/notes/new" element={<WriteNote propUser={user}/>} /> 
                    <Route path="/notes" element={<CheckNotes propUser={user}/>} />
                </Routes> 
            </>    
            : <AuthPage setUser={ setUser } /> 
        }
    </main>
  );
}



import React, { useState, useEffect } from 'react';
import QuizContextProvider from './context/quizState'
import Home from './components/Home'
import Login from './components/Login'
import Firebase from './config/firebase'

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    authListener()
  }, [])
  const authListener = () => {
    Firebase.auth().onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }
  return (
    <div className="App">
          <QuizContextProvider>
            {user ? <Home /> : <Login />}
          </QuizContextProvider>
    </div>
  );
}

export default App;

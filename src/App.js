import React from "react";
import Notes from "./components/Notes";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { TodoProvider } from "./contexts/NoteContext";
import { AuthProvider, useAuthContext, logout } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Greeting />
          <Routes>
            <Route path="/todos"
              element={
                <PrivateRoute>
                  <TodoProvider>
                    <Notes />
                  </TodoProvider>
                </PrivateRoute>
              }
            />
            <Route path="/"
              element={
                <Login />
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

function Greeting() {
  const { auth, dispatch } = useAuthContext();

  if (auth.isLoggedIn)
    return (
      <p>
        Hello, {auth.name}!
        <button onClick={e => dispatch(logout())}>Logout</button>
      </p>
    );
  return <p>You are not logged in</p>;
}

export default App;

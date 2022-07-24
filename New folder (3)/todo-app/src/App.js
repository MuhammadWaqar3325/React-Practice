import './App.scss';
import AuthContextProvider from './context/AuthContext';
import React from 'react';
import '.././node_modules/bootstrap/dist/js/bootstrap.bundle'
import Routes from './pages/Routes';
function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;

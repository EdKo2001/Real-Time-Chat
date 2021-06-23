import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Container } from '@material-ui/core';
import './App.css'
import { Provider } from './contexts/Context';

function App() {
  return (
    <Router>
      <Provider>
        <Navbar />
        <Container>
          <AppRouter />
        </Container>
      </Provider>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Components } from './pages/Components';
import { SnackbarProvider } from 'notistack';

import './App.css';
import { FeedbackMessage } from './componets/feedbackMessage';


function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        Components={{
          custom: FeedbackMessage,
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  )
}

export default App;

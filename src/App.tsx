import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, History } from '@/pages';

function App() {
  return (
    <div className="App flex h-screen flex-col justify-between">
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Navigate to="/messages" />} />
          <Route path="messages" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, History } from '@/pages';

function App() {
  return (
    <div className="App flex h-screen flex-col justify-between">
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

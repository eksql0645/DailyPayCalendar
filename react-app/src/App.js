import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarInfo from './pages/CalendarInfo';
import Main from './pages/Main';
import WorkTag from './pages/WorkTag';

function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarInfo />} />
      <Route path="/workTag" element={<WorkTag />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;

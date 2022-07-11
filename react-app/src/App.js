import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Routes, Route } from 'react-router-dom';
import WorkSetting from './pages/WorkSetting';
import CalendarInfo from './pages/CalendarInfo';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/workSetting" element={<WorkSetting />} />
      <Route path="/calendar" element={<CalendarInfo />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;

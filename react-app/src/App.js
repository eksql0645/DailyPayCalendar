import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarInfo from './pages/CalendarInfo';
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import WorkSetting from './pages/WorkSetting';
import WorkTag from './pages/WorkTag';

function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<CalendarInfo />} />
      <Route path="/workSetting" element={<WorkSetting />} />
      <Route path="/workTag" element={<WorkTag />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LogIn />} />
    </Routes>
  );
}

export default App;

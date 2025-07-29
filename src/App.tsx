import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import AgentForm from './pages/AgentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat/:agentId" element={<Chat />} />
        <Route path="/create-agent" element={<AgentForm />} />
      </Routes>
    </Router>
  );
}

export default App;

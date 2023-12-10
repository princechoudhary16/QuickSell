
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './styles/App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');

  useEffect(() => {
    // Replacing with API call
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="app">
      <div className="controls">
        <label htmlFor="groupBy">Display: </label>
        <select
          id="groupBy"
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <option value="status">Status Order by Priority</option>
          <option value="userId">User Order by Priority</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <KanbanBoard tickets={tickets} groupBy={groupBy} />
    </div>
  );
};

export default App;

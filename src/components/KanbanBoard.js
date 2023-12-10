

import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import './styles/KanbanBoard.css';

const groupTickets = (tickets, groupBy) => {
  // Group tickets
  const grouped = tickets.reduce((groups, ticket) => {
    const group = ticket[groupBy] || '0';
    groups[group] = groups[group] || [];
    groups[group].push(ticket);
    return groups;
  }, {});

  // Sort each group by priority
  for (const group in grouped) {
    grouped[group].sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  return grouped;
};

const KanbanBoard = ({ tickets, groupBy }) => {
  const [columns, setColumns] = useState({});

  useEffect(() => {
    setColumns(groupTickets(tickets, groupBy));
  }, [tickets, groupBy]);

  const onDragEnd = (result) => {
    
  };

  if (!columns || typeof columns !== 'object') {
    return <div>Loading...</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {Object.keys(columns).map(columnId => (
          <Column key={columnId} columnId={columnId} tickets={columns[columnId]} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;


import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './styles/Ticket.css';

const Ticket = ({ ticket, index }) => {
  const [isTicked, setIsTicked] = useState(false); // State to track if the ticker is clicked

  const toggleTick = () => {
    setIsTicked(!isTicked); // Toggle the ticked state
  };

  return (
    <Draggable draggableId={ticket.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`ticket ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          <div className="ticket-header">
             <span className="ticket-id">{ticket.id}</span>
             {/* <span className="ticket-title">{ticket.title}</span> */}
           </div>
          <div className="ticket-content">
            {/* Ticker icon on the left side */}
            <span className={`ticker ${isTicked ? 'ticked' : ''}`} onClick={toggleTick}></span>
            <p className="ticket-title">{ticket.title}</p>
          </div>
          <div className="ticket-footer">
            <span className="ticket-type">
              <span className="type-circle"></span>
              {ticket.tag[0]}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Ticket;


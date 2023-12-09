// import React from 'react';
// import Ticket from './Ticket';
// import './styles/Column.css';

// const Column = ({ title, tickets }) => {
//   return (
//     <div className="column">
//       <h2>{title}</h2>
//       {tickets.map((ticket) => (
//         <Ticket key={ticket.id} ticket={ticket} />
//       ))}
//     </div>
//   );
// };

// export default Column;
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Ticket from './Ticket';
import './styles/Column.css';

const Column = ({ columnId, tickets }) => {
  return (
    <div className="column">
      <h2>{columnId}</h2>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tickets.map((ticket, index) => (
              <Ticket key={ticket.id} ticket={ticket} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

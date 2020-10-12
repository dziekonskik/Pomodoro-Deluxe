import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SessionListItem = ({ work, rest, workIcon, restIcon, handleRemove }) => {
  return (
    <>
      <ListGroup.Item
        style={{ fontFamily: 'Lemonada' }}
        className="d-flex justify-content-around"
        onClick={handleRemove}
      >
        <span>
          {workIcon} Work Time: <strong>{work}</strong>
        </span>
        <span>
          {restIcon} Break Time: <strong>{rest}</strong>
        </span>
      </ListGroup.Item>
    </>
  );
};

export default SessionListItem;

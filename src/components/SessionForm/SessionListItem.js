import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SessionListItem = ({
  workMinutes,
  restMinutes,
  workIcon,
  restIcon,
  handleRemove,
}) => {
  return (
    <>
      <ListGroup.Item
        style={{ fontFamily: 'Lemonada' }}
        className="d-flex justify-content-around"
        onClick={handleRemove}
      >
        <span>
          {workIcon} Work Time:{' '}
          <strong className="h2 text-danger">{workMinutes}</strong>
        </span>
        <span>
          {restIcon} Break Time:{' '}
          <strong className="h2 text-danger">{restMinutes}</strong>
        </span>
      </ListGroup.Item>
    </>
  );
};

export default SessionListItem;

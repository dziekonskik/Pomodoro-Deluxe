import React from 'react';
import { Toast } from 'react-bootstrap';

const HistoryItem = ({
  title,
  date,
  workTime,
  restTime,
  sessions,
  pausesCount,
}) => {
  return (
    <div className="my-2">
      <Toast>
        <Toast.Header>
          <strong className="mr-auto">{title}</strong>
          <strong>{date.toLocaleDateString()}</strong>
          <small>{date.toLocaleTimeString()}</small>
        </Toast.Header>
        <Toast.Body className="text-center">
          Work Time: <strong>{workTime} min</strong> <br />
          Rest Time: <strong>{restTime} min</strong> <br />
          Total Pauses: <strong style={{ color: 'red' }}>{pausesCount}</strong>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default HistoryItem;

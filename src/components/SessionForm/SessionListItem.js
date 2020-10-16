import React from 'react';
import { ListGroup } from 'react-bootstrap';
import styles from './SessionListItem.module.scss';

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
        className="d-flex justify-content-around"
        onClick={handleRemove}
        className={styles.boxShadow}
      >
        <span>
          <span style={{ fontSize: '40px' }}>{workIcon}</span> Work Time:{' '}
          <strong className="h2 text-danger">{workMinutes}</strong>
        </span>{' '}
        <span>
          <span style={{ fontSize: '40px' }}>{restIcon}</span> Break Time:{' '}
          <strong className="h2 text-danger">{restMinutes}</strong>
        </span>
      </ListGroup.Item>
    </>
  );
};

export default SessionListItem;

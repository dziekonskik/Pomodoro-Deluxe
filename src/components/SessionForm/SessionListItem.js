import React from 'react';
import PropTypes from 'prop-types';
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
        className={`d-flex justify-content-around ${styles.boxShadow}`}
        onClick={handleRemove}
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

SessionListItem.propTypes = {
  workMinutes: PropTypes.number.isRequired,
  restMinutes: PropTypes.number.isRequired,
  workIcon: PropTypes.element.isRequired,
  restIcon: PropTypes.element.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default SessionListItem;

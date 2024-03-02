import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../_constants';

export const SquareUnchecked = () => {
  return <FontAwesomeIcon icon={faSquare} color={Colors.secondary} />;
};

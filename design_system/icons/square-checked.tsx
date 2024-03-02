import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../_constants';

export const SquareChecked = () => {
  return <FontAwesomeIcon icon={faSquareCheck} color={Colors.primary} />;
};

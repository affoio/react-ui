import React from 'react';
import SuccessIcon from '../Icon/SuccessIcon';
import FailureIcon from '../Icon/FailureIcon';
import InfoIcon from '../Icon/InfoIcon';
import AttentionIcon from '../Icon/AttentionIcon';

const NotificationIcon = ({ type }) => {
  switch (type) {
    case 'info':
      return <InfoIcon />;
    case 'warning':
      return <AttentionIcon />;
    case 'error':
      return <FailureIcon />;
    case 'success':
    default:
      return <SuccessIcon />;
  }
};

export default NotificationIcon;

import React from 'react';

import { useHistory } from 'react-router-dom';
import Icon from './back_button.svg';

export const BackButton = () => {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={history.goBack}
      className="back-button">
      <img
        className="back-icon"
        src={Icon}
        style={{ width: '20px' }}
        alt="icon" />
      <div className="back-text">Movies</div>
    </button>
  );
};
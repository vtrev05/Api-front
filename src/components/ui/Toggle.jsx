import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.3rem;
`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme} >
      {theme === 'dark' && (
        <FontAwesomeIcon icon={faMoon} />
      )}
      {theme === 'light' && (
        <FontAwesomeIcon icon={faSun} />
      )}
      </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;

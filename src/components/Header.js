import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {};

export default Header;

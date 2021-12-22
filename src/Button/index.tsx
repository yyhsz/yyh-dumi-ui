import React from 'react';

interface Props {}

const Button: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <button>
      123123
      <span>{children}</span>
    </button>
  );
};

export default Button;

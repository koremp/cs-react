import React from 'react';
import Button from './Button';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
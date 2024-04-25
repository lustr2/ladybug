import React from 'react';
import './style.css';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left'
}

interface ILadybug
{
  posX: number;
  posY: number;
  orientation: Direction;
}

const Ladybug : React.FC<ILadybug> = ({ posX, posY, orientation }) => {
  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;
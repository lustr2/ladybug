import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import { Direction } from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App: React.FC = () => {
  const [posX, setPosX] = useState<number>(100);
  const [posY, setPosY] = useState<number>(100);
  const [orientation, setOrientation] = useState<Direction>(Direction.right);

  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      setOrientation(Direction.up);
      setPosX(posX - STEP_SIZE);
    } else if (code === 'ArrowLeft') {
      setOrientation(Direction.left);
      setPosY(posY - STEP_SIZE);
    } else if (code === 'ArrowRight') {
      setOrientation(Direction.right);
      setPosY(posY + STEP_SIZE);
    } else if (code === 'ArrowDown') {
      setOrientation(Direction.down);
      setPosX(posX + STEP_SIZE);
    }
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug posX={posX} posY={posY} orientation={orientation} />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

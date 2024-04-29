import { useState } from 'react';
import { Direction, Ladybug } from './components/Ladybug';

const STEP_SIZE = 25;

interface ILadybug {
  posX: number;
  posY: number;
  orientation: Direction;
}

export const App: React.FC = () => {
  const [ladyBug, setLadyBug] = useState<ILadybug>({
    posX: 100, 
    posY: 100, 
    orientation: Direction.right
  });

  const handleKeyUp = ({ code }:React.KeyboardEvent<HTMLDivElement>) => {
    if (code === 'ArrowUp') {
      setLadyBug({ ...ladyBug, posX : ladyBug.posX-STEP_SIZE, orientation: Direction.up});
    } else if (code === 'ArrowLeft') {
      setLadyBug({ ...ladyBug, posY : ladyBug.posY-STEP_SIZE, orientation: Direction.left});
    } else if (code === 'ArrowRight') {
      setLadyBug({ ...ladyBug, posY : ladyBug.posY+STEP_SIZE, orientation: Direction.right});
    } else if (code === 'ArrowDown') {
      setLadyBug({ ...ladyBug, posX : ladyBug.posX+STEP_SIZE, orientation: Direction.down});
    }
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug lb={ladyBug} />
    </div>
  );
};

export default App;

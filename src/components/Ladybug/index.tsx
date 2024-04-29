import './style.css';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left'
}

interface ILadybugProps
{
    posX: number;
    posY: number;
    orientation: Direction;
}

export const Ladybug : React.FC<{ lb:ILadybugProps }> = ({ lb }) => {
  const { posX, posY, orientation } = lb;

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
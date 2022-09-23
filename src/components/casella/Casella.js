import './Casella.scss';
import CloseIcon from '@mui/icons-material/Close';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTurn, setMatrixValue } from '../../reducer/TrisSlice';

const Casella = ({ id }) => {
  const [isSelected, setIsSelected] = useState([false, 0]);
  const player1 = useSelector((state) => state.tris.player1);
  const games = useSelector((state) => state.tris.gameNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsSelected(() => [false, 0]);
  }, [games]);

  const handleClick = (e) => {
    dispatch(
      setMatrixValue({ id: e.target.parentElement.id, value: playerTurn() })
    );
    dispatch(changeTurn());
    setIsSelected(() => [true, playerTurn()]);
  };

  const playerTurn = () => {
    if (player1.isYourTurn) {
      return 1;
    } else {
      return 2;
    }
  };

  const gestioneCSS = () => {
    if (!isSelected[0] && playerTurn() === 1) {
      return (
        <CloseIcon
          id={id}
          className={'casella_icon_default'}
          style={{ width: '100px', height: '100px' }}
        />
      );
    } else if (!isSelected[0] && playerTurn() === 2) {
      return (
        <CircleOutlinedIcon
          id={id}
          className={'casella_icon_default'}
          style={{ width: '100px', height: '100px' }}
        />
      );
    } else if (isSelected[0] && isSelected[1] === 1) {
      return (
        <CloseIcon
          id={id}
          className={'casella_icon_selected'}
          style={{ width: '100px', height: '100px' }}
        />
      );
    } else if (isSelected[0] && isSelected[1] === 2) {
      return (
        <CircleOutlinedIcon
          id={id}
          className={'casella_icon_selected'}
          style={{ width: '100px', height: '100px' }}
        />
      );
    }
  };

  return (
    <div
      className='casella_div'
      id={id}
      onClick={!isSelected[0] ? handleClick : null}
    >
      {gestioneCSS()}
    </div>
  );
};
export default Casella;

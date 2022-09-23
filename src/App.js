import './App.css';
import Tris from './components/Tris';
import Title from './components/info/Title';
import InfoPlayers from './components/info/InfoPlayers';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import {
  reset,
  resetMatrix,
  savePlayer1,
  savePlayer2,
  addVictoryP1,
  addVictoryP2,
} from './reducer/TrisSlice';
import { CalcolaVincitore } from './funzioni/CalcolaVincitore';

const InsertPlayer1Form = ({ open, setOpen }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Player 1</DialogTitle>
      <form onSubmit={setOpen}>
        <DialogContent>
          <DialogContentText>
            Il giocatore 1 avrà il simbolo X
          </DialogContentText>

          <TextField
            autoFocus
            margin='dense'
            id='name'
            name='name'
            label='Nome'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit'>Salva</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const InsertPlayer2Form = ({ open, setOpen }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Player 2</DialogTitle>
      <form onSubmit={setOpen}>
        <DialogContent>
          <DialogContentText>
            Il giocatore 2 avrà il simbolo O
          </DialogContentText>

          <TextField
            autoFocus
            margin='dense'
            id='name'
            name='name'
            label='Nome'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit'>Salva</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const Winner = ({ player, open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {player === 1 && 'HAI VINTO - Giocatore 1'}
          {player === 2 && 'HAI VINTO - Giocatore 2'}
          {player === 3 && 'PAREGGIO'}
        </Typography>
      </Box>
    </Modal>
  );
};

function App() {
  const dispatch = useDispatch();
  const [modalOpen1, setModalOpen1] = useState(true);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalWinner, setModalWinner] = useState(true);
  const winner = CalcolaVincitore();

  const handleModalWinner = () => {
    if (winner === 1) {
      dispatch(addVictoryP1());
    }
    if (winner === 2) {
      dispatch(addVictoryP2());
    }
    dispatch(resetMatrix());
    setModalWinner(true);
  };

  const resetAll = () => {
    setModalWinner(true);
    setModalOpen1(() => true);
    dispatch(reset());
  };

  const handleModal1 = (e) => {
    e.preventDefault();
    if (e.target.name.value !== '') {
      dispatch(savePlayer1(e.target.name.value));
      setModalOpen1(() => !modalOpen1);
      setModalOpen2(() => !modalOpen2);
    }
  };
  const handleModal2 = (e) => {
    e.preventDefault();
    if (e.target.name.value !== '') {
      dispatch(savePlayer2(e.target.name.value));
      setModalOpen2(() => !modalOpen2);
    }
  };

  return (
    <div className='App'>
      {winner !== 0 && (
        <Winner
          open={modalWinner}
          handleClose={handleModalWinner}
          player={winner}
        />
      )}
      <InsertPlayer1Form open={modalOpen1} setOpen={handleModal1} />
      <InsertPlayer2Form open={modalOpen2} setOpen={handleModal2} />
      <Title />
      <InfoPlayers />
      <Tris />
      <Button onClick={resetAll}>RESET</Button>
    </div>
  );
}

export default App;

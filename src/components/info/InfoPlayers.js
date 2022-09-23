import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const InfoPlayers = () => {
  const player1 = useSelector((state) => state.tris.player1);
  const player2 = useSelector((state) => state.tris.player2);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Stack direction='row' spacing={1}>
        <Chip
          avatar={
            <Avatar>
              <CloseIcon />
            </Avatar>
          }
          label={player1.name + ' - ' + player1.victories}
          variant='outlined'
          style={{
            color: 'white',
            fontSize: '100%',
            height: '3rem',
          }}
        />
        <Chip
          avatar={
            <Avatar>
              <CircleOutlinedIcon />
            </Avatar>
          }
          label={player2.name + ' - ' + player2.victories}
          variant='outlined'
          style={{
            color: 'white',
            fontSize: '100%',
            height: '3rem',
          }}
        />
      </Stack>
    </div>
  );
};
export default InfoPlayers;

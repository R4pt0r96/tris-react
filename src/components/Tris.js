import Casella from './casella/Casella';
import './Tris.scss';

const Tris = () => {
  return (
    <div className='tris_container'>
      <div>
        <Casella id='A1' />
        <Casella id='B1' />
        <Casella id='C1' />
      </div>
      <div>
        <Casella id='A2' />
        <Casella id='B2' />
        <Casella id='C2' />
      </div>
      <div>
        <Casella id='A3' />
        <Casella id='B3' />
        <Casella id='C3' />
      </div>
    </div>
  );
};
export default Tris;

import { useSelector } from 'react-redux';

export const CalcolaVincitore = () => {
  const matrix = useSelector((state) => state.tris.matrix);

  /*
    A1 B1 C1
    A2 B2 C2
    A3 B3 C3

    COMBINAZIONI VITTORIA
    A1 B1 C1
    A1 A2 A3
    A1 B2 C3

    B1 B2 B3

    C1 C2 C3
    C1 B2 A3

    A2 B2 C2

    A3 B3 C3
  */

  if (
    (matrix.A1 === 1 && matrix.B1 === 1 && matrix.C1 === 1) ||
    (matrix.A1 === 1 && matrix.A2 === 1 && matrix.A3 === 1) ||
    (matrix.A1 === 1 && matrix.B2 === 1 && matrix.C3 === 1) ||
    (matrix.B1 === 1 && matrix.B2 === 1 && matrix.B3 === 1) ||
    (matrix.C1 === 1 && matrix.C2 === 1 && matrix.C3 === 1) ||
    (matrix.C1 === 1 && matrix.B2 === 1 && matrix.A3 === 1) ||
    (matrix.A2 === 1 && matrix.B2 === 1 && matrix.C2 === 1) ||
    (matrix.A3 === 1 && matrix.B3 === 1 && matrix.C3 === 1)
  ) {
    return 1;
  } else if (
    (matrix.A1 === 2 && matrix.B1 === 2 && matrix.C1 === 2) ||
    (matrix.A1 === 2 && matrix.A2 === 2 && matrix.A3 === 2) ||
    (matrix.A1 === 2 && matrix.B2 === 2 && matrix.C3 === 2) ||
    (matrix.B1 === 2 && matrix.B2 === 2 && matrix.B3 === 2) ||
    (matrix.C1 === 2 && matrix.C2 === 2 && matrix.C3 === 2) ||
    (matrix.C1 === 2 && matrix.B2 === 2 && matrix.A3 === 2) ||
    (matrix.A2 === 2 && matrix.B2 === 2 && matrix.C2 === 2) ||
    (matrix.A3 === 2 && matrix.B3 === 2 && matrix.C3 === 2)
  ) {
    return 2;
  } else if (
    matrix.A1 !== 0 &&
    matrix.B1 !== 0 &&
    matrix.C1 !== 0 &&
    matrix.A2 !== 0 &&
    matrix.B2 !== 0 &&
    matrix.C2 !== 0 &&
    matrix.A3 !== 0 &&
    matrix.B3 !== 0 &&
    matrix.C3 !== 0
  ) {
    return 3;
  } else {
    return 0;
  }
};

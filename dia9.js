/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const rows = board.length;
    const cols = board[0].length;
  
    // Encontrar la posición de la locomotora '@'
    let locoRow = -1;
    let locoCol = -1;
    for (let r = 0; r < rows; r++) {
      const c = board[r].indexOf('@');
      if (c !== -1) {
        locoRow = r;
        locoCol = c;
        break;
      }
    }
  
    // Determinar el siguiente movimiento
    let nextRow = locoRow;
    let nextCol = locoCol;
  
    switch (mov) {
      case 'U':
        nextRow -= 1;
        break;
      case 'D':
        nextRow += 1;
        break;
      case 'L':
        nextCol -= 1;
        break;
      case 'R':
        nextCol += 1;
        break;
    }
  
    // Comprobar límites
    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
      return 'crash';
    }
  
    const nextCell = board[nextRow][nextCol];
  
    if (nextCell === '@' || nextCell === 'o') {
      return 'crash';
    } else if (nextCell === '*') {
      return 'eat';
    } else {
      // Asumimos que el resto (·) es espacio vacío.
      return 'none';
    }
  }
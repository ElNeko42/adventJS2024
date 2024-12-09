/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const numberOfLanes = indices.length;
    const lines = [];
    
    for (let i = 0; i < numberOfLanes; i++) {
      const laneNumber = i + 1;
      const indent = ' '.repeat(numberOfLanes - laneNumber);
      
      // Crear la pista base con tildes
      let track = '~'.repeat(length);
  
      const idx = indices[i];
      if (idx !== 0) {
        // Calcular la posición real del reno
        let renoPos = idx >= 0 ? idx : length + idx;
        // Verificar que la posición sea válida y colocar el reno
        if (renoPos >= 0 && renoPos < length) {
          track = track.substring(0, renoPos) + 'r' + track.substring(renoPos + 1);
        }
      }
      
      // Agregar el carril con su número
      const line = `${indent}${track} /${laneNumber}`;
      lines.push(line);
    }
    
    return lines.join('\n');
  }
  
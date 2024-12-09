/**
 * @param {string[]} box
 * @returns {boolean} True si el regalo (*) está dentro de la caja
 */
function inBox(box) {
    // Si hay menos de 3 filas, directamente no hay espacio para tener un regalo dentro
    if (box.length < 3) return false;
    
    // Verificar la primera y última fila
    const firstRow = box[0];
    const lastRow = box[box.length - 1];
    
    // Todas las filas iniciales y finales deben ser '#'
    if (!/^#+$/.test(firstRow) || !/^#+$/.test(lastRow)) {
      return false;
    }
    
    // Comprobar cada fila intermedia
    for (let i = 1; i < box.length - 1; i++) {
      const row = box[i];
      
      // La primera y última columna deben ser '#'
      if (row[0] !== '#' || row[row.length - 1] !== '#') {
        return false;
      }
      
      // Buscamos el '*' dentro de la fila (en columnas intermedias)
      for (let j = 1; j < row.length - 1; j++) {
        if (row[j] === '*') {
          return true;
        }
      }
    }
    
    // Si no encontramos el '*', entonces no está dentro de la caja
    return false;
  }
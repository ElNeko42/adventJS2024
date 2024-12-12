/**
 * @param {string} ornaments
 * @return {number | undefined} - The price of the tree
 */
function calculatePrice(ornaments) {
    // Definimos los valores de cada adorno
    const values = {
      '*': 1,  // Copo de nieve
      'o': 5,  // Bola de Navidad
      '^': 10, // Arbolito decorativo
      '#': 50, // Guirnalda brillante
      '@': 100 // Estrella polar
    };
  
    let price = 0;
  
    for (let i = 0; i < ornaments.length; i++) {
      const current = ornaments[i];
      const next = ornaments[i + 1];
  
      // Si hay un adorno desconocido, retornamos undefined
      if (!(current in values)) return undefined;
  
      // Si el adorno actual es menor que el siguiente, restamos su valor
      if (next && values[current] < values[next]) {
        price -= values[current];
      } else {
        // En cualquier otro caso, sumamos su valor
        price += values[current];
      }
    }
  
    return price;
  }
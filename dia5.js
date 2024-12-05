/*
*Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:
*
*type indica si es una bota izquierda (I) o derecha (R).
*size indica el tamaño de la bota.
*Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello,
*debes devolver una lista con los pares disponibles después de emparejar las botas.
*
*¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
**/

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const sizeCounts = {};
  
    for (const shoe of shoes) {
      const { size, type } = shoe;
  
      if (!sizeCounts[size]) {
        sizeCounts[size] = { I: 0, R: 0 };
      }
  
      sizeCounts[size][type]++;
    }
  
    const result = [];
  
    for (const size in sizeCounts) {
      const leftCount = sizeCounts[size]['I'];
      const rightCount = sizeCounts[size]['R'];
      const pairs = Math.min(leftCount, rightCount);
  
      for (let i = 0; i < pairs; i++) {
        result.push(Number(size));
      }
    }
  
    return result;
  }
  
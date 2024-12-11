/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number | undefined} The value of the register A
 */
function compile(instructions) {
    const registers = {};
    
    // Función auxiliar para obtener el valor de un operando (que puede ser número o registro)
    function getValue(x) {
      // Si es un número (por ejemplo "-1" o "10"), lo convertimos a número directamente.
      // Si no, asumimos que es un registro.
      if (/^-?\d+$/.test(x)) {
        return parseInt(x, 10);
      }
      // Si es un registro, si no existe se inicializa en 0.
      if (registers[x] === undefined) {
        registers[x] = 0;
      }
      return registers[x];
    }
    
    // Función auxiliar para escribir en un registro (el segundo parámetro siempre es un registro)
    function setRegister(reg, val) {
      registers[reg] = val;
    }
    
    let i = 0; // índice de instrucción actual
    while (i < instructions.length) {
      const parts = instructions[i].split(' ');
      const instr = parts[0];
      
      switch (instr) {
        case 'MOV': {
          // MOV x y: Copia el valor x en el registro y
          const x = parts[1];
          const y = parts[2];
          const val = getValue(x);
          setRegister(y, val);
          i++;
          break;
        }
        case 'INC': {
          // INC x: Incrementa en 1 el contenido del registro x
          const x = parts[1];
          // Si el registro no existe, se considera 0
          const val = getValue(x);
          setRegister(x, val + 1);
          i++;
          break;
        }
        case 'DEC': {
          // DEC x: Decrementa en 1 el contenido del registro x
          const x = parts[1];
          const val = getValue(x);
          setRegister(x, val - 1);
          i++;
          break;
        }
        case 'JMP': {
          // JMP x y: Si el valor del registro x es 0 salta a la instrucción índice y
          const x = parts[1];
          const y = parseInt(parts[2], 10);
          const val = getValue(x);
          if (val === 0) {
            i = y;
          } else {
            i++;
          }
          break;
        }
        default:
          // Instrucción desconocida (opcionalmente podríamos lanzar error)
          i++;
      }
    }
  
    // Al finalizar, devolver el valor del registro A o undefined si no se ha asignado nunca.
    return registers['A'];
  }
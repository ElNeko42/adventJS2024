
// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. 
// Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

function createFrame(names) {
    // Encontrar la longitud del nombre más largo
    const maxLength = Math.max(...names.map(name => name.length));
  
    // Crear la línea superior e inferior del marco
    const border = '*'.repeat(maxLength + 4);
  
    // Crear las líneas con los nombres
    const framedNames = names.map(name => `* ${name.padEnd(maxLength, ' ')} *`);
  
    // Combinar todo en una sola salida
    return [border, ...framedNames, border].join('\n');
  }
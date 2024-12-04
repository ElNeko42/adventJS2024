// ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. 
// Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
// El árbol siempre debe tener la misma longitud por cada lado.
// Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/



function createXmasTree(height, ornament) {
    let tree = '';
  
    // Crear la copa del árbol
    for (let i = 0; i < height; i++) {
      let underscores = '_'.repeat(height - i - 1); // Guiones bajos a los lados
      let ornaments = ornament.repeat(i * 2 + 1); // Ornamentos en cada nivel
      tree += underscores + ornaments + underscores + '\n'; // Agregar cada nivel del árbol
    }
  
    // Crear el tronco del árbol
    let trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n';
    tree += trunk + trunk; // Agregar dos líneas de tronco
  
    return tree.trim(); // Eliminar espacios al final
  }
  
  console.log(createXmasTree(5, '*'));
  
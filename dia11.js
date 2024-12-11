/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    // Primero, separa el número inicial del resto usando el primer "_"
    const underscoreIndex = filename.indexOf('_');
    // Todo lo que va después del "_" es la parte con el nombre original + ext extra
    const afterUnderscore = filename.substring(underscoreIndex + 1);
    
    // Divide por "."
    const parts = afterUnderscore.split('.');
    
    // Elimina el último elemento (la extensión extra no deseada)
    parts.pop();
    
    // Une el resto con "."
    return parts.join('.');
  }
  

/**
 * @param {string} packages
 * @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let result = packages;
    let regex = /\([^()]*\)/; 
    // Este patrón busca paréntesis sin paréntesis internos
    // Ejemplo: (abc), (defg), pero no (a(bc))
    
    // Mientras haya algún conjunto de paréntesis sin anidar más adentro
    while (regex.test(result)) {
      result = result.replace(regex, (match) => {
        // match es algo como "(contenido)"
        // Quitamos el primer y último carácter (los paréntesis)
        const inner = match.slice(1, -1);
        // Volteamos el contenido
        const reversed = inner.split('').reverse().join('');
        return reversed;
      });
    }
    
    return result;
  }
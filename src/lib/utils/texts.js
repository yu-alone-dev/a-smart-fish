// Установка стилей
export function style(
    str,
    prefix,
    indexes = [[0, -1]],
    pattern = [null, null],
    endPatterns = [';']
) {
    let result = str;
    let allIndexes = [...indexes];
    
    // Используем паттерны если они заданы
    if (pattern[0] != null) {
        const startRegex = new RegExp(pattern[0].source, 'g');
        
        allIndexes = [];
        
        let startMatch;
        while ((startMatch = startRegex.exec(str)) !== null) {
            // Ищем конец строки (; или . или что-то еще)
            const endPatternsSource = endPatterns.map(p => {
                if (p instanceof RegExp) {
                    return p.source;
                }
                return p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }).join('|');
            
            const endRegex = new RegExp(endPatternsSource, 'g');
            endRegex.lastIndex = startMatch.index + startMatch[0].length;
            const endMatch = endRegex.exec(str);
            
            if (endMatch) {
                allIndexes.push([
                    startMatch.index + startMatch[0].length,
                    endMatch.index
                ]);
            }
        }
    }
    
    // Применяем стили (с конца, чтобы не сбивать индексы)
    for (let i = allIndexes.length - 1; i >= 0; i--) {
        const [start, end] = allIndexes[i];
        const actualEnd = end === -1 ? result.length : end;
        
        result = 
            result.slice(0, start) + 
            `<${prefix}>` + 
            result.slice(start, actualEnd) + 
            `</${prefix}>` + 
            result.slice(actualEnd);
    }
    
    return result;
}
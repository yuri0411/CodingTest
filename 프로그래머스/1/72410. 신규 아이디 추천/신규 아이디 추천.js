
function solution(new_id) {
    let validId = new_id
                    .replace(/[A-Z]/g, (id) => id.toLowerCase())
                    .match(/[a-z0-9-_.\s]/g)
                    .reduce((acc, curr) => {
                        if(acc.length === 0) return acc.concat([curr]);
                        return  acc[acc.length - 1] === '.' && curr === '.' ? acc :  acc.concat([curr])
                    }, [])
                    .join('')
                    .replace(/^\.|\.$/, '')
                    .replace(/^$/g, 'a')
                    .substring(0, 15)
                    .replace(/\.$/, '');
    
    return validId.padEnd(3, validId[validId.length - 1]);
}

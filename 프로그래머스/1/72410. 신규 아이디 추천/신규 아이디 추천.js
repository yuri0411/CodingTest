
function solution(new_id) {
    let validId = new_id
                    .toLowerCase()
                    .replace(/[^a-z0-9-_.]/g, '')
                    .replace(/\.+/g, '.')
                    .replace(/^\.|\.$/, '')
                    .replace(/^$/g, 'a')
                    .substring(0, 15)
                    .replace(/\.$/, '');
    
    return validId.padEnd(3, validId[validId.length - 1]);
}

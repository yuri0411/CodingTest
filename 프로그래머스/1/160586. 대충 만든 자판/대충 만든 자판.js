function solution(keymap, targets) {
    const keyMap = {}

    for(let key of keymap) {
        for(let i = 0; i < key.length; i++) {
            if(keyMap[key[i]]) {
                keyMap[key[i]] = Math.min( keyMap[key[i]], i + 1)
            } else {
                keyMap[key[i]] = i + 1
            }
        }
    }
    
    return targets.map((target) => {
        let sum = 0
        for(let char of target) {
            if(!keyMap[char]) return -1
            sum += keyMap[char]
        }
        
        return sum
    })
}
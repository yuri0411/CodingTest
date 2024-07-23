function solution(s) {
    const center = Math.floor(s.length / 2)
    let answer = ''
    
    if(s.length % 2 === 0) {
        answer = `${s[center -1]}${s[center]}`
    } else {
        answer = s[center]
    }
    
    return answer
}

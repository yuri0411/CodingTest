function solution(s, skip, index) {
    let answer = ''
    let codes = Array.from({length:"z".codePointAt() - "a".codePointAt() + 1}, (_, i) => "a".codePointAt() + i )


    for(let char of skip) {
        const index = codes.indexOf(char.codePointAt())
        codes.splice(index, 1)
    }

    for(let char of s) {
        let i = codes.indexOf(char.codePointAt()) + index
        while (i >= codes.length) {
            i -= codes.length
        }
        answer += String.fromCharCode(codes[i])
    }
    return answer
}
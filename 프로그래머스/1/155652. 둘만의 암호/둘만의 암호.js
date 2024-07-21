function solution(s, skip, index) {
    let answer = ''
    let alphabet = Array.from({length:"z".codePointAt() - "a".codePointAt() + 1}, (_, i) => "a".codePointAt() + i )


    for(let char of skip) {
        const index = alphabet.indexOf(char.codePointAt())
        alphabet.splice(index, 1)
    }

    for(let char of s) {
        let i = alphabet.indexOf(char.codePointAt()) + index
        if (i >= alphabet.length) {
            i %= alphabet.length
        }
        answer += String.fromCharCode(alphabet[i])
    }
    return answer
}
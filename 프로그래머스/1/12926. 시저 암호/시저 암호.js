function solution(s,n) {
    const ascii = s.toLowerCase().split('').map((char, index) => {
        if(char === ' ') return char
        let nextChar = char.charCodeAt(0) + n
        if(nextChar > "z".charCodeAt(0)) {
            const nextCount = nextChar - "z".charCodeAt(0)
            nextChar = "a".charCodeAt(0) + nextCount - 1
        }
        return s[index] ===  s[index].toUpperCase()  ? String.fromCharCode((nextChar)).toUpperCase() : String.fromCharCode((nextChar))
    })

    return ascii.join('')
}

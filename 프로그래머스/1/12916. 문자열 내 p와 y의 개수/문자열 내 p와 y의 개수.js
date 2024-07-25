function solution(s) {
    const chars = s.toLowerCase().split('')
   
    return chars.filter((char) => char === "p").length === chars.filter((char) => char === "y").length
}

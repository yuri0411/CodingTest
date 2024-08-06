function solution(x) {
    const sumOfdigits = String(x).split('').reduce((acc, curr) => acc += Number(curr), 0)
    
    return !Boolean(x % sumOfdigits)
}
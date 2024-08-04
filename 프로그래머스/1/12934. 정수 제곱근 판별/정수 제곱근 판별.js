function solution(n) {
    const sqrt = Math.sqrt(n)
    const pow = Math.trunc(sqrt)
    
    return sqrt === pow ? Math.pow(sqrt + 1, 2) : -1
}
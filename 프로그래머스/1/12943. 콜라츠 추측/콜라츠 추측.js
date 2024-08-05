function solution(n) {
    let calcCount = 0
    while (n !== 1) {
        if(calcCount === 500 ) return -1
        if(n % 2 == 0) {
            n /= 2
        } else if(n % 2 == 1) {
            n = n * 3 + 1
        }
        calcCount++
    }

    return calcCount
}
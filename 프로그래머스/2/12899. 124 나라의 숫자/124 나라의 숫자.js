function solution(n) {
    let answer = []
    let arr = [4, 1, 2]

    while (n !== 0) {
        const rest  = n % 3
        n = Math.floor(n / 3)

        if(rest === 0) {
            n--
        }
        answer.unshift(rest)
    }
    return answer.map((quotient) => arr[quotient]).join('')
}
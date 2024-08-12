function solution(a, b, n) {
    let count = 0
    let rest = 0
    while(n >= a) {
        rest = n % a
        let quotient = Math.floor(n / a) * b
        n = quotient + rest

        count += quotient
    }

    return count ;
}
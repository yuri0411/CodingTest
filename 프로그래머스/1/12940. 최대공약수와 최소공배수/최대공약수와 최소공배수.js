function solution(n, m) {
    let gcd = 0

    for(let i = 1; i <= Math.min(n, m); i++) {
        if(n % i === 0 && m % i === 0) {
            gcd = i
        }
    }

    return [gcd, gcd * (n / gcd ) * ( m / gcd )];
}

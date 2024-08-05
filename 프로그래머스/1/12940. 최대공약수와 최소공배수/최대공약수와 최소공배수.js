function calcGcd(a, b) {
    if(b === 0) return a
    return a > b ? calcGcd(b, a % b) : calcGcd(a, b % a)
}

function solution(n, m) {
    const gcb = calcGcd(n, m)
    const lcm = (n * m) / gcb

    return [gcb, lcm];
}

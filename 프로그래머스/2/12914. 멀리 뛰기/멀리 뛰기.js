function solution(n) {
    let a = 1n
    let b = 1n;

    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + temp
        a = temp
    }

    return b % 1234567n;
}
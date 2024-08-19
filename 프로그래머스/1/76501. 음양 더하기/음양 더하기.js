function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, index) => signs[index] ? acc + curr : acc - curr,0)
}
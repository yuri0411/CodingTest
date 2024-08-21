
function solution(X, Y) {
    const answer = []
    const map = {}
    for(let i = 0; i < X.length; i++) {
        if(map[X[i]]) {
            map[X[i]]++
        } else {
            map[X[i]] = 1
        }
    }

    for(let i = 0; i < Y.length; i++) {
        if(map[Y[i]]) {
            answer.push(Y[i])
            map[Y[i]] -= 1
        }
    }
    if(answer.length === 0) return '-1'
    answer.sort((a, b) => b - a)
    const isNotZero = answer.some((num) => +num > 0 )

    return isNotZero ? answer.join('') : '0'
}

const regex = /\d+|[a-zA-Z]|\W/g
function solution(dartResult) {
    let answer = [];

    const scoreMap = {
        S: 1,
        D: 2,
        T: 3,
        '*': 2,
        "#": -1
    }

    dartResult.match(regex).forEach((result, index, arr) => {
        if(scoreMap[result]) {
            if(result === '*') {
                answer[answer.length - 2] *= 2
                answer[answer.length - 1] *= 2
            } else if(result === '#') {
                answer[answer.length - 1] *=scoreMap[result]
            } else {
                answer.push(Math.pow(arr[index -1], scoreMap[result]))
            }
        }
    })
    return answer.reduce((a, b) => a + b)
}
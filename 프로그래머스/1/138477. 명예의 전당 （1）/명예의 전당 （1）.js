function solution(k, score) {
    let  arr = [];
    let answer = []

    for (let i = 0; i < score.length; i++) {
        if(arr.length !== k) {
            arr.push(score[i])
        } else {
            if(arr[0] <= score[i]) {
                arr.shift()
                arr.push(score[i])
            }
        }
        arr.sort((a,b) => a - b)
        answer.push(Math.min(...arr))

    }
    return answer;
}
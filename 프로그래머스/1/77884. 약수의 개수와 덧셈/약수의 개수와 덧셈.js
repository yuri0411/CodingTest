function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let submultiple = 0
        for (let j = 1; j <= i; j++) {
            if(i % j === 0) submultiple++
        }
        if(submultiple % 2 === 0) {
            console.log(i)
            answer += i
        } else {
            answer -= i
        }
    }
    return answer;
}
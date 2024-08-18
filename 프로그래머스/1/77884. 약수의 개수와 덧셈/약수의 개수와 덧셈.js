function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let submultiple = 0
        for (let j = 1; j <= i; j++) {
            if(i % j === 0) submultiple++
        }
        if(submultiple % 2 === 0) {
            answer += i
        } else {
            answer -= i
        }
    }
    return answer;
}


// 제곱근의 값이 정수이면 약수의 개수는 홀수다.
// Number.isInteger(Math.sqrt(i))
function solution(number, limit, power) {
    let answer = 0;
    let divisor = Array(number + 1).fill(0);
    for (let i = 1; i <= number; i++) {
        for (let j = i ; j <= number; j += i) {
            divisor[j]++;
        }
        if(divisor[i] > limit) {
            answer += power
        } else {
            answer += divisor[i]
        }
    }

    return answer;
}
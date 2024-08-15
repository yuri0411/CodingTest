function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const double = numbers[i] + numbers[j];
            if(!answer.includes(double)) answer.push(double)
        }
    }
    return answer.sort((a, b) => a - b);
}
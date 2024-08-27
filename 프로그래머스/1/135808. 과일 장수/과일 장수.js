function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let answer = []

    for(let i = 0; i < score.length; i += m) {
        answer.push(score.slice(i, i +m,))
    }

    return answer.filter((s) => s.length === m).reduce((acc, curr) => acc + (Math.min(...curr) * m),0);
}

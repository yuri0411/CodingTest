function solution(t, p) {
    let answer = [];
    const cuttingNum = p.length

    for (let i = 0; i < t.length; i++) {
        answer.push(t.substring(i, i + cuttingNum))
        if(i + cuttingNum === t.length) break
    }
    return answer.filter((a => +a <= +p)).length;
}

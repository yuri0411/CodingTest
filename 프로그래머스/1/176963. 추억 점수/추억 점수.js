function solution(names, yearning, photo) {
    let answer = [];
    const scoreMap = {}

    for(let i = 0; i < names.length; i++) {
        scoreMap[names[i]] = yearning[i]
    }

    for(let i = 0; i < photo.length; i++) {
        let sum = 0
        for(let j = 0; j < photo[i].length; j++) {
            if(scoreMap[photo[i][j]]) {
                sum += scoreMap[photo[i][j]]
            }
        }
        answer.push(sum)
    }
    return answer;
}
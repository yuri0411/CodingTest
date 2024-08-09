function solution(answers) {
    const studentsMap = {
        1: '12345',
        2: '21232425',
        3: '3311224455'
    }
    let scoreMap = {}
    for (let [student, score] of Object.entries(studentsMap)) {
        const repeatScore = answers.length > score.length ? score.repeat(Math.ceil(answers.length / score.length)) : score
        let count = 0
        for (let i = 0; i < answers.length; i++) {
            if(repeatScore[i] === answers[i] + '') count++
        }
        scoreMap[student] = count
    }

    const max = Math.max(...Object.values(scoreMap))
    return Object.keys(scoreMap).filter((student) => scoreMap[student] === max).map(Number).sort((a,b) => a - b)
}
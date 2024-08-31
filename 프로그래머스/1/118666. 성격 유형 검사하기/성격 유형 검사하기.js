function solution(survey, choices) {
    const score = [3,2,1,0,1,2,3]
    const personality = new Map()
    const personalityType = ["RT", "CF", "JM", "AN"]

    let answer = ''

    choices.forEach((choice, index) => {
        const [first, second] = survey[index]
        if(choice < 4) {
            personality.set(first, (personality.get(first) ?? 0) + score[choice - 1])
        } else {
            personality.set(second, (personality.get(second) ?? 0) + score[choice - 1])
        }
    })


    for (let type of personalityType) {
        const [first, second] = type.split('')
        if(personality.has(first) && personality.has(second)) {
            answer += personality.get(first) >= personality.get(second) ? first : second
        } else if(personality.has(first) || personality.has(second)) {
            answer += personality.has(first) ? first : second
        } else {
            answer += first
        }
    }

    return answer
}
function solution(food) {
   let answer = []

    for(let i = 1; i < food.length; i++) {
        const q = Math.trunc(food[i] / 2)
        answer.push(...Array.from({length: q}, () => i))
    }

    return [...answer, 0, ...answer.reverse()].join('')
}
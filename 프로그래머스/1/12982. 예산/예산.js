function solution(d, budget) {
    d.sort((a, b) => a - b);
    let count = 0
    for (let part of d) {
        if(part <= budget) {
            budget -= part
            count++
        } else {
            break
        }
    }

    return count
}
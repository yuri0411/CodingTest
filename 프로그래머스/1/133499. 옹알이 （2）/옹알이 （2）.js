function solution(babbling) {
    let answer = 0
    for(let babble of babbling) {
        if(babble.replace(/aya|ye|woo|ma/g, '').length === 0) {
            const replaceBabble = babble.match(/aya|ye|woo|ma/g)

            if(replaceBabble.every((bab, index, arr) => arr[index + 1] !== bab)) {
                answer++
            }

        }
    }

    return answer;
}
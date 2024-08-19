const rankMap = {
    6 : 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
}

function solution(lottos, win_nums) {
    const answer = win_nums.filter((num) => lottos.includes(num)).length;
    const unknownNumber = lottos.filter((lotto) => !lotto).length;

    return [rankMap[answer + unknownNumber], rankMap[answer]];
}
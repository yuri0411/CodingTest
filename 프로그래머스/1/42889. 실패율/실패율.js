function solution(N, stages) {
    const stageMap = {}
    let length = stages.length
    for(let stage of stages) {
        if(stageMap[stage]) {
            stageMap[stage].count++
        } else {
            stageMap[stage] = {count: 1}
        }
    }

    for (let i = 1; i <= N; i++) {
        if(stageMap[i]) {
            stageMap[i].percent = stageMap[i].count / length * 100
            length -= stageMap[i].count
        } else {
            stageMap[i] = {count: 0, percent: 0}
        }
    }

    return Object.entries(stageMap).sort(([akey, avalue], [bkey, bvalue]) => (bvalue.percent - avalue.percent) || akey - bkey ).map(([key]) => +key).slice(0, N);
}
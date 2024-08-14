function solution(N, stages) {
    const stageMap = stages.reduce((acc, stage) => {
        if(stage <= N) {
            acc[stage] = acc[stage] ? { count: acc[stage].count + 1 } : { count: 1 };
        }
        return acc;
    }, {})
    
    let length = stages.length
    for (let i = 1; i <= N; i++) {
        if(stageMap[i]) {
            stageMap[i].percent = stageMap[i].count / length * 100
            length -= stageMap[i].count
        } else {
            stageMap[i] = {count: 0, percent: 0}
        }
    }

    return Object.keys(stageMap).sort((a, b) => (stageMap[b].percent - stageMap[a].percent) || a - b ).map(Number);
}

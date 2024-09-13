function solution(n, lost, reserve) {
    const exceptionLost = reserve.filter((r) => !lost.includes(r)).sort((a, b) => a - b)
    const exceptionReserve = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b)

    for(let i = 0; i < exceptionLost.length; i++) {
        let prev = exceptionLost[i] - 1
        let next = exceptionLost[i] + 1
        
        if(exceptionReserve.includes(prev)) {
            exceptionReserve.splice(exceptionReserve.indexOf(prev), 1)
        } else if(exceptionReserve.includes(next)) {
            exceptionReserve.splice(exceptionReserve.indexOf(next), 1)
        }
        
    }
    return n - exceptionReserve.length
}

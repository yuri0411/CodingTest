function solution(n) {
    const binaryNum = n.toString(2)
    let numGreaterThanN = n + 1
    while (1) {
       if(binaryNum.replace(/[0]/g, '').length === numGreaterThanN.toString(2).replace(/[0]/g, '').length) {
            return numGreaterThanN
       }
        numGreaterThanN++
    }
}
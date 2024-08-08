function solution(array, commands) {
     return commands.map((command) => {
        let [start, end, index] = command
        start--, end--, index--
         
        const sliceArr = array.filter((_, i) =>  i >= start && i <= end).sort((a, b) => a - b);
        
        return sliceArr[index]
    })
}
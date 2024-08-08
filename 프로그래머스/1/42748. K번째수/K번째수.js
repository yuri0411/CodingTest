function solution(array, commands) {
    return commands.map((command) => {
        const sliceArr = array.filter((_, index) =>  index >= command[0] - 1 && index <= command[1] - 1).sort((a, b) => a - b);
        return sliceArr[command[2] - 1]
    })
}
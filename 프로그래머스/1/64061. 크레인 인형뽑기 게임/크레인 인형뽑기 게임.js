function solution(board, moves) {
    let answer = 0;
    let boards = []
    let stack = []
    for (let i = 0; i < board.length; i++) {
        boards[i] = []
        for (let j = board[i].length - 1; j >= 0; j--) {
            if(board[j][i] > 0) boards[i].push(board[j][i])
        }
    }

    for (let i = 0; i < moves.length; i++) {
        const end = boards[moves[i] - 1].pop()
        if(!end) continue
        
        if(stack[stack.length - 1] === end) {
            stack.pop()
            answer += 2
        } else {
            stack.push(end)
        }
    }
    return answer;
}

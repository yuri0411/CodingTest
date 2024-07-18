function correctPair (queue) {
    if(queue.length % 2 !== 0) return false
    
    let stack = []
    const pairObj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for(let i = 0; i < queue.length; i ++){
        if(queue[i] === "(" || queue[i] === "{" || queue[i] === "[") {
            stack.push(queue[i])
        } else if(queue[i] === pairObj[stack[stack.length -1]]) {
            stack.pop()
        }
    }
    return stack.length === 0
}

function solution(s) {
    let answer = 0

    let queue = s.split('')

    for(let i = 0; i < s.length; i++) {
        queue.unshift(queue.pop())
        if(correctPair(queue)) {
            answer++
        }

    }
    return answer
}

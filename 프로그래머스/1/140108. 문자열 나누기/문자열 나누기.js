function solution(s) {
    let answer = 0;
    let startCharCount = 0
    let excludeStartCharCount = 0
    let string = s
    let start = 0
    
    while(string.length > 0) {
        if(string[0] === string[start]) {
            startCharCount++
        } else {
            excludeStartCharCount++
        }
        start++

        if(startCharCount === excludeStartCharCount) {
            answer++
            string = string.substring(startCharCount + excludeStartCharCount)
            startCharCount = 0
            excludeStartCharCount = 0
            start = 0
        }
    }
    return answer;
}

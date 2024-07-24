function solution(a, b) {
    let sum = 0
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    
    for(let i = min; i <= max; i++) {
        sum+= i
    }
    return sum;
}

// 가우스 공식을 활용하여 풀 수 있음.
// 양 끝의 합 = ( a + b )
// 더할 숫자의 개수 총합의 1/2 = ( b - a + 1) * 1/2
// ( a + b ) *  ( b - a + 1) * 1/2  

function solution(s) {
    const chars = s.toLowerCase().split('')
   
    return chars.filter((char) => char === "p").length === chars.filter((char) => char === "y").length
}


// match 메서드와 정규표현식을 이용한 풀이
// return s.match(/p/ig).length == s.match(/y/ig).length

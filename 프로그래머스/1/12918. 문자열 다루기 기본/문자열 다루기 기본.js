function solution(s) {
     return Boolean(s.match(/^([0-9]{4})$/) || s.match(/^([0-9]{6})$/))
}

// 다른 정규표현식 풀이
// let regex = /^\d{6}$|^\d{4}$/;
// regex.test(s)

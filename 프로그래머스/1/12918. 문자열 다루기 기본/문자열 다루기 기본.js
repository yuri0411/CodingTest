function solution(s) {
     return Boolean(s.match(/^([0-9]{4})$/) || s.match(/^([0-9]{6})$/))
}
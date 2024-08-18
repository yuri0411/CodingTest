const enNumbersMap = {
    	'zero' :0,
    	'one' :1,
    	'two' :2,
    	'three' :3,
    	'four' :4,
    	'five' :5,
    	'six' :6,
    	'seven' :7,
    	'eight' :8,
    	'nine' :9,
}

function solution(s) {
    let answer = [];

    let enNum = ''
    for (let i = 0; i <= s.length; i++) {
        if (Object.keys(enNumbersMap).includes(enNum)){
            answer.push(enNumbersMap[enNum])
            enNum = ''
        }

        if(!isNaN(s[i])) {
            answer.push(s[i])
        } else  {
            enNum += s[i]
        }
    }
    return +answer.join('');
}

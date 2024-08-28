function solution(ingredient) {
    let answer = 0;
    let stack = []

      for (let i = 0; i < ingredient.length; i++) {
          stack.push(ingredient[i]);
          if(stack.length >= 4 && stack.slice(-4).join() === [1,2,3,1].join()){
              stack.splice(-4)
              answer++
          }
      }

    return answer;
}
function solution(cards1, cards2, goal) {
    let card1Idx = 0
    let card2Idx = 0

   for(let i = 0; i < goal.length; i++) {
       if(cards1[card1Idx] === goal[i]) {
           card1Idx++
       }
       if(cards2[card2Idx] === goal[i]) {
           card2Idx++
       }
   }

   return card1Idx + card2Idx === goal.length ? "Yes" : "No"

}
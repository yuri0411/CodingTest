function solution(players, callings) {
   let map = {}

   for(let i = 0; i < players.length; i++) {
        map[players[i]] = i
    }


     for(let calling of callings) {
        const index = map[calling]
        const prevPlayer = players[index - 1]
        
        players[index] = prevPlayer
        players[index - 1] = calling

        map[calling] = index - 1
        map[prevPlayer] = index
    }
    
    return players
}
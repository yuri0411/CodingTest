function solution(bandage, health, attacks) {
    let sequence = 0
    let currentHealth = health

    const attackMap = new Map(attacks.map(([time, attack]) => [time, attack]))
    const attackTime = Math.max(...attackMap.keys())

    for(let i = 1; i <= attackTime; i++) {
        if(attackMap.has(i)) {
            currentHealth -= attackMap.get(i)
            sequence = 0
        } else {
            sequence++
            if(sequence === bandage[0]) {
                currentHealth += bandage[2]
                sequence = 0
            }
            currentHealth += bandage[1]
            if(currentHealth > health) {
                currentHealth = health
            }
        }
        if(currentHealth < 1) return -1
    }

    return currentHealth > 0 ? currentHealth : -1;
}

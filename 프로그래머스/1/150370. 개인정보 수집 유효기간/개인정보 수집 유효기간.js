function solution(today, terms, privacies) {
    const currentDate = new Date(today).valueOf()
    const periodOfTerm = new Map(terms.map((t) => {
        const [term, period] = t.split(' ');
        return [term, +period]
    }))

    let answer = [];

    for (let i = 0; i < privacies.length; i++) {
        let [date, term] = privacies[i].split(' ')
        const collectionDate = new Date(date)

        if(collectionDate.getDate() === 1) {
            collectionDate.setDate(29)
             collectionDate.setMonth(collectionDate.getMonth() - 1)
        }

        const valueOfDate = collectionDate.setMonth(collectionDate.getMonth() + periodOfTerm.get(term))

        if(valueOfDate <= currentDate) {
            answer.push(i + 1)
        }

    }
    return answer;
}
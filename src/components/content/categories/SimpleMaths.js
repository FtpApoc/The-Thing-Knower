const SimpleMaths = () => {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)

    const addition = (a,b) => {
        const answer = (a + b);
        const question = (`What is ${a} + ${b}?`)
        return {answer, question}
    }

    const multiplication = (a,b) => {
        const answer = (a * b);
        const question = (`What is ${a} x ${b}?`)
        return {answer, question}
    }

    const subtraction = (a,b) => {
        const answer = (a - b);
        const question = (`What is ${a} - ${b}?`)
        return {answer, question};
    }

    const functionList = [
        addition,
        subtraction,
        multiplication
    ]

    const fuctionNum = Math.floor(Math.random() * functionList.length)

    const {answer,question} = functionList[fuctionNum](a,b)

    return {answer,question};
}
 
export default SimpleMaths;
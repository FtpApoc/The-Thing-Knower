import { getRandomNumber } from '../../../Utilities';

const SimpleMaths = () => {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)

    const addition = (a,b) => {
        const question = (`What is ${a} + ${b}?`)
        const answer = (a + b);
        return {question, answer}
    }

    const multiplication = (a,b) => {
        const question = (`What is ${a} x ${b}?`)
        const answer = (a * b);
        return {question, answer}
    }

    const subtraction = (a,b) => {
        const question = (`What is ${a} - ${b}?`)
        const answer = (a - b);
        return {question, answer};
    }

    const functionList = [
        addition,
        subtraction,
        multiplication
    ]

    const fuctionNum = getRandomNumber(functionList.length)

    const {question, answer} = functionList[fuctionNum](a,b)

    const alternate = []

    return {question, answer, alternate};
}
 
export default SimpleMaths;
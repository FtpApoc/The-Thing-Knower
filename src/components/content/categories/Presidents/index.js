import presidents from './presidents.json'
import { pickRandomFromList, Ordinalise } from '../../../Utilities';

const Presidents = () => {
    const president = pickRandomFromList(presidents)

    const question = (`Who was the ${Ordinalise(president["number"])} President of the USA?`)

    const answer = president["president"]
    const alternate = president["alternate"]

    return {question, answer, alternate};
}
 
export default Presidents;
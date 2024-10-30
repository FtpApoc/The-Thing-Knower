import presidents from './presidents.json'
import { getRandomNumber, Ordinalise, pickRandomFromList } from '../../../Utilities';
import { joinPaths } from '@remix-run/router';

const Presidents = () => {
    // const president = presidents[getRandomNumber(presidents.length)]
    const president = pickRandomFromList(presidents)["choice"]

    const question = (`Who was the ${Ordinalise(president["number"])} President of the USA?`)

    const answer = president["president"]

    return {question, answer};
}
 
export default Presidents;
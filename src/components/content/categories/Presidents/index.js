import presidents from './presidents.json'
import { getRandomNumber } from '../../../Utilities';

const Presidents = () => {
    const president = presidents[getRandomNumber(presidents.length)]

    const question = (`Who was the ${president["number"]}th(?) President?`)

    const answer = president["president"]

    return { question, answer};
}
 
export default Presidents;
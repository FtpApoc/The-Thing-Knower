import * as Leader from './../../Leaders'
import presidents from './presidents.json'
import { pickRandomFromList } from '../../../Utilities';

const Presidents = () => {
    const president = pickRandomFromList(presidents)

    const dates = () => {
        const {question} = Leader.dates(
            "US President", //type
            president["took_office"], //dateStart
            president["left_office"], //dateEnd
        )

        return question;
    }

    const number = () => {
        const {question} = Leader.number(
            president["number"], //number
            "President of the USA", //type
        )

        return question;
    }

    const predecessor = () => {
        const prePres = presidents[`${president["number"]}`]

        const {question} = Leader.predecessor(
            "US President", //type
            prePres["president"]
        )

        return question;
    }


    const successor = () => {
        const sucPres = presidents[`${president["number"]-2}`]

        const {question} = Leader.successor(
            "US President", //type
            sucPres["president"]
        )

        return question;
    }

    const functionList = [
        number,
        dates,
        predecessor,
        successor
    ]

    const question = pickRandomFromList(functionList)()
    const answer = president["president"] //leaderName (answer)
    const alternate = president["alternate"] //alternates

    return {question, answer, alternate};
}
 
export default Presidents;
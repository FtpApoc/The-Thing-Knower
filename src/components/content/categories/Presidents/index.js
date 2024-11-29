import * as Leader from './../../Leaders'
import presidents from './presidents.json'
import { pickRandomFromList } from '../../../Utilities';

const Presidents = () => {
    const president = pickRandomFromList(presidents)

    const nameRes = () => { 
        const answer = president["president"] //leaderName (answer)
        const alternate = president["alternate"] //alternates
        
        return {answer,alternate}
    }

    const dates = () => {
        const {question} = Leader.dates(
            "US President", //type
            president["took_office"], //dateStart
            president["left_office"], //dateEnd
        )
        
        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }

    const number = () => {
        const {question} = Leader.number(
            president["number"], //number
            "President of the USA", //type
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }

    const predecessor = () => {
        const prePres = presidents[`${president["number"]}`]

        const {question} = Leader.predecessor(
            "US President", //type
            prePres["president"]
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }


    const successor = () => {
        const sucPres = presidents[`${president["number"]-2}`]

        const {question} = Leader.successor(
            "US President", //type
            sucPres["president"]
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }

    const party = () => {
        const {question} = Leader.party(president["president"])

        
        const answer = president["party"]
        const alternate = []

        return {question,answer,alternate};
    }

    const functionList = [
        number,
        dates,
        predecessor,
        successor,
        party
    ]

    const {question, answer, alternate} = pickRandomFromList(functionList)()
    
    return {question, answer, alternate};
}
 
export default Presidents;
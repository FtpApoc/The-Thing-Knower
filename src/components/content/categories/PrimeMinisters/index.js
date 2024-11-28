import * as Leader from './../../Leaders'
import primeMinisters from './PrimeMinisters.json'
import { pickRandomFromList } from '../../../Utilities';

const PrimeMinisters = () => {
    const pm = pickRandomFromList(primeMinisters)

    const getFullName = (pm) => {
        if (pm["Optional"] === ""){
            return `${pm["GivenName"]} ${pm["Surname"]}`
        } else {
             return `${pm["GivenName"]} ${pm["Surname"]}, ${pm["Optional"]}` 
        }
    }

    const getOccurrance = (pm) => {
        if (pm["Occurance"] != "only"){
            const name = getFullName(pm)
            return `${name} (${pm["Occurance"]})`
        } else {
            return getFullName(pm)
        }
    }

    const fullName = getFullName(pm) 
    
    const dates = () => { 
        const {question} = Leader.dates(
            "Prime Minister", //type
            pm["YearStart"], //dateStart
            pm["YearEnd"], //dateEnd
        )

        return question
    }

    const number = () => {
        const {question} = Leader.number(
                pm["PMID"], //number 
                "Prime Minister", //type
        )

        return question
    }

    const predecessor = () => {
        const prePM = primeMinisters[`${pm["PMID"]}`]

        const {question} = Leader.predecessor(
            "Prime Minister", //type
            getOccurrance(prePM)
        )

        return question;
    }


    const successor = () => {
        const sucPM = primeMinisters[`${pm["PMID"]-2}`]

        const {question} = Leader.successor(
            "Prime Minister", //type
            getOccurrance(sucPM)
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
    const answer = fullName //answer
    const alternate = pm["Surname"] //alternates

    return {question, answer, alternate};
}
 
export default PrimeMinisters;
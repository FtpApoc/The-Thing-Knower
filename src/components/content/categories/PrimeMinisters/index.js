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

    const nameRes = () => { 
        const answer = fullName //answer
        const alternate = pm["Surname"] //alternates    
        
        return {answer,alternate}
    }


    const fullName = getFullName(pm) 
    
    const dates = () => { 
        const {question} = Leader.dates(
            "Prime Minister", //type
            pm["YearStart"], //dateStart
            pm["YearEnd"], //dateEnd
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }

    const number = () => {
        const {question} = Leader.number(
                pm["PMID"], //number 
                "Prime Minister", //type
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }

    const predecessor = () => {
        const prePM = primeMinisters[`${pm["PMID"]}`]

        const {question} = Leader.predecessor(
            "Prime Minister", //type
            getOccurrance(prePM)
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }


    const successor = () => {
        const sucPM = primeMinisters[`${pm["PMID"]-2}`]

        const {question} = Leader.successor(
            "Prime Minister", //type
            getOccurrance(sucPM)
        )

        const {answer,alternate} = nameRes(); 

        return {question, answer, alternate};
    }

    const party = () => {
        const {question} = Leader.party(fullName)

        
        const answer = pm["PoliticalParty"]
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
 
export default PrimeMinisters;
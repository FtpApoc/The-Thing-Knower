import * as Leader from './../../Leaders'
import primeMinisters from './PrimeMinisters.json'
import { pickRandomFromList } from '../../../Utilities';

const PrimeMinisters = () => {
    const pm = pickRandomFromList(primeMinisters)
    
    const fullName = (() => {
        if (pm["Optional"] === ""){
            return `${pm["GivenName"]} ${pm["Surname"]}`
        } else {
             return `${pm["GivenName"]} ${pm["Surname"]}, ${pm["Optional"]}` 
        }
    })() 
    
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

    const functionList = [
        number,
        dates//,
        //predecessor,
        //successor
    ]

    const question = pickRandomFromList(functionList)()
    const answer = fullName //answer
    const alternate = pm["Surname"] //alternates

    return {question, answer, alternate};
}
 
export default PrimeMinisters;
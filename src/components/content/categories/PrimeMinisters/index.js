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
    
    // const {question, answer, alternate} = Leader.number(
    //     pm["PMID"], //number 
    //     "Prime Minister", //type
    //     fullName, //answer
    //     pm["Surname"] //alternates
    // )

    const {question, answer, alternate} = Leader.dates(
        "Prime Minister", //type
        pm["YearStart"], //dateStart
        pm["YearEnd"], //dateEnd
        fullName, //Leadername (answer)
        pm["Surname"] //alternates
    )

    return {question, answer, alternate};
}
 
export default PrimeMinisters;
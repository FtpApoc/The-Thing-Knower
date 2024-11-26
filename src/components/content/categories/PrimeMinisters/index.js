import * as Leader from './../../Leaders'
import primeMinisters from './PrimeMinisters.json'
import { pickRandomFromList } from '../../../Utilities';

const PrimeMinisters = () => {
    const pm = pickRandomFromList(primeMinisters)
    
    const fullName = `${pm["GivenName"]} ${pm["Surname"]}` 

    const {question, answer, alternate} = Leader.number(
        pm["PMID"], //number 
        "Prime Minister", //type
        fullName, //answer
        pm["Surname"] //alternates
    )

    return {question, answer, alternate};
}
 
export default PrimeMinisters;
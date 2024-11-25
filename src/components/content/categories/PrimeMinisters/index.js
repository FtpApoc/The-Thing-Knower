import primeMinisters from './PrimeMinisters.json'
import { pickRandomFromList, Ordinalise } from '../../../Utilities';

const PrimeMinisters = () => {
    const pm = pickRandomFromList(primeMinisters)
    
    const fullName = `${pm["GivenName"]} ${pm["Surname"]}` 

    const question = (`Who was the ${Ordinalise(pm["PMID"])} Prime Minister?`)

    

    const answer = fullName
    const alternate = pm["Surname"]

    return {question, answer, alternate};
}
 
export default PrimeMinisters;
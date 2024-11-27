import * as Leader from './../../Leaders'
import presidents from './presidents.json'
import { pickRandomFromList } from '../../../Utilities';

const Presidents = () => {
    const president = pickRandomFromList(presidents)

    const {question, answer, alternate} = Leader.dates(
        "US President", //type
        president["took_office"], //dateStart
        president["left_office"], //dateEnd
        president["president"], //leaderName (answer)
        president["alternate"] //alternates
    )


    // const {question, answer, alternate} = Leader.number(
    //     president["number"], //number
    //     "President of the USA", //type
    //     president["president"], //answer
    //     president["alternate"] //alternates
    // )

    return {question, answer, alternate};
}
 
export default Presidents;
import { Ordinalise } from '../Utilities';

export function number(leaderNum,leaderType,leaderName,alternates){

    const question = (`Who was the ${Ordinalise(leaderNum)} ${leaderType}?`)

    const answer = leaderName
    const alternate = alternates

    return {question, answer, alternate};
}

export function officeDates(date){
    //what else should it handle
}
import { Ordinalise } from '../Utilities';

export function number(leaderNum,leaderType,leaderName,alternates){

    const question = (`Who was the ${Ordinalise(leaderNum)} ${leaderType}?`)

    const answer = leaderName
    const alternate = alternates

    return {question, answer, alternate};
}

export function dates(leaderType,dateStart,dateEnd,leaderName,alternates){
   const question = (`Which ${leaderType} was in office between ${dateStart}-${dateEnd}?`)

   const answer = leaderName
   const alternate = alternates

   return {question, answer, alternate};
}
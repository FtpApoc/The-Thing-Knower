import { Ordinalise } from '../Utilities';

export function number(leaderNum,leaderType){

    const question = (`Who was the ${Ordinalise(leaderNum)} ${leaderType}?`)

    return {question};
}

export function dates(leaderType,dateStart,dateEnd){
   const question = (`Which ${leaderType} was in office between ${dateStart}-${dateEnd}?`)


   return {question};
}
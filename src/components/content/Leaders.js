import { Ordinalise } from '../Utilities';

export function number(leaderNum,leaderType){

    const question = (`Who was the ${Ordinalise(leaderNum)} ${leaderType}?`)

    return {question};
}

export function dates(leaderType,dateStart,dateEnd){
   const question = (`Which ${leaderType} was in office between ${dateStart}-${dateEnd}?`)


   return {question};
}

export function predecessor(leaderType,name){
    const question = (`Which ${leaderType} precedes ${name}?`)

    return {question};
}

export function successor(leaderType,name){
    const question = (`Which ${leaderType} succeeds ${name}?`)

    return {question};
}

export function party(name){
    const question = `Which political party did ${name} belong to?`

    return {question};
}
export function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

export function Ordinalise(n){
    //ordinalise the number 
    var s = ["th", "st", "nd", "rd"],
    v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function pickRandomFromList(list){
    const choice = list[getRandomNumber(list.length)]
    return choice
}
import capitals from './country-by-capital-city.json'
import { getRandomNumber } from '../../../Utilities';

const CountryData = () => {
    const country = capitals[getRandomNumber(capitals.length)]
    
    const question = (`What is the Capital of ${country["country"]}?`)

    const answer = country["city"]

    //alternate option, making each option case insensitive
    const alternate = [country["country"].toLowerCase()]
    
    //TODO: Add Alternate Capitals (Bolivia / South Africa)

    return {  question, answer, alternate };
}
 
export default CountryData;
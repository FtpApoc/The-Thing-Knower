import capitals from './country-by-capital-city.json'
import { getRandomNumber } from '../../../Utilities';

const CountryData = () => {
    const country = capitals[getRandomNumber(capitals.length)]
    
    const question = (`What is the Capital of ${country["country"]}?`)
    const answer = country["city"]
    
    console.log(answer)
    
    return { answer, question };
}
 
export default CountryData;
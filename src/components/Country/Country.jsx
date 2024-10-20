import { useState } from 'react';
import './Country.css'
function Country({ country,markAsVisited }) {
    const [visit,setVisited] = useState(false);
    const { name, flags, languages, population, area } = country;

    const handleVisited = () => {
        setVisited(!visit)
    }

    // function markAsVisited() {
    //     // console.log(89);
    // }
    return (
        <div className={`country ${visit&&'visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{color: visit?'yellow':'white'}}>Name: {name.common}</h3>
            <p>Languages: {languages?.eng?languages.eng:'N/A'}</p> 
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}>{visit?'Visited':'Going' }</button>
            {visit ? ' I have visited this country' : ' I want to visit'}; <br />
            <button onClick={()=>markAsVisited(country)}>Mark as visited</button>
        </div>
    );
}

export default Country;
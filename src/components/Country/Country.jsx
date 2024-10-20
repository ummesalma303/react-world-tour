import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
function Country({ country,markAsVisited,handleVisitedFlags}) {
   const [visited,setVisited]=useState(false)
    const { name, flags, languages, population, area } = country;
    const handleVisited = () => {
    setVisited(!visited)
}

    return (
        <div className={`country ${visited&& 'visited'}`}>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Language: { languages?.eng?languages.eng:'N/A'}</p>
            <p>{ population}</p>
            <p>{area}</p>
            <button onClick={()=>markAsVisited(country)}>Mak As Show</button>
            <button onClick={()=> handleVisitedFlags(flags)}>Visited Flags</button>
            <button onClick={handleVisited}>{ visited?'Visited':'Going'}</button> <br />
            {visited ? 'I have visited this country.' : 'I want to visit.'} 
            <hr />
            <div>
            <CountryDetails country={country} markAsVisited={markAsVisited} handleVisitedFlags={handleVisitedFlags}></CountryDetails>
            </div>
        </div>
    );
}

export default Country;


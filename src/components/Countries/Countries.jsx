import './Countries.css'
import Country from '../Country/Country';
import { useState, useEffect } from "react";
// import Country from "./Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    // function my() {
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(res => res.json())
    //     .then(data => setCountries(data))
    // }
    const markAsVisited = (country) => {
        const newVisited = [...visitedCountries,country]
        setVisitedCountries(newVisited)

    }

    function handleVisitedFlags(flags) {
        const newFlags = [...visitedFlags,flags]
        setVisitedFlags(newFlags)
    }
    // my()
    return (
        <>
            <h2>Total Countries {countries.length}</h2>
            <h3>Visited country : { visitedCountries.length}</h3>
            
            <ul>
                {
                    visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                }
                
            </ul>
            <div className="flag-container">
            {
                visitedFlags.map((flag,i)=><img key={i} src={flag.png} alt="" />)
            }
           </div>

        <div className="country-container">
            {
                countries.map(country => <Country key={country.ccn3} country={ country} markAsVisited={markAsVisited} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;
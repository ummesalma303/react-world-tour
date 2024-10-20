import './Countries.css'
import Country from '../Country/Country';
import { useState, useEffect } from "react";
// import Country from "./Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visited,setVisited]=useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    function markAsVisited(country) {
        const newVisited= [...visited,country]
        setVisited(newVisited)
        console.log(country);
        // console.log(543);
    }

    return (
        <>
            <h2>Total Countries {countries.length}</h2>
            <h3>Visited Countries</h3>
            <ul>
                <li>{ visited.length}</li>
            </ul>
        <div className="country-container">
            {
                countries.map(country => <Country key={country.ccn3} country={ country} markAsVisited={markAsVisited}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;
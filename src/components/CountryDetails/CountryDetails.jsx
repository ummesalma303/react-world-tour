import CountryData from "../CountryData/CountryData";

function CountryDetails(props) {
    const {country, markAsVisited, handleVisitedFlags} = props;
    return (
        <div>
            <h3>{country.name.common}</h3>
            <CountryData {...props}></CountryData>
        </div>
    );
}

export default CountryDetails;
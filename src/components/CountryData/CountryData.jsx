function CountryData(props) {
    const {country, markAsVisited, handleVisitedFlags} = props;
    return (
        <div>
            <h2><small>Country Data: { country.name.common}</small></h2>
        </div>
    );
}

export default CountryData;
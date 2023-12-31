import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(5);
  const [selectedRadios,setSelectedRadios] = useState ("")
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li key={continent.id}>
            <input type="radio" id={continent} name="continentRadio"onChange={(e) => setSelectedRadios(e.target.id)}/>
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {data.filter((country) => country.continents[0].includes(selectedRadios))
      .slice(0, rangeValue)
      .map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
};
export default Countries;

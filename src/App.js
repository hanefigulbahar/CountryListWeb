import axios from "axios";
import { useEffect, useState } from "react";
import AlertBox from "./Companent/Alert";
import LoadingSpinner from "./Companent/Spinner/Spinner"
import "./index.css"

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setData(response.data)
      setIsLoading(false)
    }
    fetchData();
  }, []);

  const searchData = async (e) => {
    setErrorMessage(false)
    try {
      const response = await axios.get("https://restcountries.com/v2/capital/" + e);
      setData(response.data)
    } catch (err) {
      setErrorMessage(true);
      setData([]);
      setIsLoading(false);
    }
  }

  function getData(key) {
    if (key !== ""){
      searchData(key)
    }
  }

  const countryList = (
    <div className="container">
      <input className="search-bar" type="text" placeholder="Search Capital" onChange={e => getData(e.target.value.trim())} />
      <table className="table table-bordered text-center">
        <thead className="table-active text-muted">
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        {data.map(repo =>
          <tbody key={repo.name}>
            <tr>
              <td><img src={repo.flag} style={{ width: "200px" }} alt="" /></td>
              <td>{repo.name}</td>
              <td>{repo.capital}</td>
              <td>{repo.region}</td>
            </tr>
          </tbody>)}
      </table>
    </div>
  )

  return (
    <div className="App">
      {errorMessage ? <AlertBox/> : null}
        {isLoading ? <LoadingSpinner /> : countryList}
    </div>
  );
}

export default App;

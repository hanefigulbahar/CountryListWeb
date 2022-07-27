import { CountryAPI } from "./API/CountryAPI";
import { useEffect, useState } from "react";
import AlertBox from "./Companent/Alert";
import LoadingSpinner from "./Companent/Spinner"
import "./index.css"

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function getAllData() {
    setIsLoading(true)
    setErrorMessage(false)
    CountryAPI
      .getAll()
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error)
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllData();
  }, []);

  function getSearchedData(searchKey) {
    setErrorMessage(false);
    if (searchKey !== "") {
      CountryAPI
        .getCapital(searchKey)
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          setErrorMessage(true)
        })
    }
  };

  const countryList = (
    <div className="container">
      <input className="search-bar" type="text" placeholder="Search Capital" onChange={e => getSearchedData(e.target.value.trim())} />
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
      {errorMessage ? <AlertBox /> : null}
      {isLoading ? <LoadingSpinner /> : countryList}
    </div>
  );
}

export default App;

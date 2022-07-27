import { CountryAPI } from "./API/CountryAPI";
import { useEffect, useState } from "react";
import AlertBox from "./Companent/Alert";
import LoadingSpinner from "./Companent/Spinner"
import "./index.css"
import CountryList from "./Companent/Table";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function getAllData() {
    setIsLoading(true)
    setIsError(false)
    CountryAPI
      .getAll()
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsError(true);
      });
  }

  useEffect(() => {
    getAllData();
  }, []);

  function getSearchedData(event) {
    const searchKey = event.target.value
    setIsError(false);
    if (searchKey !== "") {
      CountryAPI
        .getCapital(searchKey)
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          setIsError(true)
          setData([]);
        })
    }
  };

const table = CountryList(data,getSearchedData)

  

  return (
    <div className="App">
      {isError ? <AlertBox /> : null}
      {isLoading ? <LoadingSpinner /> : table}
    </div>
  );
}

export default App;

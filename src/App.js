import { CountryAPI } from "./API/CountryAPI";
import { useEffect, useState } from "react";
import AlertBox from "./Companent/Alert";
import LoadingSpinner from "./Companent/Spinner"
import "./index.css"
import CountryList from "./Companent/CountryList";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchKey, setSearchKey ]= useState("");

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

  function getSearchedData(searchKey) {
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

  useEffect(() => {
    getSearchedData(searchKey);
  } , [searchKey]);

  

  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : <CountryList data={data} setSearchKey={setSearchKey} />}
      {isError ? <AlertBox /> : null}
    </div>
  );
}

export default App;

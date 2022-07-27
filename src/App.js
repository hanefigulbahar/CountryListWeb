import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setData(response.data)
    }
    fetchData();
  }, []);

  const searchData = async (e) => {
    const response = await axios.get("https://restcountries.com/v2/capital/" + e);
    setData(response.data)
  }

  return (
    <div className="App">
      <input type="search" placeholder="Search" onChange={e => searchData(e.target.value)} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">img</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        {data.map(repo =>
          <tbody key={repo.name}>
            <tr>
              <td><img src={repo.flag} style={{ width: "200px" }} /></td>
              <td>{repo.name}</td>
              <td>{repo.capital}</td>
              <td>{repo.region}</td>
            </tr>
          </tbody>)}
      </table>
    </div>

  );
}

export default App;

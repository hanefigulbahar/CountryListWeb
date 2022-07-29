export default function CountryList({data, setSearchKey}) {

    return (
    <div className="container">
      <form>
      <input className="search-bar" type="text" placeholder="Search Capital" onChange={(event) => setSearchKey(event.target.value)} />
      </form>
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
}
export default function CountryList(countreis, handleChange) {
    return (
    <div className="container">
      <input className="search-bar" type="text" placeholder="Search Capital" onChange={handleChange} />
      <table className="table table-bordered text-center">
        <thead className="table-active text-muted">
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        {countreis.map(repo =>
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
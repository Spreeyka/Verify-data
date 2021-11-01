import { Link } from "react-router-dom";

export function Table(props) {
  let id = 0;
  let { values = [] } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">
            Charts from JSON {values[0]?.startsWith(".") ? "file" : "API"}{" "}
            datasets
          </th>
        </tr>
      </thead>
      <tbody>
        {values.length ? (
          values.map((value) => (
            <tr key={value}>
              <th scope="row">{++id}</th>
              <td>
                {value[0] === "." ? (
                  <Link to={`/data/charts/${id}`}>{value.slice(2, -5)}</Link>
                ) : (
                  <Link to={`/api/charts/${id}`}>{value}</Link>
                )}
              </td>
            </tr>
          ))
        ) : (
          <p> this list is empty </p>
        )}
      </tbody>
    </table>
  );
}

import { Link } from "react-router-dom";

export function Table(props) {
  let { id = 0 } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Description</th>
          <th scope="col">Charts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{++id}</th>
          <td>API1</td>
          <td>
            <Link to={`/charts/${id}`}>API1</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">{++id}</th>
          <td>API2</td>
          <td>
            <Link to={`/charts/${id}`}>API2</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">{++id}</th>
          <td>API3</td>
          <td>
            <Link to={`/charts/${id}`}>API3</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

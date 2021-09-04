export function Table() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>API1</td>
          <td>API1.com.pl</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>API2</td>
          <td>API2.com.pl</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>API3</td>
          <td>API3.com.pl</td>
        </tr>
      </tbody>
    </table>
  );
}

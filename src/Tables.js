import { Table } from "./Table";
import { API } from "./Constants";
import { getDatasetNames } from "./utils";

let apiNames = API;
let datasetNames = getDatasetNames(require.context("./data", false, /json$/));

export function Tables() {
  return (
    <div className="tables-div">
      <div className="table-container">
        <Table values={datasetNames}></Table>
      </div>
      <div className="table-container2">
        <Table values={apiNames}></Table>
      </div>
    </div>
  );
}

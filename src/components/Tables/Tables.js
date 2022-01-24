import { Table } from "../Table/Table";
import { API } from "../../Utils/Constants";
import { getDatasetNames } from "../../Utils/utils";
import requireContext from "require-context.macro";
import styles from "./Tables.module.css";

let apiNames = API;
let datasetNames = getDatasetNames(
  requireContext("../../data", false, /json$/)
);

export function Tables() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles[`dataset-table-wrapper`]}`}>
        <Table values={datasetNames}></Table>
      </div>
      <div className={`${styles[`api-table-wrapper`]}`}>
        <Table values={apiNames}></Table>
      </div>
    </div>
  );
}

import { createRef } from "react";
import { GrDocumentCsv } from "react-icons/gr";

export default function CsvReader(props) {
  let ref = createRef();

  const submit = () => {
    const file = ref;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text);
    };
    reader.readAsText(file);
  };

  const processCSV = (str) => {
    const rows = str
      .slice(str.indexOf("\n") + 1)
      .split(/[\s,]+/)
      .filter(
        (value) => value.match(/^[1-9]+[0-9]*,?[^A-Za-z]*$/) && value.length > 1
      );
    localStorage.setItem("data", rows);
    document.querySelector(".btn-dark").disabled = false;
    props.callbackFunc(true);
  };

  return (
    <form id="csv-form">
      <input
        type="file"
        className="file-container__input"
        accept=".csv"
        onChange={(e) => {
          ref = e.target.files[0];
          if (ref) submit();
        }}
      />
      <div className="file-container__icon">
        <GrDocumentCsv></GrDocumentCsv>
      </div>
      Or load data from CSV
    </form>
  );
}

export function FeedbackIcon({ value, critValue, operator }) {
  let operators = {
    ">=": function (a, b) {
      return a >= b;
    },
    "<": function (a, b) {
      return a < b;
    },
    ">": function (a, b) {
      return a > b;
    },
  };

  return (
    <>
      {operators[operator](value, critValue) ? (
        <span className="material-icons red">error</span>
      ) : (
        <span className="material-icons green">done</span>
      )}
    </>
  );
}

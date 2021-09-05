import { useParams } from "react-router";

const Chart = () => {
  const { id } = useParams;
  return <h2>Hello world {id}</h2>;
};

export default Chart;

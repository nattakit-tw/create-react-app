import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  const chartBar = props.dataPoints.map((dataPoint) => (
    <div>
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxValue}
        label={dataPoint.label}
      />
    </div>
  ));

  return <div className="chart">{chartBar}</div>;
}

export default Chart;

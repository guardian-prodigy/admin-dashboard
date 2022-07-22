import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  DateTime,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useGlobalStateContext} from '../../context/ContextProvider'
const LineChart = () => {
  const {currentMode} = useGlobalStateContext()
  return (
    <ChartComponent
      id="line-chart"
      height="420"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
    >
      <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => {
          return <SeriesDirective key={i} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;

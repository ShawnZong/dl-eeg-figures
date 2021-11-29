// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { generateRandomInt } from "../utils";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React, { useRef } from "react";

const MyResponsiveBar = () => {
  let data = [];

  for (let i = 2010; i < 2019; i++) {
    data.push({
      year: i,
      Affective: generateRandomInt(30),
      AffectiveColor: "hsl(314, 70%, 50%)",
      BCI: generateRandomInt(30),
      BCIColor: "hsl(58, 70%, 50%)",
      Cognitive: generateRandomInt(30),
      CognitiveColor: "hsl(233, 70%, 50%)",
      Epilepsy: generateRandomInt(30),
      EpilepsyColor: "hsl(34, 70%, 50%)",
      "Generation of data": generateRandomInt(30),
      "Generation of dataColor": "hsl(172, 70%, 50%)",
      "Improvement of processing tools": generateRandomInt(30),
      "Improvement of processing toolsColor": "hsl(293, 70%, 50%)",
      Others: generateRandomInt(30),
      OthersColor: "hsl(293, 70%, 60%)",
      Sleep: generateRandomInt(30),
      SleepColor: "hsl(293, 70%, 20%)",
    });
  }
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Affective",
        "BCI",
        "Cognitive",
        "Epilepsy",
        "Generation of data",
        "Improvement of processing tools",
        "Others",
        "Sleep",
      ]}
      width="900"
      height="500"
      indexBy="year"
      margin={{ top: 50, right: 230, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Generation of data",
          },
          id: "dots",
        },
        {
          match: {
            id: "Others",
          },
          id: "lines",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "year",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Number of papers",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in year: " + e.indexValue;
      }}
    />
  );
};
const ComponentToPrint = React.forwardRef((props, ref) => (
  <div style={props.styles} ref={ref}>
    <MyResponsiveBar />
  </div>
));
const ToPrintResponsiveBar = ({ styles }) => {
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint ref={componentRef} styles={styles} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </div>
  );
};
export { MyResponsiveBar, ToPrintResponsiveBar };

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/swarmplot
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { generateRandomInt } from "../utils";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const groups = [
  "Cognitive",
  "Improvement of processing tools",
  "BCI",
  "Generation of data",
  "Others",
  "Epliepsy",
  "Affective",
  "Sleep",
];
let data = [];

for (let i = 0; i < 200; i++) {
  data.push({
    dataset: `dataset${i}`,
    group: groups[generateRandomInt(8)],
    numSubject: generateRandomInt(10000000000),
    volume: 10,
  });
}

const MyResponsiveSwarmPlot = () => {
  return (
    <ResponsiveSwarmPlot
      width="1000"
      height="500"
      data={data}
      layout="horizontal"
      groups={groups}
      identity="dataset"
      value="numSubject"
      valueFormat="~e"
      valueScale={{ type: "linear", reverse: false }}
      size={{ key: "volume", values: [4, 20], sizes: [6, 20] }}
      forceStrength={4}
      simulationIterations={100}
      borderColor={{
        from: "color",
        modifiers: [
          ["darker", 0.6],
          ["opacity", 0.5],
        ],
      }}
      margin={{ top: 80, right: 100, bottom: 80, left: 200 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        format: "~e",
        legend: "Number of subjects",
        legendPosition: "middle",
        legendOffset: 50,
      }}
    />
  );
};

export { MyResponsiveSwarmPlot };

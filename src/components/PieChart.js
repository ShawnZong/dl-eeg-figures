// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from "@nivo/pie";
import { generateRandomInt } from "../utils";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const label = [
  "CNN",
  "GAN",
  "RBM",
  "N/M",
  "Other",
  "FC",
  "CNN+RNN",
  "DBN",
  "RNN",
  "AE",
];
let data = label.map((name) => {
  return {
    id: name,
    label: name,
    value: generateRandomInt(50),
    color: `hsl(${generateRandomInt(360)},
    ${generateRandomInt(100)}%,
    ${generateRandomInt(100)}%)`,
  };
});
let totalValue = 0;
data.forEach((eachClass) => (totalValue = totalValue + eachClass.value));
data = data.map((eachClass) => {
  eachClass.value = ((eachClass.value / totalValue) * 100).toFixed(2);
  return eachClass;
});

const MyResponsivePie = () => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 150, bottom: 80, left: 80 }}
      width="600"
      height="600"
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabel={(item) => `${item.value}%`}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "RNN",
          },
          id: "dots",
        },
        {
          match: {
            id: "CNN",
          },
          id: "dots",
        },
        {
          match: {
            id: "GAN",
          },
          id: "dots",
        },
        {
          match: {
            id: "Other",
          },
          id: "dots",
        },
        {
          match: {
            id: "FC",
          },
          id: "lines",
        },
        {
          match: {
            id: "DBN",
          },
          id: "lines",
        },
        {
          match: {
            id: "N/M",
          },
          id: "lines",
        },
        {
          match: {
            id: "RBM",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 320,
          translateY: -20,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export { MyResponsivePie };

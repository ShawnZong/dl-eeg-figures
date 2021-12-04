// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from "@nivo/pie";
import { generateRandomInt } from "../utils";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import { useState } from "react";
import { ToPrintComponent } from "./ToPrintComponent";
import { MyDropDown } from "./Dropdown";

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

const MyResponsivePie = ({ theme }) => {
  return (
    <ResponsivePie
      colors={{ scheme: theme }}
      data={data}
      margin={{ top: 40, right: 150, bottom: 80, left: 80 }}
      width="800"
      height="500"
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

const PieWithDropdown = ({ styles }) => {
  const [theme, setTheme] = useState("nivo");

  return (
    <div>
      <MyDropDown setTheme={setTheme} />
      <ToPrintComponent
        styles={styles}
        tobePrinted={<MyResponsivePie theme={theme} />}
      />
    </div>
  );
};
export { MyResponsivePie, PieWithDropdown };

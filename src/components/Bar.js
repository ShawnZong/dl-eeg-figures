// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { generateRandomInt } from "../utils";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import { useState } from "react";
import { ToPrintComponent } from "./ToPrintComponent";
import Dropdown from "react-bootstrap/Dropdown";
const MyResponsiveBar = ({ theme }) => {
  let data = [];

  console.log("theem::", theme);
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
      margin={{ top: 50, right: 230, bottom: 80, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: theme }}
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

const colorSchemeIds = [
  "nivo",
  // categorical
  "category10",
  "accent",
  "dark2",
  "paired",
  "pastel1",
  "pastel2",
  "set1",
  "set2",
  "set3",
  // diverging
  "brown_blueGreen",
  "purpleRed_green",
  "pink_yellowGreen",
  "purple_orange",
  "red_blue",
  "red_grey",
  "red_yellow_blue",
  "red_yellow_green",
  "spectral",
  // sequential single hue
  "blues",
  "greens",
  "greys",
  "oranges",
  "purples",
  "reds",
  // sequential multi hue
  "blue_green",
  "blue_purple",
  "green_blue",
  "orange_red",
  "purple_blue_green",
  "purple_blue",
  "purple_red",
  "red_purple",
  "yellow_green_blue",
  "yellow_green",
  "yellow_orange_brown",
  "yellow_orange_red",
];
const options = colorSchemeIds.map((schemeId) => ({
  value: schemeId,
  label: schemeId,
}));

console.log(options);
const BarWithDropdown = ({ styles }) => {
  const [theme, setTheme] = useState("nivo");
  console.log("aaa", theme);
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select A Theme
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ height: "70px", "overflow-y": "scroll" }}>
          {options.map((option, i) => (
            <Dropdown.Item
              onClick={() => setTheme(option.value)}
              value={option.value}
              key={i}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <ToPrintComponent
        styles={styles}
        tobePrinted={<MyResponsiveBar theme={theme} />}
      />
    </div>
  );
};
export { MyResponsiveBar, BarWithDropdown };

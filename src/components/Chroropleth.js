// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from "@nivo/geo";
import { generateRandomInt } from "../utils";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import { MyDropDown } from "./Dropdown";
import { ToPrintComponent } from "./ToPrintComponent";
import { useState } from "react";
import last from "lodash/last";
import {
  // Diverging
  schemeBrBG,
  schemePRGn,
  schemePiYG,
  schemePuOr,
  schemeRdBu,
  schemeRdGy,
  schemeRdYlBu,
  schemeRdYlGn,
  schemeSpectral,

  // Sequential (Single Hue)
  schemeBlues,
  schemeGreens,
  schemeGreys,
  schemeOranges,
  schemePurples,
  schemeReds,

  // Sequential (Multi-Hue)
  schemeBuGn,
  schemeBuPu,
  schemeGnBu,
  schemeOrRd,
  schemePuBuGn,
  schemePuBu,
  schemePuRd,
  schemeRdPu,
  schemeYlGnBu,
  schemeYlGn,
  schemeYlOrBr,
  schemeYlOrRd,
} from "d3-scale-chromatic";

const quantizeColorScales = {
  nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"],

  // Diverging
  BrBG: last(schemeBrBG),
  PRGn: last(schemePRGn),
  PiYG: last(schemePiYG),
  PuOr: last(schemePuOr),
  RdBu: last(schemeRdBu),
  RdGy: last(schemeRdGy),
  RdYlBu: last(schemeRdYlBu),
  RdYlGn: last(schemeRdYlGn),
  spectral: last(schemeSpectral),

  // Sequential (Single Hue)
  blues: last(schemeBlues),
  greens: last(schemeGreens),
  greys: last(schemeGreys),
  oranges: last(schemeOranges),
  purples: last(schemePurples),
  reds: last(schemeReds),

  // Sequential (Multi-Hue)
  BuGn: last(schemeBuGn),
  BuPu: last(schemeBuPu),
  GnBu: last(schemeGnBu),
  OrRd: last(schemeOrRd),
  PuBuGn: last(schemePuBuGn),
  PuBu: last(schemePuBu),
  PuRd: last(schemePuRd),
  RdPu: last(schemeRdPu),
  YlGnBu: last(schemeYlGnBu),
  YlGn: last(schemeYlGn),
  YlOrBr: last(schemeYlOrBr),
  YlOrRd: last(schemeYlOrRd),
};
const world_countries = require("../data/world_countries.json");
const data = world_countries.features.map((country) => {
  return { id: country.id, value: generateRandomInt(30) };
});
const MyResponsiveChoropleth = ({ theme }) => (
  <ResponsiveChoropleth
    data={data}
    features={world_countries.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors={theme}
    domain={[0, 30]}
    unknownColor="#666666"
    label="properties.name"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

const ChoroplethWithDropdown = ({ styles }) => {
  const [theme, setTheme] = useState("nivo");

  return (
    <div>
      <MyDropDown setTheme={setTheme} colorSchemeIds={quantizeColorScales} />
      <ToPrintComponent
        styles={styles}
        tobePrinted={<MyResponsiveChoropleth theme={theme} />}
      />
    </div>
  );
};
export { MyResponsiveChoropleth, ChoroplethWithDropdown };

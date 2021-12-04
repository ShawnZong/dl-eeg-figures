import Dropdown from "react-bootstrap/Dropdown";
import last from "lodash/last";
import {
  // categorical
  schemeCategory10,
  schemeAccent,
  schemeDark2,
  schemePaired,
  schemePastel1,
  schemePastel2,
  schemeSet1,
  schemeSet2,
  schemeSet3,
  // diverging
  schemeBrBG,
  schemePRGn,
  schemePiYG,
  schemePuOr,
  schemeRdBu,
  schemeRdGy,
  schemeRdYlBu,
  schemeRdYlGn,
  schemeSpectral,
  // sequential single hue
  schemeBlues,
  schemeGreens,
  schemeGreys,
  schemeOranges,
  schemePurples,
  schemeReds,
  // sequential multi hue
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

// used for ordinal color scales
const colorSchemes = {
  nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"],
  // categorical
  category10: schemeCategory10,
  accent: schemeAccent,
  dark2: schemeDark2,
  paired: schemePaired,
  pastel1: schemePastel1,
  pastel2: schemePastel2,
  set1: schemeSet1,
  set2: schemeSet2,
  set3: schemeSet3,
  // diverging
  brown_blueGreen: last(schemeBrBG),
  purpleRed_green: last(schemePRGn),
  pink_yellowGreen: last(schemePiYG),
  purple_orange: last(schemePuOr),
  red_blue: last(schemeRdBu),
  red_grey: last(schemeRdGy),
  red_yellow_blue: last(schemeRdYlBu),
  red_yellow_green: last(schemeRdYlGn),
  spectral: last(schemeSpectral),
  // sequential single hue
  blues: last(schemeBlues),
  greens: last(schemeGreens),
  greys: last(schemeGreys),
  oranges: last(schemeOranges),
  purples: last(schemePurples),
  reds: last(schemeReds),
  // sequential multi hue
  blue_green: last(schemeBuGn),
  blue_purple: last(schemeBuPu),
  green_blue: last(schemeGnBu),
  orange_red: last(schemeOrRd),
  purple_blue_green: last(schemePuBuGn),
  purple_blue: last(schemePuBu),
  purple_red: last(schemePuRd),
  red_purple: last(schemeRdPu),
  yellow_green_blue: last(schemeYlGnBu),
  yellow_green: last(schemeYlGn),
  yellow_orange_brown: last(schemeYlOrBr),
  yellow_orange_red: last(schemeYlOrRd),
};

const MyDropDown = ({ setTheme, colorSchemeIds = colorSchemes }) => {
  let items = [];
  const boxStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
  };
  Object.entries(colorSchemeIds).forEach(([colorIndex, colorValue]) => {
    items.push(
      <Dropdown.Item
        onClick={() => setTheme(colorIndex)}
        value={colorIndex}
        key={colorIndex}
      >
        {colorIndex}{" "}
        {colorValue.map((v, i) => {
          return <div key={i} style={{ ...boxStyle, background: `${v}` }} />;
        })}
      </Dropdown.Item>
    );
  });
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select A Theme
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ height: "200px", overflowY: "scroll" }}>
        {items}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { MyDropDown };

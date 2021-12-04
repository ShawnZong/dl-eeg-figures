import Dropdown from "react-bootstrap/Dropdown";

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

const MyDropDown = ({ setTheme }) => (
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Select A Theme
    </Dropdown.Toggle>

    <Dropdown.Menu style={{ height: "200px", overflowY: "scroll" }}>
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
);

export { MyDropDown };

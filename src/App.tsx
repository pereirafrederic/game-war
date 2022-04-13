import "./styles.css";
import { Card } from "antd";

const taille = 10;

const gridStyle = {
  display: "flex",
  with: 100 / taille + "%",
  heigth: 100 / taille + "%",
  flexDirection: "row",
  flexWrap: "nowrap",
  flexGrow: "1",
  alignItems: "stretch",
  alignContent: "center"
};

const cases: Array<number> = Array.from(Array(taille).keys());

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {cases.map((value, index) => (
        <Card.Grid style={gridStyle}>{value}</Card.Grid>
      ))}
    </div>
  );
}
